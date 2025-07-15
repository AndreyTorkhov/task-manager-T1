import { useTasksStore } from "@/entities/Task";
import { TaskItem } from "@/entities/Task/ui/TaskItem";
import { useEffect } from "react";
import { useTaskFilters } from "@/features/TaskFilters";
import { useTaskSort } from "@/features/TaskSort";
import { sortTasks } from "@/shared/lib/sortTasks";
import { filterTasks } from "@/shared/lib/filterTasks";

export const TaskList = () => {
  const { tasks, getTasks, isLoading } = useTasksStore();
  const { selectedCategories, selectedStatuses, selectedPriorities } =
    useTaskFilters();
  const { sortField, sortDirection } = useTaskSort();

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = filterTasks(
    tasks,
    selectedCategories,
    selectedStatuses,
    selectedPriorities,
  );

  const sortedTasks = sortTasks(filteredTasks, sortField, sortDirection);

  if (isLoading) return <div>Loading...</div>;

  if (!filteredTasks.length)
    return <div className="text-center text-gray-600 mt-10">No tasks</div>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};
