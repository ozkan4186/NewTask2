import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  price: "",
  image: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

  },
});

// Action creators are generated for each case reducer function
export const { } = counterSlice.actions;

export default counterSlice.reducer;
