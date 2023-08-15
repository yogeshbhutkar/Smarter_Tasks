import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import TaskDetailsContainer from "../pages/tasks/TaskDetailsContainer";
import NewTask from "../pages/tasks/NewTask";
import AccountLayout from "../layouts/account";
import ProjectDetails from "../pages/project_details";
import ProtectedRoutes from "./ProtectedRoutes";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
import ProjectContainer from "../pages/projects/ProjectContainer";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/account/projects" replace /> },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoutes>
        <AccountLayout />
      </ProtectedRoutes>
    ),
    children: [
      { index: true, element: <Navigate to="/account/projects" replace /> },
      {
        path: "projects",
        element: <ProjectContainer />,
        children: [
          { index: true, element: <Projects /> },
          {
            path: ":projectID",
            element: <ProjectDetails />,
            children: [
              { index: true, element: <></> },
              {
                path: "tasks",
                children: [
                  { index: true, element: <Navigate to="../" /> },
                  {
                    path: "new",
                    element: <NewTask />,
                  },
                  {
                    path: ":taskID",
                    children: [
                      { index: true, element: <TaskDetailsContainer /> },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

export default router;
