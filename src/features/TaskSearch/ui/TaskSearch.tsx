import { useState, useEffect, useRef } from "react";
import { TextInput, Spinner } from "@admiral-ds/react-ui";
import { SystemSearchOutline } from "@admiral-ds/icons";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useTasksStore } from "@/entities/Task";

export const TaskSearch = () => {
  const { isLoading, getTasks } = useTasksStore();
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    getTasks(debounced ? { title: debounced } : {}).then(() => {
      inputRef.current?.focus();
    });
  }, [debounced]);

  return (
    <div className="relative w-full min-w-[150px] sm:max-w-xs">
      <TextInput
        ref={inputRef}
        dimension="m"
        placeholder="Search by title…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={false}
        className="w-full pr-10"
      />

      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        {isLoading ? (
          <Spinner dimension="s" />
        ) : (
          <SystemSearchOutline
            width={16}
            height={16}
            className="text-gray-500"
          />
        )}
      </div>
    </div>
  );
};
