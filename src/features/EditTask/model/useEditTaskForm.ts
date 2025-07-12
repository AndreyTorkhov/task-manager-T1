import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "./schema";
import type { TaskFormValues } from "./schema";

export const useEditTaskForm = (defaultValues: TaskFormValues) =>
  useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    mode: "onSubmit",
    defaultValues,
  });
