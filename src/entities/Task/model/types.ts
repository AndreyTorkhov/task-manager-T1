import type {
  TaskCategory,
  TaskStatus,
  TaskPriority,
} from "@/shared/config/taskOptions";

/**
 * @typedef {Object} Task
 * @property {string} id - Уникальный идентификатор задачи
 * @property {string} title - Заголовок задачи
 * @property {string} [description] - Описание задачи (опционально)
 * @property {'Test'|'Bug'|'Feature'|'Documentation'|'Refactor'} category - Категория задачи
 * @property {'To Do'|'In Progress'|'Done'} status - Статус задачи
 * @property {'Low'|'Medium'|'High'} priority - Приоритет задачи
 * @property {string} createdAt - Дата создания в ISO формате
 */
export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
}
