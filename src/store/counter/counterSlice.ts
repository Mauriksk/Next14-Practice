import { createSlice } from "@reduxjs/toolkit";

interface CounterState {

}

const initialState: CounterState = {
  count: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
