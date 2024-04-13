import * as api from "../api/index";

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: "AUTH", data });

    navigate("../home");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: "AUTH", data });
    navigate("../home");
  } catch (error) {
    console.log(error);
  }
};
