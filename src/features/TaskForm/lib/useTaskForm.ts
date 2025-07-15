import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, type TaskFormValues } from "../model/schema";

export const useTaskForm = (defaultValues: TaskFormValues) =>
  useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    mode: "onSubmit",
    defaultValues,
  });
