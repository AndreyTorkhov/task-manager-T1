import { useState, useEffect } from "react";

/**
 * Хук для отложенного обновления значения (debounce)
 * @template T - Тип значения, которое нужно "отложить"
 * @param {T} value - Значение, которое нужно отложить
 * @param {number} [delay=300] - Задержка в миллисекундах (по умолчанию 300мс)
 * @returns {T} - Отложенное значение (обновится после указанной задержки)
 */
export const useDebounce = <T>(value: T, delay = 300) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
};
