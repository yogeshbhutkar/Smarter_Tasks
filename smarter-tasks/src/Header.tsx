import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center w-1/3">
            <Link to="/" className="ml-6 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/tasks" className="ml-6 text-gray-300 hover:text-white">
              Tasks
            </Link>
          </div>
          <div className="flex items-center w-1/3 justify-center">
            <span className="text-white text-lg font-bold">Task Manager</span>
          </div>
          <div className="flex items-center w-1/3 justify-end">
            <Link
              id="signout"
              to="/signin"
              onClick={() => {
                localStorage.removeItem("userData");
                localStorage.removeItem("authToken");
              }}
              className="ml-6 text-gray-300 hover:text-white"
            >
              Signout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
