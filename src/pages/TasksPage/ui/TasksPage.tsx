import { Button } from "@admiral-ds/react-ui";
import { useNavigate } from "react-router-dom";
import { TaskFilters } from "@/features/TaskFilters";
import { TaskList } from "@/widgets/TaskList";
import { TaskSort } from "@/features/TaskSort";

export const TasksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        <h1 className="text-2xl font-bold">List of tasks</h1>
        <div className="sm:self-start">
          <TaskSort />
        </div>
      </div>
      <div className="space-y-4">
        <TaskFilters />
        <Button
          appearance="primary"
          dimension="s"
          onClick={() => navigate("/task/new")}
        >
          Add Task
        </Button>
        <TaskList />
      </div>
    </div>
  );
};
