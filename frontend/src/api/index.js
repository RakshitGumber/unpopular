import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");

export const fetchPost = (id) => API.get(`/posts/${id}`);

export const fetchPostsBySearch = (searchQuery) =>
  API.get(`/posts/search?query=${searchQuery.search ?? "none"}`);

export const createPost = (newPost) => {
  API.post("/posts", newPost);
};

export const updatePost = (id, updatedPost) => {
  API.patch(`/posts/${id}`, updatedPost);
};

export const deletePost = (id) => {
  API.delete(`/posts/${id}`);
};

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signup = (formData) => API.post("/user/signup", formData);

export const login = (formData) => API.post("/user/login", formData);

export const comment = (value, id) =>
  API.post(`/posts/${id}/comment`, { value });
