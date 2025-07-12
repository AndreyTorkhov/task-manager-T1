import { TaskFilters } from "@/features/TaskFilters";
import { TaskList } from "@/widgets/TaskList";

export const TasksPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">List of tasks</h1>
      <TaskFilters />
      <TaskList />
    </div>
  );
};
