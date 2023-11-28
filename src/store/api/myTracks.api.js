import { apiStore } from "./api.store";

export const myTracksApi = apiStore.injectEndpoints({
  endpoints: builder => ({
    getMyTracks: builder.query({
      query: () => "catalog/track/favorite/all",
      providesTags: ['tracks']
    }),
    getAllTracks: builder.query({
      query: () => "catalog/track/all",
      providesTags: ['tracks']
    }),
    createMyTracks: builder.mutation({
      query: (data) => {
        const {id, state} = data;
        return {
          url: `/catalog/track/${id}/favorite/`,
          body: id,
          method: `${state ? "POST" : "DELETE"}`,
        }
      },
      invalidatesTags: ['tracks']
    })
  })
});

export const { useGetAllTracksQuery, useGetMyTracksQuery, useCreateMyTracksMutation } = myTracksApi;