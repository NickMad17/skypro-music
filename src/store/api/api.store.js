import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gets } from "../../API/api";

export const apiStore = createApi({
  reducerPath: "api",
  tagTypes: ['tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: gets.baseApi,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("user")).access;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } else {
        headers.set({
          "content-type": "application/json"
        })
      }
      return headers;
    },
  }),
  endpoints: builder => ({})
});


