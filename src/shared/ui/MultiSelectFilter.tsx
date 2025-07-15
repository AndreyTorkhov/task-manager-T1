import { Label, Select, Option } from "@admiral-ds/react-ui";
import type { ChangeEventHandler } from "react";
import { ServiceCloseOutline } from "@admiral-ds/icons";

/**
 * Компонент мультиселекта с возможностью сброса выбора
 * @template T - Строковый тип для значений опций
 * @param {Object} props - Пропсы компонента
 * @param {string} props.label - Подпись поля
 * @param {readonly T[]} props.options - Доступные варианты выбора
 * @param {T[]} props.value - Текущие выбранные значения
 * @param {(value: T[]) => void} props.onChange - Обработчик изменения выбора
 * @param {string} [props.placeholder] - Плейсхолдер для пустого селекта
 * @returns {JSX.Element} Мультиселект с кнопкой очистки

 */
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

  const handleClear = () => {
    onChange([]);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-2">
        <Select
          multiple
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="flex-grow"
        >
          {options.map((v) => (
            <Option key={v} value={v}>
              {v}
            </Option>
          ))}
        </Select>
        {value.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Clear selection"
            title="Clear selection"
          >
            <ServiceCloseOutline width={24} height={24} />
          </button>
        )}
      </div>
    </div>
  );
}
