import { configureStore } from "@reduxjs/toolkit";
import routesReducer from "../feature/routesSlice";

export const store = configureStore({
  reducer: {
    routes: routesReducer,
  },
});
