import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { TextInput, Label } from "@admiral-ds/react-ui";

/**
 * Текстовое поле с валидацией и интеграцией react-hook-form
 * @template T - Тип формы (extends FieldValues)
 * @param {Object} props - Пропсы компонента
 * @param {Path<T>} props.name - Имя поля в форме
 * @param {string} props.label - Подпись поля
 * @param {Control<T>} props.control - Контрол формы из react-hook-form
 * @param {string} [props.placeholder] - Плейсхолдер для поля ввода
 * @returns {JSX.Element} Текстовое поле с обработкой ошибок
 */
interface TextInputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  placeholder?: string;
}

export function TextInputField<T extends FieldValues>({
  name,
  label,
  control,
  placeholder,
}: TextInputFieldProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <TextInput
              {...field}
              placeholder={placeholder}
              status={fieldState.error ? "error" : undefined}
            />
            {fieldState.error && (
              <div className="text-red-600 text-sm mt-1">
                {fieldState.error.message}
              </div>
            )}
          </>
        )}
      />
    </div>
  );
}
