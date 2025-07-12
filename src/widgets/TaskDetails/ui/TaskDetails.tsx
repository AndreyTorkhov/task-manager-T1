import type { Task } from "@/entities/Task";
import { useTasksStore } from "@/entities/Task";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  TextInput,
  TextArea,
  Select,
  Button,
  Label,
  Option,
} from "@admiral-ds/react-ui";

const categories: Task["category"][] = [
  "Bug",
  "Feature",
  "Documentation",
  "Refactor",
  "Test",
];
const statuses: Task["status"][] = ["To Do", "In Progress", "Done"];
const priorities: Task["priority"][] = ["Low", "Medium", "High"];

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useTasksStore();
  const navigate = useNavigate();

  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    const found = tasks.find((t) => t.id === id);
    if (found) setTask(found);
  }, [id, tasks]);

  if (!task) return <div className="text-center">Задача не найдена</div>;

  const handleChange = <K extends keyof Task>(key: K, value: Task[K]) => {
    setTask((prev) => (prev ? { ...prev, [key]: value } : prev));
  };

  const handleSave = () => {
    if (task) {
      updateTask(task);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold">Редактирование задачи</h1>

      <div className="flex flex-col gap-2">
        <Label>Заголовок</Label>
        <TextInput
          value={task.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Описание</Label>
        <TextArea
          value={task.description ?? ""}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col flex-1 gap-2">
          <Label>Категория</Label>
          <Select
            value={task.category}
            onChange={(e) =>
              handleChange("category", e.target.value as Task["category"])
            }
          >
            {categories.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <Label>Статус</Label>
          <Select
            value={task.status}
            onChange={(e) =>
              handleChange("status", e.target.value as Task["status"])
            }
          >
            {statuses.map((status) => (
              <Option key={status} value={status}>
                {status}
              </Option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <Label>Приоритет</Label>
          <Select
            value={task.priority}
            onChange={(e) =>
              handleChange("priority", e.target.value as Task["priority"])
            }
          >
            {priorities.map((priority) => (
              <Option key={priority} value={priority}>
                {priority}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className="flex gap-4 justify-end mt-4">
        <Button
          dimension="s"
          appearance="secondary"
          onClick={() => navigate("/")}
        >
          Отмена
        </Button>
        <Button dimension="s" appearance="primary" onClick={handleSave}>
          Сохранить
        </Button>
      </div>
    </div>
  );
};
