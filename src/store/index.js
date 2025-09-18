import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/index";

export const store = configureStore({
  reducer: {
    UiTheme: themeSlice,
  },
});
