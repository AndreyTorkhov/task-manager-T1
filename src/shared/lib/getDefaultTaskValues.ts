import type { TaskFormValues } from "@/features/TaskForm/model/schema";

/**
 * Возвращает значения задачи по умолчанию
 */
export const getDefaultTaskValues = (): TaskFormValues => ({
  title: "",
  description: "",
  category: "Test",
  status: "To Do",
  priority: "Low",
});
