import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH,
} from "../constants/actionTypes";

export default (state = { post: null }, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, post: action.payload };
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload]; // Changed from [...posts, action.payload] to [...state, action.payload]
    case UPDATE:
    case LIKE:
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_BY_SEARCH":
      return action.payload;
    case DELETE:
      return state.filter((post) => post._id !== action.payload);
    case "COMMENT":
      return {
        ...state,
        posts: {
          ...state.post,
          comments: [...state.post.comments, action.payload],
        },
      };
    default:
      return state;
  }
};
