import type { Task } from "@/entities/Task";
import type { SortField, SortDirection } from "@/features/TaskSort";

const priorityOrder = {
  High: 3,
  Medium: 2,
  Low: 1,
};

const statusOrder = {
  Done: 3,
  "In Progress": 2,
  "To Do": 1,
};

export const sortTasks = (
  tasks: Task[],
  field: SortField,
  direction: SortDirection,
): Task[] => {
  return [...tasks].sort((a, b) => {
    let aValue: number | string = a[field];
    let bValue: number | string = b[field];

    if (field === "priority") {
      aValue = priorityOrder[a.priority];
      bValue = priorityOrder[b.priority];
    }

    if (field === "status") {
      aValue = statusOrder[a.status];
      bValue = statusOrder[b.status];
    }

    if (field === "createdAt") {
      aValue = new Date(a.createdAt).getTime();
      bValue = new Date(b.createdAt).getTime();
    }

    if (aValue === bValue) return 0;
    if (direction === "asc") return aValue > bValue ? 1 : -1;
    return aValue < bValue ? 1 : -1;
  });
};
