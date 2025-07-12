import { Label, Select, Option } from "@admiral-ds/react-ui";
import type { ChangeEventHandler } from "react";

interface MultiSelectFilterProps<T extends string> {
  label: string;
  options: readonly T[];
  value: T[];
  onChange: (value: T[]) => void;
  placeholder?: string;
}

export function MultiSelectFilter<T extends string>({
  label,
  options,
  value,
  onChange,
  placeholder,
}: MultiSelectFilterProps<T>) {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const values = Array.from(e.target.selectedOptions).map(
      (option) => option.value as T,
    );
    onChange(values);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Select
        multiple
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      >
        {options.map((v) => (
          <Option key={v} value={v}>
            {v}
          </Option>
        ))}
      </Select>
    </div>
  );
}
