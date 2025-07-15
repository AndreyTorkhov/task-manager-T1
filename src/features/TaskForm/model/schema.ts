import { z } from "zod";
import {
  taskCategories,
  taskStatuses,
  taskPriorities,
} from "@/shared/config/taskOptions";

export const taskSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Заголовок обязателен"),
  description: z.string().optional(),
  category: z.enum(taskCategories),
  status: z.enum(taskStatuses),
  priority: z.enum(taskPriorities),
});

export type TaskFormValues = z.infer<typeof taskSchema>;
