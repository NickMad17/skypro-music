import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Треки",

};

export const changeList = createSlice({
  name: "changeList",
  initialState,
  reducers: {
    changeName: (state, { payload: nameList }) => {
      return {
        ...state,
        name: nameList
      }
    },

  }
});

export const {actions, reducer} = changeList