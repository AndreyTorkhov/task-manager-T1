import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Label, Select, Option } from "@admiral-ds/react-ui";

interface SelectFieldProps<T extends FieldValues, K extends Path<T>> {
  control: Control<T>;
  name: K;
  label: string;
  options: readonly string[];
}

export function SelectField<T extends FieldValues, K extends Path<T>>({
  control,
  name,
  label,
  options,
}: SelectFieldProps<T, K>) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          >
            {options.map((opt) => (
              <Option key={opt} value={opt}>
                {opt}
              </Option>
            ))}
          </Select>
        )}
      />
    </div>
  );
}
