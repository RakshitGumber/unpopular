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

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);
    dispatch({ type: "GET_USER", data });
  } catch (error) {
    console.log(error);
    console.log("my error: " + error.message);
  }
};

export const updateUser = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, formData);
    if (!data) {
      throw new Error("No data recieved");
    }
    dispatch({ type: "UPDATE_USER", data });
  } catch (error) {
    console.log(error);
  }
};
