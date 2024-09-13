import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/redux/query';
import { Params } from '@/types/request';
import { Comment, Post, Tag } from '../type';

export interface PostResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface CommentResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}

export const postApiSlice = createApi({
  reducerPath: 'post',
  baseQuery,
  tagTypes: ['Post', 'PostView', 'Tag', 'Comments'],
  endpoints: (builder) => ({
    getPostList: builder.query<PostResponse | undefined, Params>({
      query: ({ tag, search, ...params }: Params) => {
        if (tag) {
          return {
            url: `/posts/tags/${tag}`,
            params,
          };
        }

        if (search) {
          return {
            url: `/posts/search/?q=${search}`,
            params,
          };
        }

        return {
          url: '/posts',
          params,
        };
      },
      providesTags: ['Post'],
    }),
    getPost: builder.query<Post, number>({
      query: (id: number) => {
        return {
          url: `/posts/${id}`,
        };
      },
      providesTags: ['PostView'],
    }),
    updatePost: builder.mutation<{ id: number; product: Post }, { id: number; product: Post }>({
      query({ id, product }) {
        return {
          url: `/posts/${id}`,
          method: 'PUT',
          body: product,
        };
      },
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query(id: number) {
        return {
          url: `/posts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Post'],
    }),
    getPostTagList: builder.query<Array<Tag> | undefined, null>({
      query: () => {
        return {
          url: '/posts/tags',
        };
      },
      providesTags: ['Tag'],
    }),
    getPostComments: builder.query<CommentResponse | undefined, number>({
      query: (id: number) => {
        return {
          url: `/posts/${id}/comments`,
        };
      },
      providesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetPostListQuery,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useGetPostTagListQuery,
  useGetPostCommentsQuery,
} = postApiSlice;
