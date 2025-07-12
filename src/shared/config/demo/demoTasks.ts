import type { Task } from "@/entities/Task";

export const DEMO_TASKS: Task[] = [
  {
    id: "1",
    title: "Test the system",
    description: "Check application stability",
    category: "Test",
    status: "To Do",
    priority: "Medium",
  },
  {
    id: "2",
    title: "Update documentation",
    category: "Documentation",
    status: "In Progress",
    priority: "Low",
  },
  {
    id: "3",
    title: "Fix login flow bug",
    description: "Resolve redirect issue on failed login",
    category: "Bug",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "4",
    title: "Implement dark mode",
    description: "Add dark theme support",
    category: "Feature",
    status: "To Do",
    priority: "Medium",
  },
  {
    id: "5",
    title: "Refactor auth module",
    description: "Improve code structure and remove deprecated code",
    category: "Refactor",
    status: "Done",
    priority: "Medium",
  },
  {
    id: "6",
    title: "Write unit tests for payment module",
    category: "Test",
    status: "In Progress",
    priority: "High",
  },
];
