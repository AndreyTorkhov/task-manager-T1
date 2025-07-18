import { $api } from "@/shared/config/axios";
import type { Task } from "../model/types";

export const TaskService = {
  getAll: () => $api.get<Task[]>("/tasks"),
  getById: (id: string) => $api.get<Task>(`/tasks/${id}`),
  create: (task: Omit<Task, "id" | "createdAt">) =>
    $api.post<Task>("/tasks", task),
  update: (id: string, task: Omit<Task, "id" | "createdAt">) =>
    $api.patch<Task>(`/tasks/${id}`, task),
  delete: (id: string) => $api.delete(`/tasks/${id}`),
};
