import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://656bad0adac3630cf7284f51.mockapi.io/api/",
  }),
  endpoints: builder => ({
    getAllCars: builder.query({
      query: ({ page = 1, make }) => ({
        url: `cars`,
        params: { page, make, limit: 12 },
      }),
    }),
  }),
});

export const { useLazyGetAllCarsQuery } = api;
