import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITest {
  message: string;
}

const URL = "http://localhost:8000";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${URL}/` }),
  endpoints: (build) => ({
    getTest: build.query<ITest, string>({
      query: () => "",
    }),
  }),
});

export const { useGetTestQuery } = testApi;
