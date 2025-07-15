import { useParams, useNavigate } from "react-router-dom";
import { useTasksStore } from "@/entities/Task";
import { TaskFormWrapper } from "@/features/TaskForm";
import { useEffect } from "react";

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useTasksStore();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  useEffect(() => {
    if (!task) navigate("/");
  }, [task, navigate]);

  if (!task) return null;

  return (
    <TaskFormWrapper
      initialValues={task}
      isEdit
      onSubmit={(data) => {
        updateTask({ ...data, createdAt: task.createdAt });
        navigate("/");
      }}
    />
  );
};
