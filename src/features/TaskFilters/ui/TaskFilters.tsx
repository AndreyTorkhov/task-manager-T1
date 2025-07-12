import { MultiSelectFilter } from "@/shared/ui/MultiSelectFilter";
import { useTaskFilters } from "../model/useTaskFilters";
import {
  taskCategories,
  taskStatuses,
  taskPriorities,
} from "@/shared/config/taskOptions";

export const TaskFilters = () => {
  const {
    selectedCategories,
    selectedStatuses,
    selectedPriorities,
    setSelectedCategories,
    setSelectedStatuses,
    setSelectedPriorities,
  } = useTaskFilters();

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <MultiSelectFilter
        label="Category"
        options={taskCategories}
        value={selectedCategories}
        onChange={setSelectedCategories}
        placeholder="Select category"
      />
      <MultiSelectFilter
        label="Status"
        options={taskStatuses}
        value={selectedStatuses}
        onChange={setSelectedStatuses}
        placeholder="Select status"
      />
      <MultiSelectFilter
        label="Priority"
        options={taskPriorities}
        value={selectedPriorities}
        onChange={setSelectedPriorities}
        placeholder="Select priority"
      />
    </div>
  );
};
