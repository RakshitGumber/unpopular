const userReducer = (state = { userData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("user", JSON.stringify({ ...action?.data }));
      return { ...state, userData: action?.data };
    case "LOGOUT":
      localStorage.clear();
      return { ...state, userData: null };
    case "GET_USER":
      return { ...state, userData: action?.data };
    case "UPDATE_USER":
      return state.map((userData) =>
        userData._id === action.data._id
          ? { ...userData, ...action.data }
          : userData
      );
    default:
      return state;
  }
};

export default userReducer;
