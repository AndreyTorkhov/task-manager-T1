import { create } from "zustand";
import type {
  TaskCategory,
  TaskStatus,
  TaskPriority,
} from "@/shared/config/taskOptions";

/**
 * @typedef {Object} TaskFiltersState
 * @property {TaskCategory[]} selectedCategories - Массив выбранных категорий задач
 * @property {TaskStatus[]} selectedStatuses - Массив выбранных статусов задач
 * @property {TaskPriority[]} selectedPriorities - Массив выбранных приоритетов задач
 * @property {(categories: TaskCategory[]) => void} setSelectedCategories - Установить выбранные категории
 * @property {(statuses: TaskStatus[]) => void} setSelectedStatuses - Установить выбранные статусы
 * @property {(priorities: TaskPriority[]) => void} setSelectedPriorities - Установить выбранные приоритеты
 */
interface TaskFiltersState {
  selectedCategories: TaskCategory[];
  selectedStatuses: TaskStatus[];
  selectedPriorities: TaskPriority[];

  setSelectedCategories: (categories: TaskCategory[]) => void;
  setSelectedStatuses: (statuses: TaskStatus[]) => void;
  setSelectedPriorities: (priorities: TaskPriority[]) => void;
}

export const useTaskFilters = create<TaskFiltersState>((set) => ({
  selectedCategories: [],
  selectedStatuses: [],
  selectedPriorities: [],

  setSelectedCategories: (categories) =>
    set({ selectedCategories: categories }),
  setSelectedStatuses: (statuses) => set({ selectedStatuses: statuses }),
  setSelectedPriorities: (priorities) =>
    set({ selectedPriorities: priorities }),
}));
