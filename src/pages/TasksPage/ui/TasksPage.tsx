import { TaskList } from "@/widgets/TaskList";

export const TasksPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Список задач</h1>
      <TaskList />
    </div>
  );
};
