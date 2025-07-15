import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasksStore } from "@/entities/Task";
import { TaskFormWrapper } from "@/features/TaskForm";
import { Spinner } from "@admiral-ds/react-ui";

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    selectedTask,
    setSelectedTaskId,
    fetchSelectedTask,
    updateTask,
    isLoading,
  } = useTasksStore();

  useEffect(() => {
    if (id) {
      setSelectedTaskId(id);
      fetchSelectedTask();
    }
  }, [id]);

  if (isLoading || !selectedTask) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <Spinner />
      </div>
    );
  }

  return (
    <TaskFormWrapper
      initialValues={selectedTask}
      isEdit
      isLoading={isLoading}
      onSubmit={async (data) => {
        await updateTask(selectedTask.id, data);
        navigate("/");
      }}
    />
  );
};
