export interface User {
  id: number;
  name: string;
  email: string;
  organsation_id: number;
}

export interface UsersState {
  users: User[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type UsersActions =
  | { type: "FETCH_USERS_REQUEST" }
  | { type: "FETCH_USERS_SUCCESS"; payload: User[] }
  | { type: "FETCH_USERS_FAILURE"; payload: string }
  | { type: "ADD_USER_SUCCESS"; payload: User };

export const initialState: UsersState = {
  users: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: UsersState = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case "ADD_USER_SUCCESS":
      return { ...state, users: [...state.users, action.payload] };
    case "FETCH_USERS_REQUEST":
      console.log("inside fetch");
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
