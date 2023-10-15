import { configureStore } from "@reduxjs/toolkit";
import inViewSlice from "./slices/inViewSlice";

export const store = configureStore({
  reducer: {
    inView: inViewSlice,
  },
});
