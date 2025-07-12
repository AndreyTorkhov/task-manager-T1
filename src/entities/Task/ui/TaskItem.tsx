import type { Task } from "../model/types";
import { Button, Tag } from "@admiral-ds/react-ui";
import { Link } from "react-router-dom";
import { getPriorityStyle } from "../lib/getPriorityStyle";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div
      className="border rounded-xl p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer min-h-[160px] sm:min-h-[200px] w-full max-w-full"
      tabIndex={0}
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
          className="text-xs sm:text-sm text-gray-600 line-clamp-2 min-h-[2rem]"
          title={task.description}
        >
          {task.description}
        </p>
      )}

      <div className="mt-auto pt-2">
        <div className="flex flex-wrap gap-1 sm:gap-2 text-xs mb-2">
          <Tag dimension="s" kind="primary">
            {task.category}
          </Tag>
          <Tag dimension="s" kind="primary">
            {task.status}
          </Tag>
        </div>

        <Link to={`/task/${task.id}`}>
          <Button
            dimension="s"
            appearance="secondary"
            className="w-full text-xs"
          >
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
};
