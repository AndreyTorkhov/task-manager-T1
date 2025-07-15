import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, type TaskFormValues } from "../model/schema";

/**
 * Кастомный хук для работы с формой задачи
 *
 * @param {TaskFormValues} defaultValues - Начальные значения формы
 * @returns {UseFormReturn<TaskFormValues>} Объект формы из react-hook-form с предустановленными настройками:
 *   - Валидация через Zod
 *   - Режим валидации при отправке
 *   - Переданные начальные значения
 */
export const useTaskForm = (defaultValues: TaskFormValues) =>
  useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues,
    mode: "onSubmit",
  });
