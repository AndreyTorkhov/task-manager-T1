import { Select, Option, Button, Label } from "@admiral-ds/react-ui";
import {
  SystemArrowUpOutline,
  SystemArrowDownOutline,
} from "@admiral-ds/icons";
import { useTaskSort } from "../model/useTaskSort";

const SORT_OPTIONS = [
  { label: "Date Created", value: "createdAt" },
  { label: "Priority", value: "priority" },
  { label: "Status", value: "status" },
  { label: "Category", value: "category" },
] as const;

export const TaskSort = () => {
  const { sortField, sortDirection, setSortField, setSortDirection } =
    useTaskSort();

  return (
    <div className="flex items-center gap-4 mb-6">
      <Label>Sort by</Label>
      <Select
        value={sortField}
        onChange={(e) => setSortField(e.target.value as any)}
        className="w-48"
      >
        {SORT_OPTIONS.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>

      <Button
        dimension="s"
        appearance="primary"
        onClick={() =>
          setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        }
        className=" !p-1"
      >
        {sortDirection === "asc" ? (
          <SystemArrowUpOutline width={16} height={16} />
        ) : (
          <SystemArrowDownOutline width={16} height={16} />
        )}
      </Button>
    </div>
  );
};
