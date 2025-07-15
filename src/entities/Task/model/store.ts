import { create } from "zustand";
import type { Task } from "./types";
import { TaskService } from "../api";

/**
 * @typedef {Object} TasksState
 * @property {Task[]} tasks - Список всех задач
 * @property {boolean} isLoading - Флаг состояния загрузки
 * @property {string | null} error - Текст ошибки или null
 * @property {string | null} selectedTaskId - ID выбранной задачи
 * @property {Task | null} selectedTask - Объект выбранной задачи
 * @property {(id: string | null) => void} setSelectedTaskId - Устанавливает ID выбранной задачи
 * @property {(task: Task | null) => void} setSelectedTask - Устанавливает выбранную задачу
 * @property {() => Promise<void>} getTasks - Загружает все задачи
 * @property {(id: string) => Promise<Task | null>} getTaskById - Получает задачу по ID
 * @property {(task: Omit<Task, 'id' | 'createdAt'>) => Promise<Task | null>} createTask - Создает новую задачу
 * @property {(id: string, task: task: Omit<Task, 'id' | 'createdAt'>) => Promise<void>} updateTask - Обновляет задачу
 * @property {(id: string) => Promise<void>} deleteTask - Удаляет задачу
 * @property {() => Promise<void>} fetchSelectedTask - Загружает задачу по selectedTaskId
 */
interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;

  selectedTaskId: string | null;
  selectedTask: Task | null;

  setSelectedTaskId: (id: string | null) => void;
  setSelectedTask: (task: Task | null) => void;

  getTasks: () => Promise<void>;
  getTaskById: (id: string) => Promise<Task | null>;
  createTask: (task: Omit<Task, "id" | "createdAt">) => Promise<Task | null>;
  updateTask: (
    id: string,
    task: Omit<Task, "id" | "createdAt">,
  ) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;

  fetchSelectedTask: () => Promise<void>;
}

export const useTasksStore = create<TasksState>((set, get) => ({
  tasks: [],
  isLoading: false,
  error: null,

  selectedTaskId: null,
  selectedTask: null,

  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  setSelectedTask: (task) => set({ selectedTask: task }),

  getTasks: async () => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await TaskService.getAll();
      set({ tasks: data });
    } catch {
      set({ error: "Error receiving tasks" });
    } finally {
      set({ isLoading: false });
    }
  },

  getTaskById: async (id) => {
    try {
      const { data } = await TaskService.getById(id);
      return data;
    } catch {
      set({ error: `Error getting task ${id}` });
      return null;
    }
  },

  createTask: async (task) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await TaskService.create(task);
      await get().getTasks();
      return data;
    } catch {
      set({ error: "Error creating task" });
      return null;
    } finally {
      set({ isLoading: false });
    }
  },

  updateTask: async (id, task) => {
    set({ isLoading: true, error: null });
    try {
      await TaskService.update(id, task);
      await get().getTasks();
    } catch {
      set({ error: "Error updating task" });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteTask: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await TaskService.delete(id);
      await get().getTasks();
    } catch {
      set({ error: "Error deleting task" });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchSelectedTask: async () => {
    const id = get().selectedTaskId;
    if (!id) return;

    set({ isLoading: true });
    try {
      const { data } = await TaskService.getById(id);
      set({ selectedTask: data });
    } catch {
      set({ error: "Error fetching selected task" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
