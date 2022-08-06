import { createSlice } from "@reduxjs/toolkit";

const name = "test";
const initialState = {};
const reducers = {
    // createPost(state, action) {},
};

const test = createSlice({
  name,
  initialState,
  reducers
});

export const {/**createPost */} = test.actions
export default test.reducer;


