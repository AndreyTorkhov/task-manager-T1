import { create } from "zustand";

export type SortField = "createdAt" | "priority" | "status" | "category";
export type SortDirection = "asc" | "desc";

/**
 * Состояние сортировки задач
 * @typedef {Object} TaskSortState
 * @property {SortField} sortField - Текущее поле для сортировки
 * @property {SortDirection} sortDirection - Текущее направление сортировки
 * @property {(field: SortField) => void} setSortField - Устанавливает поле сортировки
 * @property {(direction: SortDirection) => void} setSortDirection - Устанавливает направление сортировки
 */
interface TaskSortState {
  sortField: SortField;
  sortDirection: SortDirection;
  setSortField: (field: SortField) => void;
  setSortDirection: (direction: SortDirection) => void;
}

export const useTaskSort = create<TaskSortState>((set) => ({
  sortField: "createdAt",
  sortDirection: "desc",
  setSortField: (field) => set({ sortField: field }),
  setSortDirection: (direction) => set({ sortDirection: direction }),
}));
