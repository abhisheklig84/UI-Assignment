import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  showSidebar: true,
  showNotificationBar: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    toogleSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    },
    toogleNotificationbar: (state) => {
      state.showNotificationBar = !state.showNotificationBar;
    },
    closeSidebar: (state) => {
      state.showSidebar = false;
    },
    closeNotificationBar: (state) => {
      state.showNotificationBar = false;
    },
  },
});

export const {
  toogleTheme,
  toogleSidebar,
  toogleNotificationbar,
  closeSidebar,
  closeNotificationBar,
} = themeSlice.actions;
export default themeSlice.reducer;
