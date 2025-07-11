import { Select, Option, Label } from "@admiral-ds/react-ui";
import { useTaskFilters } from "../model/useTaskFilters";
import type { TaskCategory, TaskPriority, TaskStatus } from "@/entities/Task";

const categories: TaskCategory[] = [
  "Bug",
  "Feature",
  "Documentation",
  "Refactor",
  "Test",
];
const statuses: TaskStatus[] = ["To Do", "In Progress", "Done"];
const priorities: TaskPriority[] = ["Low", "Medium", "High"];

export const TaskFilters = () => {
  const {
    selectedCategories,
    selectedPriorities,
    selectedStatuses,
    setSelectedCategories,
    setSelectedPriorities,
    setSelectedStatuses,
  } = useTaskFilters();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="flex flex-col gap-2">
        <Label>Категория</Label>
        <Select
          multiple
          value={selectedCategories}
          onChange={(e) => {
            const values = Array.from(e.target.selectedOptions).map(
              (option) => option.value as TaskCategory,
            );
            setSelectedCategories(values);
          }}
        >
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Статус</Label>
        <Select
          multiple
          value={selectedStatuses}
          onChange={(e) => {
            const values = Array.from(e.target.selectedOptions).map(
              (option) => option.value as TaskStatus,
            );
            setSelectedStatuses(values);
          }}
        >
          {statuses.map((status) => (
            <Option key={status} value={status}>
              {status}
            </Option>
          ))}
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Приоритет</Label>
        <Select
          multiple
          value={selectedPriorities}
          onChange={(e) => {
            const values = Array.from(e.target.selectedOptions).map(
              (option) => option.value as TaskPriority,
            );
            setSelectedPriorities(values);
          }}
        >
          {priorities.map((priority) => (
            <Option key={priority} value={priority}>
              {priority}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};
