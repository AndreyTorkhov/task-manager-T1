import { Button } from "@admiral-ds/react-ui";
import { useNavigate } from "react-router-dom";
import { TaskFilters } from "@/features/TaskFilters";
import { TaskList } from "@/widgets/TaskList";
import { TaskSort } from "@/features/TaskSort";
import { TaskSearch } from "@/features/TaskSearch";

export const TasksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">List of tasks</h1>
        <TaskSearch />
        <div className="flex flex-col sm:flex-row items-center gap-4">
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
