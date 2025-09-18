import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setLightMode: (state) => {
      state.mode = "light";
    },
    setDarkMode: (state) => {
      state.mode = "dark";
    },
  },
});

export const { setLightMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
