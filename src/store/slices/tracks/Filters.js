import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: ''

};

export const Filters = createSlice({
  name: "changeList",
  initialState,
  reducers: {


    changeFilter: (state, { payload: author }) => {
      return {
        ...state,
        filter: author,
      }
    }
  }
});

export const {actions, reducer} = Filters