import { Controller } from "react-hook-form";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Label, Select, Option } from "@admiral-ds/react-ui";

/**
 * Универсальный компонент выпадающего списка с интеграцией react-hook-form
 * @template T - Тип формы (extends FieldValues)
 * @template K - Путь к полю в форме (Path<T>)
 * @param {Object} props - Пропсы компонента
 * @param {Control<T>} props.control - Контрол формы из react-hook-form
 * @param {K} props.name - Имя поля в форме
 * @param {string} props.label - Подпись поля
 * @param {readonly string[]} props.options - Доступные варианты выбора
 * @returns {JSX.Element} Поле выбора с интеграцией в форму
 */
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
