import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";

// To do that, first I'll import the `ProjectsProvider` in the `App` component.

import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { CommentsProvider } from "./context/comment/context";

// Then I'll wrap the RouterProvider component with the <ProjectsProvider> component.
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""
        }`}
    >
      <CommentsProvider>

        <MembersProvider>
          <ProjectsProvider>
            <RouterProvider router={router} />
          </ProjectsProvider>
        </MembersProvider>
      </CommentsProvider>
    </div>
  );
};
export default App;
