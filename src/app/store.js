import { configureStore } from "@reduxjs/toolkit";
import news from "../feauters/newsSlice";
export const store = configureStore({
  reducer: {
    news,
  },
});
