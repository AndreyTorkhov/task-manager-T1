import type { Task } from "../model/types";

/**
 * Возвращает стиль для отображения приоритета задачи
 * @param {Task['priority']} priority - Приоритет задачи (High/Medium/Low)
 * @returns {'danger' | 'warning' | 'success' | 'neutral'} Стиль для визуального отображения приоритета:
 *   - 'danger' для High (красный)
 *   - 'warning' для Medium (желтый)
 *   - 'success' для Low (зеленый)
 *   - 'neutral' для других случаев (серый)
 */
export const getPriorityStyle = (priority: Task["priority"]) => {
  switch (priority) {
    case "High":
      return "danger";
    case "Medium":
      return "warning";
    case "Low":
      return "success";
    default:
      return "neutral";
  }
};
