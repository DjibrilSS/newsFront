import { configureStore } from "@reduxjs/toolkit";
import news from "../feauters/newsSlice";
import application from "../feauters/applicationSlice";
export const store = configureStore({
  reducer: {
    news,
    application,
  },
});
