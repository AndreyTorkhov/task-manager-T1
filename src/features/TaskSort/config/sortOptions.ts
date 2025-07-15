import type { SortField } from "../model/useTaskSort";

export const SORT_OPTIONS: { label: string; value: SortField }[] = [
  { label: "Date Created", value: "createdAt" },
  { label: "Priority", value: "priority" },
  { label: "Status", value: "status" },
  { label: "Category", value: "category" },
];
