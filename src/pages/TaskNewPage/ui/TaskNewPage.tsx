import {
  TaskForm,
  useTaskForm,
  type TaskFormValues,
} from "@/features/TaskForm";
import { useNavigate } from "react-router-dom";
import { useTasksStore } from "@/entities/Task";
import { v4 as uuidv4 } from "uuid";

export const NewTaskPage = () => {
  const { createTask } = useTasksStore();
  const navigate = useNavigate();

  const form = useTaskForm({
    id: "",
    title: "",
    description: "",
    category: "Bug",
    status: "To Do",
    priority: "Medium",
    createdAt: new Date().toISOString(),
  });

  const handleCreate = (data: TaskFormValues) => {
    createTask({
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    });
    navigate("/");
  };

  return (
    <TaskForm
      form={form}
      onSubmit={handleCreate}
      onCancel={() => navigate("/")}
    />
  );
};
