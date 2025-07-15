import { useParams, useNavigate } from "react-router-dom";
import { useTasksStore } from "@/entities/Task";
import { useTaskForm, TaskForm } from "@/features/TaskForm";
import { useEffect } from "react";
import type { TaskFormValues } from "@/features/TaskForm/model/schema";

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useTasksStore();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  const defaultValues: TaskFormValues = task ?? {
    id: "",
    title: "",
    description: "",
    category: "Bug",
    status: "To Do",
    priority: "Medium",
    createdAt: new Date().toISOString(),
  };

  const form = useTaskForm(defaultValues);

  useEffect(() => {
    if (!task) navigate("/");
  }, [task, navigate]);

  if (!task) return null;

  const handleSubmit = (data: TaskFormValues) => {
    updateTask({
      ...data,
      createdAt: task.createdAt, // сохраняем оригинальное значение
    });
    navigate("/");
  };

  return (
    <TaskForm
      form={form}
      onSubmit={handleSubmit}
      onCancel={() => navigate("/")}
      isEdit
    />
  );
};
