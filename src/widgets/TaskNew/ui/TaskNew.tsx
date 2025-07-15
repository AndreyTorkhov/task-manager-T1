import { useTasksStore } from "@/entities/Task";
import { useNavigate } from "react-router-dom";
import { TaskFormWrapper } from "@/features/TaskForm";
import { getDefaultTaskValues } from "@/shared/lib/getDefaultTaskValues";
import { v4 as uuidv4 } from "uuid";

export const TaskNew = () => {
  const { createTask } = useTasksStore();
  const navigate = useNavigate();

  return (
    <TaskFormWrapper
      initialValues={getDefaultTaskValues()}
      onSubmit={(data) => {
        createTask({
          ...data,
          id: uuidv4(),
          createdAt: new Date().toISOString(),
        });
        navigate("/");
      }}
    />
  );
};
