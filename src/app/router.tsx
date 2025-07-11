import { createBrowserRouter } from "react-router-dom";
import { TasksPage } from "@/pages/TasksPage";
import { TaskDetailsPage } from "@/pages/TaskDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TasksPage />,
  },
  {
    path: "/task/:id",
    element: <TaskDetailsPage />,
  },
]);
