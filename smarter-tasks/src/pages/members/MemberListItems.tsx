import { useEffect } from "react";
import { useUsersDispatch, useUsersState } from "../../context/members/context";
import { User } from "../../context/members/reducer";
import { deleteUser } from "../../context/members/actions";

export default function MemberListItems() {
  const dispatchUsers = useUsersDispatch();
  let state: any = useUsersState();
  const { users, isLoading, isError, errorMessage } = state;
  if (users.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      {users.map((user: User) => (
        <div className="member" key={user.id}>
          <button
            onClick={() => deleteUser(dispatchUsers, user.id)}
            className="float-right p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {user.name}
            </h5>
            <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              {user.email}
            </h5>
          </div>
        </div>
      ))}
    </>
  );
}
