import type {
  TaskCategory,
  TaskStatus,
  TaskPriority,
} from "@/shared/config/taskOptions";

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
}
