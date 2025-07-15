import { create } from "zustand";

export type SortField = "createdAt" | "priority" | "status" | "category";
export type SortDirection = "asc" | "desc";

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
