const initialState = {
  user: {
    name: "",
    age: null,
    child: [],
  },
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default auth;

export const setUser = (data) => {
  return {
    type: "SET_USER",
    payload: data,
  };
};

export const selectUser = (state) => state.auth.user;
