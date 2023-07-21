import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const ref = localStorage.getItem("userData");
  const userData = ref ? JSON.parse(ref) : {};
  console.log(userData.email);
  console.log(userData.name);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <button
        id="logout-link"
        onClick={() => {
          localStorage.removeItem("userData");
          localStorage.removeItem("authToken");
          navigate("/signin");
        }}
      >
        Signout
      </button>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
    </div>
  );
};

export default Dashboard;
