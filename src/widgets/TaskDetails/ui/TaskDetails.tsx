import { useParams, useNavigate } from "react-router-dom";
import {
  taskCategories,
  taskStatuses,
  taskPriorities,
} from "@/shared/config/taskOptions";
import { useTasksStore } from "@/entities/Task";
import { TextInput, TextArea, Button, Label } from "@admiral-ds/react-ui";
import { useEffect } from "react";
import { useEditTaskForm } from "@/features/EditTask";
import { SelectField } from "@/shared/ui/SelectField";
import { Controller } from "react-hook-form";

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useTasksStore();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useEditTaskForm(
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

  const onSubmit = (data: typeof task) => {
    updateTask(data);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-xl mx-auto"
    >
      <h1 className="text-2xl font-bold">Редактирование задачи</h1>
      <div className="flex flex-col gap-2">
        <Label>Заголовок</Label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <>
              <TextInput
                {...field}
                status={errors.title ? "error" : undefined}
                placeholder="Введите заголовок"
              />
              {errors.title && (
                <div className="text-red-600 text-sm mt-1">
                  {errors.title.message}
                </div>
              )}
            </>
          )}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Описание</Label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Добавьте описание (необязательно)"
            />
          )}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SelectField
          name="category"
          label="Категория"
          control={control}
          options={taskCategories}
        />
        <SelectField
          name="status"
          label="Статус"
          control={control}
          options={taskStatuses}
        />
        <SelectField
          name="priority"
          label="Приоритет"
          control={control}
          options={taskPriorities}
        />
      </div>

      <div className="flex justify-end gap-4 mt-4">
        <Button
          type="button"
          appearance="secondary"
          dimension="s"
          onClick={() => navigate("/")}
        >
          Отмена
        </Button>
        <Button type="submit" appearance="primary" dimension="s">
          Сохранить
        </Button>
      </div>
    </form>
  );
};
