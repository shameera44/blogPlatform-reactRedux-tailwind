import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   posts: [],
   loading: false,
   error: null,
}



export const postSlice = createSlice({
   name: "post",
   initialState,
   reducers: {


   }


})

export default postSlice.reducer;