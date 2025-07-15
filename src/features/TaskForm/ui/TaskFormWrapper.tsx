import { TaskForm, useTaskForm } from "@/features/TaskForm";
import type { TaskFormValues } from "../model/schema";
import { useNavigate } from "react-router-dom";

interface TaskFormWrapperProps {
  initialValues: TaskFormValues;
  onSubmit: (data: TaskFormValues) => void;
  isEdit?: boolean;
  isLoading?: boolean;
}

export const TaskFormWrapper = ({
  initialValues,
  onSubmit,
  isEdit = false,
  isLoading = false,
}: TaskFormWrapperProps) => {
  const navigate = useNavigate();
  const form = useTaskForm(initialValues);

  return (
    <TaskForm
      form={form}
      onSubmit={onSubmit}
      onCancel={() => navigate("/")}
      isEdit={isEdit}
      isLoading={isLoading}
    />
  );
};
