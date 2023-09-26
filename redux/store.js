import { configureStore } from "@reduxjs/toolkit";
import user from "../redux/slices/user";

export const store = configureStore({
  reducer: {
    user,
  },
});
