import { VITE_API_ENDPOINT } from "../../config/constants";

export const fetchUsers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";

  try {
    dispatch({ type: "FETCH_USERS_REQUEST" });
    console.log("error check 0");
    const response = await fetch(`${VITE_API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    console.log("error check1");
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: data });
    console.log("error check");
  } catch (error) {
    console.log("Error fetching users:", error);
    dispatch({
      type: "FETCH_USERS_FAILURE",
      payload: "Unable to load users",
    });
  }
};

export const addUser = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${VITE_API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({ type: "ADD_USER_SUCCESS", payload: data.user });
    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    return { ok: false, error };
  }
};
