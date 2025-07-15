import type { Task } from "@/entities/Task";
import type {
  TaskCategory,
  TaskPriority,
  TaskStatus,
} from "@/shared/config/taskOptions";

/**
 * Фильтрует задачи по категориям, статусам и приоритетам
 */
export const filterTasks = (
  tasks: Task[],
  selectedCategories: TaskCategory[],
  selectedStatuses: TaskStatus[],
  selectedPriorities: TaskPriority[],
): Task[] => {
  return tasks.filter((task) => {
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
};
