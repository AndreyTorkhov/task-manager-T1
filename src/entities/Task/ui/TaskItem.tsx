import { useState } from "react";
import { Button, Tag } from "@admiral-ds/react-ui";
import { SystemDeleteOutline } from "@admiral-ds/icons";
import { useNavigate } from "react-router-dom";
import { getPriorityStyle } from "../lib/getPriorityStyle";
import { formatDate } from "../lib/formatDate";
import { useTasksStore } from "../model/store";
import type { Task } from "../model/types";
import { ConfirmDialog } from "@/shared/ui/ConfirmDialog";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  const { deleteTask, isLoading } = useTasksStore();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteTask(task.id);
    setConfirmOpen(false);
  };

  const handleNavigate = () => {
    if (!isLoading) {
      navigate(`/task/${task.id}`);
    }
  };

  const formattedDate = formatDate(task.createdAt);

  return (
    <>
      <div
        className={`border border-gray-200 rounded-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 bg-white shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 cursor-pointer min-h-[180px] sm:min-h-[220px] w-full max-w-full ${
          isLoading ? "pointer-events-none opacity-50" : ""
        }`}
        tabIndex={0}
        onClick={handleNavigate}
      >
        <div className="flex justify-between items-center overflow-hidden h-7 sm:h-8">
          <h2
            className="text-sm sm:text-base font-semibold truncate max-w-[calc(100%-60px)]"
            title={task.title}
          >
            {task.title}
          </h2>
          <Tag
            dimension="s"
            kind={getPriorityStyle(task.priority)}
            className="text-[9px] sm:text-[10px] px-[4px] sm:px-[6px] font-semibold shrink-0"
          >
            {task.priority}
          </Tag>
        </div>

        {task.description && (
          <p
            className="text-xs sm:text-sm text-gray-600 line-clamp-2 overflow-hidden text-ellipsis"
            title={task.description}
          >
            {task.description}
          </p>
        )}

        <div className="mt-auto pt-2 flex flex-wrap gap-1 sm:gap-2 text-xs mb-2">
          <Tag dimension="s" kind="primary">
            {task.category}
          </Tag>
          <Tag dimension="s" kind="primary">
            {task.status}
          </Tag>
        </div>

        <div className="flex justify-between items-center border-t pt-2">
          <span className="text-xs text-gray-500">
            Created at {formattedDate}
          </span>
          <Button
            dimension="s"
            appearance="danger"
            onClick={(e) => {
              e.stopPropagation();
              setConfirmOpen(true);
            }}
            loading={isLoading}
            className="!p-1"
          >
            <SystemDeleteOutline width={16} height={16} />
          </Button>
        </div>
      </div>

      {confirmOpen && (
        <ConfirmDialog
          title="Delete Task"
          description={`Are you sure you want to delete "${task.title}"?`}
          onConfirm={handleDelete}
          onClose={() => setConfirmOpen(false)}
        />
      )}
    </>
  );
};
