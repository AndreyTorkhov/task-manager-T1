import { create } from "zustand";
import type {
  TaskCategory,
  TaskStatus,
  TaskPriority,
} from "@/entities/Task/model/types";

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
