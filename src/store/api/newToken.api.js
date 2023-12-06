import { apiStore } from "./api.store";

export const myTracksApi = apiStore.injectEndpoints({
  endpoints: builder => ({
    postToken: builder.mutation({
      query: (refresh) => ({
        headers: {
          "content-type": "application/json"
        },
        url: "/user/token/refresh/",
        body: refresh,
        method: "POST",
      }),
      invalidatesTags: () => [{
        type: 'tracks'
      }]
    }),
  })
});

export const { usePostTokenQuery } = myTracksApi;