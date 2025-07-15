import { Button, TextArea } from "@admiral-ds/react-ui";
import { Controller, type UseFormReturn } from "react-hook-form";
import { TextInputField } from "@/shared/ui/TextInputField";
import { SelectField } from "@/shared/ui/SelectField";
import {
  taskCategories,
  taskStatuses,
  taskPriorities,
} from "@/shared/config/taskOptions";
import type { TaskFormValues } from "../model/schema";

interface Props {
  form: UseFormReturn<TaskFormValues>;
  onSubmit: (data: TaskFormValues) => void;
  onCancel: () => void;
  isEdit?: boolean;
}

export const TaskForm = ({ form, onSubmit, onCancel, isEdit }: Props) => {
  const { control, handleSubmit } = form;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-xl mx-auto"
    >
      <h1 className="text-2xl font-bold">
        {isEdit ? "Edit Task" : "Create Task"}
      </h1>

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
          onClick={onCancel}
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
