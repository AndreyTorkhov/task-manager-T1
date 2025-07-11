import type { Task } from "../model/types";
import { Button, Tag } from "@admiral-ds/react-ui";
import { Link } from "react-router-dom";

interface TaskItemProps {
  task: Task;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="border rounded-xl p-4 flex flex-col gap-4 bg-white shadow-sm">
      <div>
        <h2 className="text-lg font-semibold">{task.title}</h2>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <Tag dimension="s" kind="primary">
          {task.category}
        </Tag>
        <Tag dimension="s" kind="neutral">
          {task.status}
        </Tag>
        <Tag dimension="s" kind="success">
          {task.priority}
        </Tag>
      </div>

      <div className="mt-auto">
        <Link to={`/task/${task.id}`}>
          <Button dimension="s" appearance="secondary">
            Редактировать
          </Button>
        </Link>
      </div>
    </div>
  );
};
