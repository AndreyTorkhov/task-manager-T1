import { Button } from "@admiral-ds/react-ui";
import { useNavigate } from "react-router-dom";
import { TaskFilters } from "@/features/TaskFilters";
import { TaskList } from "@/widgets/TaskList";

export const TasksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">List of tasks</h1>
        <Button
          appearance="primary"
          dimension="s"
          onClick={() => navigate("/task/new")}
        >
          Add Task
        </Button>
      </div>
      <TaskFilters />
      <TaskList />
    </div>
  );
};
