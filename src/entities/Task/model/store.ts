import { create } from "zustand";
import type { Task, TaskQuery } from "./types";
import { TaskService } from "../api";

/**
 * @typedef {Object} TasksState
 * @property {Task[]} tasks                         - Список всех задач
 * @property {boolean} isLoading                    - Флаг состояния загрузки
 * @property {string | null} error                  - Текст ошибки или null
 * @property {string | null} selectedTaskId         - ID выбранной задачи
 * @property {Task   | null} selectedTask           - Объект выбранной задачи
 * @property {TaskQuery}       searchParams         - Последний использованный запрос к бэку
 * @property {(id: string | null) => void} setSelectedTaskId - Устанавливает ID выбранной задачи
 * @property {(task: Task | null) => void} setSelectedTask   - Устанавливает выбранную задачу
 * @property {(p: TaskQuery) => void}        setSearchParams - Сохраняет параметры поиска
 * @property {(p?: TaskQuery) => Promise<void>}       getTasks        - Загружает задачи (учитывает p или сохранённые searchParams)
 * @property {(id: string) => Promise<Task | null>}   getTaskById     - Получает задачу по ID
 * @property {(task: Omit<Task,'id'|'createdAt'>) => Promise<Task|null>} createTask - Создаёт новую задачу
 * @property {(id: string, task: Omit<Task,'id'|'createdAt'>) => Promise<void>} updateTask - Обновляет задачу
 * @property {(id: string) => Promise<void>}         deleteTask      - Удаляет задачу
 * @property {() => Promise<void>}                   fetchSelectedTask - Загружает задачу по selectedTaskId
 */
interface TasksState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;

  selectedTaskId: string | null;
  selectedTask: Task | null;
  searchParams: TaskQuery;

  setSelectedTaskId: (id: string | null) => void;
  setSelectedTask: (task: Task | null) => void;
  setSearchParams: (p: TaskQuery) => void;

  getTasks: (p?: TaskQuery) => Promise<void>;
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
  searchParams: {},

  setSelectedTaskId: (id) => set({ selectedTaskId: id }),
  setSelectedTask: (task) => set({ selectedTask: task }),
  setSearchParams: (p) => set({ searchParams: p }),

  getTasks: async (p) => {
    const query = p ?? get().searchParams ?? {};
    set({ isLoading: true, error: null });
    try {
      const { data } = await TaskService.getAll(query);
      set({ tasks: data, searchParams: query });
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
