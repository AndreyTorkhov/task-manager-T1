import { Select, Option, Button, Label } from "@admiral-ds/react-ui";
import {
  SystemArrowUpOutline,
  SystemArrowDownOutline,
} from "@admiral-ds/icons";
import { SORT_OPTIONS } from "../config/sortOptions";
import { useTaskSort } from "../model/useTaskSort";

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
          <SystemArrowDownOutline width={16} height={16} />
        ) : (
          <SystemArrowUpOutline width={16} height={16} />
        )}
      </Button>
    </div>
  );
};
