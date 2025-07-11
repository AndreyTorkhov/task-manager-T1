import { create } from "zustand";
import type { Task } from "./types";

interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  getTasks: () => void;
  updateTask: (task: Task) => void;
}

const LS_KEY = "task-manager-tasks";

// Демо-данные с явным указанием типа
const DEMO_TASKS: Task[] = [
  {
    id: "1",
    title: "Протестировать систему",
    description: "Проверить стабильность приложения",
    category: "Test",
    status: "To Do",
    priority: "Medium",
  },
  {
    id: "2",
    title: "Обновить документацию",
    category: "Documentation",
    status: "In Progress",
    priority: "Low",
  },
];

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
    } catch (error) {
      set({
        error: "Ошибка загрузки задач",
        tasks: DEMO_TASKS, // fallback
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
