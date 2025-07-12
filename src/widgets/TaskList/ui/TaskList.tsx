import { useTasksStore } from "@/entities/Task";
import { TaskItem } from "@/entities/Task/ui/TaskItem";
import { useEffect } from "react";
import { useTaskFilters } from "@/features/TaskFilters";

export const TaskList = () => {
  const { tasks, getTasks, isLoading } = useTasksStore();
  const { selectedCategories, selectedStatuses, selectedPriorities } =
    useTaskFilters();

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(task.category);
    const matchStatus =
      selectedStatuses.length === 0 || selectedStatuses.includes(task.status);
    const matchPriority =
      selectedPriorities.length === 0 ||
      selectedPriorities.includes(task.priority);

    return matchCategory && matchStatus && matchPriority;
  });

  if (isLoading) return <div>Loading...</div>;

  if (!filteredTasks.length)
    return <div className="text-center text-gray-600 mt-10">No tasks</div>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
