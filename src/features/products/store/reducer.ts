import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/redux/query';
import { Product } from '../type';
import { Params } from '@/types/request';

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productApiSlice = createApi({
  reducerPath: 'product',
  baseQuery,
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProductList: builder.query<ProductsResponse | undefined, Params>({
      query: (params: Params) => {
        return {
          url: '/products',
          params,
        };
      },
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductListQuery } = productApiSlice;
