import { TaskForm, useTaskForm } from "@/features/TaskForm";
import type { TaskFormValues } from "../model/schema";
import { useNavigate } from "react-router-dom";

/**
 * Обертка для формы задачи, объединяющая логику формы и навигации
 *
 * @param {Object} props - Пропсы компонента
 * @param {TaskFormValues} props.initialValues - Начальные значения формы
 * @param {(data: TaskFormValues) => void} props.onSubmit - Обработчик отправки формы
 * @param {boolean} [props.isEdit=false] - Режим редактирования (true/false)
 * @returns {JSX.Element} Форма задачи с предустановленной логикой
 */
interface TaskFormWrapperProps {
  initialValues: TaskFormValues;
  onSubmit: (data: TaskFormValues) => void;
  isEdit?: boolean;
}

export const TaskFormWrapper = ({
  initialValues,
  onSubmit,
  isEdit = false,
}: TaskFormWrapperProps) => {
  const navigate = useNavigate();
  const form = useTaskForm(initialValues);

  return (
    <TaskForm
      form={form}
      onSubmit={onSubmit}
      onCancel={() => navigate("/")}
      isEdit={isEdit}
    />
  );
};
