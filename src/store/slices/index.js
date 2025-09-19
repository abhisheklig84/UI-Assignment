import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light  ",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toogleTheme } = themeSlice.actions;
export default themeSlice.reducer;
