import { useTasksStore } from "@/entities/Task";
import { useNavigate } from "react-router-dom";
import { TaskFormWrapper } from "@/features/TaskForm";
import { getDefaultTaskValues } from "@/shared/lib/getDefaultTaskValues";

export const TaskNew = () => {
  const { createTask, isLoading } = useTasksStore();
  const navigate = useNavigate();

  return (
    <TaskFormWrapper
      initialValues={getDefaultTaskValues()}
      isLoading={isLoading}
      onSubmit={(data) => {
        createTask({
          ...data,
        });
        navigate("/");
      }}
    />
  );
};
