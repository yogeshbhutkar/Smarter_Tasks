import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  console.log(userData.name);
  console.log(userData.email);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <Link
        to={"/signin"}
        onClick={() => {
          localStorage.removeItem("userData");
          localStorage.removeItem("authToken");
        }}
        id="logout-link"
      >
        Signout
      </Link>
      <p>{userData.name}</p>
      <p>{userData.email}</p>
    </div>
  );
};

export default Dashboard;
