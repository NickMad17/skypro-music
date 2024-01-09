import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { gets } from "../../API/api";
const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: gets.baseApi,
    prepareHeaders: (headers) => {
      const token = JSON.parse(localStorage.getItem("user"))?.access;

      console.debug("Использую токен из ls", { token });

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  })

  const result = await baseQuery(args, api, extraOptions);
  console.debug("Результат первого запроса", { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    localStorage.removeItem("user")
    window.location.reload();
  };

  if(!(JSON.parse(localStorage.getItem("user")))){
    return forceLogout()
  }

  const refreshResult = await baseQuery(
    {
      url: gets.auth.getRefresh,
      method: "POST",
      body: {
        refresh: JSON.parse(localStorage.getItem("user")).refresh,
      },
      headers: {
        "content-type": "application/json"
      }
    },
    api,
    extraOptions
  );

  console.log("Результат запроса на обновление токена", { refreshResult });

  if (!(refreshResult?.data?.access)) {
    return forceLogout();
  }

  localStorage.setItem("user", JSON.stringify({
    ...JSON.parse(localStorage.getItem("user")),
     ...refreshResult.data
  }))

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401 ) {
    return forceLogout();
  }

  console.debug("Повторный запрос завершился успешно");

  return retryResult;
}

export const apiStore = createApi({
  reducerPath: "api",
  tagTypes: ['tracks'],
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
});


