import { useParams, useNavigate } from "react-router-dom";
import { useTasksStore } from "@/entities/Task";
import { useTaskForm, TaskForm } from "@/features/TaskForm";
import { useEffect } from "react";

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useTasksStore();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  const form = useTaskForm(
    task ?? {
      id: "",
      title: "",
      description: "",
      category: "Bug",
      status: "To Do",
      priority: "Medium",
    },
  );

  useEffect(() => {
    if (!task) navigate("/");
  }, [task, navigate]);

  if (!task) return null;

  return (
    <TaskForm
      form={form}
      onSubmit={(data) => {
        updateTask(data);
        navigate("/");
      }}
      onCancel={() => navigate("/")}
      isEdit
    />
  );
};
