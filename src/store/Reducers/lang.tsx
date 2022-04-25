import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const langReducer = createSlice({
  initialState,
  name: "lang",
  reducers: {
    ChangeLanguage: (state) => {
      return !state;
    },
  },
});

export const { ChangeLanguage } = langReducer.actions;

export default langReducer.reducer;
