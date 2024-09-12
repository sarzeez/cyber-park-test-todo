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
  tagTypes: ['Product', 'ProductView'],
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
    getProduct: builder.query<Product, number>({
      query: (id: number) => {
        return {
          url: `/products/${id}`,
        };
      },
      providesTags: ['ProductView'],
    }),
    updateProduct: builder.mutation<
      { id: number; product: Product },
      { id: number; product: Product }
    >({
      query({ id, product }) {
        return {
          url: `/products/${id}`,
          method: 'PUT',
          body: product,
        };
      },
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation({
      query(id: number) {
        return {
          url: `/products/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
