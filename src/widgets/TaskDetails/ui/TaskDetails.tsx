import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  taskCategories,
  taskStatuses,
  taskPriorities,
} from "@/shared/config/taskOptions";
import { useTasksStore } from "@/entities/Task";
import { TextArea, Button } from "@admiral-ds/react-ui";
import { useEditTaskForm } from "@/features/EditTask";
import { TextInputField } from "@/shared/ui/TextInputField";
import { SelectField } from "@/shared/ui/SelectField";
import { Controller } from "react-hook-form";

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks, updateTask } = useTasksStore();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === id);

  const { control, handleSubmit } = useEditTaskForm(
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
      <h1 className="text-2xl font-bold">Edit Task</h1>

      <TextInputField
        name="title"
        label="Title"
        control={control}
        placeholder="Enter title"
      />

      <div className="flex flex-col gap-2">
        <label>Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea {...field} placeholder="Add a description (optional)" />
          )}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SelectField
          name="category"
          label="Category"
          control={control}
          options={taskCategories}
        />
        <SelectField
          name="status"
          label="Status"
          control={control}
          options={taskStatuses}
        />
        <SelectField
          name="priority"
          label="Priority"
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
          Cancel
        </Button>
        <Button type="submit" appearance="primary" dimension="s">
          Save
        </Button>
      </div>
    </form>
  );
};
