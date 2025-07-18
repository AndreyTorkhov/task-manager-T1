import { $api } from "@/shared/config/axios";
import type { Task, TaskQuery } from "../model/types";

export const TaskService = {
  getAll: (params?: TaskQuery) => $api.get<Task[]>("/tasks", { params }),
  getById: (id: string) => $api.get<Task>(`/tasks/${id}`),
  create: (task: Omit<Task, "id" | "createdAt">) =>
    $api.post<Task>("/tasks", task),
  update: (id: string, task: Omit<Task, "id" | "createdAt">) =>
    $api.patch<Task>(`/tasks/${id}`, task),
  delete: (id: string) => $api.delete(`/tasks/${id}`),
};
