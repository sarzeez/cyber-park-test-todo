/* eslint-disable no-unused-vars */
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.BACKEND_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
});
