import { useTasksStore } from "@/entities/Task";
import { TaskItem } from "@/entities/Task";
import { useEffect } from "react";

export const TaskList = () => {
  const { tasks, getTasks, isLoading } = useTasksStore();

  useEffect(() => {
    getTasks();
  }, []);

  if (isLoading) return <div>Загрузка...</div>;

  if (!tasks.length)
    return <div className="text-center text-gray-600 mt-10">Нет задач</div>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
