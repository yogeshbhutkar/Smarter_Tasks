import { Routes, Route, useLocation, Navigate } from "react-router-dom";
// import Form from "./Form";

import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./NotFound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/notfound" && (
        <Header />
      )}
      {/* <Form /> */}
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/notfound" element={<NotFound />} />

        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export default App;
