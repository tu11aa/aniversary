import { createSlice } from "@reduxjs/toolkit";

export const routesSlice = createSlice({
  name: "routes",
  initialState: [],
  reducers: {
    addRoute: (state, action) => {
      const find = state.indexOf(action.payload) > -1;
      if (!find) state.push(action.payload);
    },
  },
});

export const { addRoute } = routesSlice.actions;

export default routesSlice.reducer;
