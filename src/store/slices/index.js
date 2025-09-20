import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  showSidebar: true,
  showNotificationBar: true,
  selectedDashBoardIndex: 0,
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
    changeDashBoardIndex: (state, action) => {
      state.selectedDashBoardIndex = action.payload;
    },
  },
});

export const {
  toogleTheme,
  toogleSidebar,
  toogleNotificationbar,
  closeSidebar,
  closeNotificationBar,
  changeDashBoardIndex,
} = themeSlice.actions;
export default themeSlice.reducer;
