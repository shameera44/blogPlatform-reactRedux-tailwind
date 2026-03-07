import { createSlice } from "@reduxjs/toolkit";
import initialBlogs from "../data/blogs.json"

// Load from LocalStorage if exists, else use JSON
const savedBlogs = localStorage.getItem("blogs");

const initialState = {
  posts: savedBlogs ? JSON.parse(savedBlogs) : initialBlogs.blogs,
  loading: false,
  error: null,
};

export const blogSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.posts.push(action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.posts));
    },
    updateBlog: (state, action) => {
      const index = state.posts.findIndex(b => b.id === action.payload.id);
      if (index !== -1) state.posts[index] = action.payload;
      localStorage.setItem("blogs", JSON.stringify(state.posts));
    },
    deleteBlog: (state, action) => {
      state.posts = state.posts.filter(b => b.id !== action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.posts));
    },
  },
});

export const { addBlog, updateBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;