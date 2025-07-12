import type { Task } from "../model/types";

export const getPriorityStyle = (priority: Task["priority"]) => {
  switch (priority) {
    case "High":
      return "danger";
    case "Medium":
      return "warning";
    case "Low":
      return "success";
    default:
      return "neutral";
  }
};
