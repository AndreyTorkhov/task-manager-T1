import { create } from "zustand";
import { DEMO_TASKS } from "@/shared/config/demo/demoTasks";
import type { Task } from "./types";

interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  getTasks: () => void;
  updateTask: (task: Task) => void;
}

const LS_KEY = "task-manager-tasks";

export const useTasksStore = create<TasksState>((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,

  getTasks: () => {
    set({ isLoading: true, error: null });

    try {
      const raw = localStorage.getItem(LS_KEY);
      const tasks = raw ? (JSON.parse(raw) as Task[]) : DEMO_TASKS;

      if (!raw) {
        localStorage.setItem(LS_KEY, JSON.stringify(DEMO_TASKS));
      }

      set({ tasks });
    } catch {
      set({
        error: "Failed to load tasks",
        tasks: DEMO_TASKS,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  updateTask: (updatedTask: Task) => {
    const { tasks } = get();
    const updatedTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t,
    );

    set({ tasks: updatedTasks });
    localStorage.setItem(LS_KEY, JSON.stringify(updatedTasks));
  },
}));
