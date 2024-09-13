'use client';
import React, { useState } from 'react';
import Pagination from 'rc-pagination';
import { useFormik } from 'formik';
import Container from '@/components/ui/Container';
import { useGetPostListQuery, useGetPostTagListQuery } from '@/features/posts/store/reducer';
import '@/assets/styles/pagination.css';
import TextField from '@/components/form/TextField';
import SelectField from '@/components/form/SelectField';
import { Post, Tag } from '@/features/posts/type';
import { LikeIcon, ViewIcon } from '@/assets/icons';

type FormValues = {
  search: string;
  tag: string;
  sort: {
    sortBy: string;
    order: 'asc' | 'desc';
  };
};

const initialValues: FormValues = {
  search: '',
  tag: '',
  sort: {
    sortBy: '',
    order: 'asc',
  },
};

const LIMIT = 10;

const Posts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const submitHandler = () => {
    // clear formik values
    formik.setValues(initialValues);
  };

  const formik = useFormik({ initialValues, onSubmit: submitHandler });

  const { data, isFetching } = useGetPostListQuery({
    limit: LIMIT,
    skip: (currentPage - 1) * LIMIT,
    tag: formik.values?.tag,
    search: formik.values?.search,
    sortBy: formik.values.sort?.sortBy,
    order: formik.values.sort?.order,
  });
  const { data: tags } = useGetPostTagListQuery(null);

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <section className="container">
        <h1 className="mt-10 text-center text-2xl font-bold uppercase tracking-wider text-dark-2">
          Posts
        </h1>
        <div className="my-10 flex items-end justify-between">
          <form
            onSubmit={formik.handleSubmit}
            noValidate
            autoComplete="off"
            className="flex items-center gap-4 rounded-xl bg-white p-4 shadow"
          >
            <TextField
              name="search"
              formik={formik}
              placeholder="Search..."
              onChange={(event) => {
                formik.handleChange(event);
                formik.setFieldValue('tag', '');
              }}
            />
            <SelectField
              name="tag"
              formik={formik}
              placeholder="Select tag"
              className="w-[220px]"
              options={tags?.map((item: Tag) => ({ id: item.slug, title: item.name })) ?? []}
              onChange={(event) => {
                formik.handleChange(event);
                formik.setFieldValue('title', '');
              }}
            />
            <SelectField
              name="sort.sortBy"
              placeholder="Sort by"
              formik={formik}
              options={[
                {
                  id: 'title',
                  title: 'Title',
                },
                {
                  id: 'views',
                  title: 'Views',
                },
              ]}
            />
            {formik.values.sort.sortBy ? (
              <SelectField
                name="sort.order"
                placeholder="Order"
                formik={formik}
                options={[
                  {
                    id: 'asc',
                    title: 'ASC',
                  },
                  {
                    id: 'desc',
                    title: 'DESC',
                  },
                ]}
              />
            ) : null}
            <button type="submit" className="primary-button uppercase">
              Reset
            </button>
          </form>
          {formik.values.sort.sortBy ? (
            <p>
              Sorted by: <code className="text-primary">{formik.values.sort.sortBy}</code>, order:{' '}
              <code className="text-primary">{formik.values.sort.order}</code>
            </p>
          ) : null}
        </div>
        {isFetching ? <p>Loading...</p> : null}
        <div className="flex flex-col gap-4">
          {data?.posts.map((item, index) => <PostCard key={index} {...item} />)}
        </div>
        {data && data?.total > 0 ? (
          <div className="my-10 ml-auto w-max">
            <Pagination
              onChange={onChange}
              pageSize={LIMIT}
              current={currentPage}
              total={data.total}
            />
          </div>
        ) : null}
      </section>
    </Container>
  );
};

export default Posts;

const PostCard = (post: Post) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-md">
      <div className="flex w-full items-center justify-end border-b pb-3">
        <div className="flex items-center space-x-8">
          <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
            {post.tags.join(', ')}
          </button>
          <div className="text-xs text-neutral-500">2 hours ago</div>
        </div>
      </div>

      <div className="mb-6 mt-4">
        <a
          href={`/posts/${post.id}`}
          className="mb-3 text-xl font-bold hover:text-primary hover:underline"
        >
          {post.title}
        </a>
        <div className="text-sm text-neutral-600">{post.body}</div>
      </div>

      <div>
        <div className="flex items-center justify-between text-slate-500">
          <div className="flex space-x-4">
            <div className="flex items-center fill-slate-500 transition hover:fill-slate-600 hover:text-slate-600">
              <ViewIcon className="fill-inherit" />
              <span className="ml-[2px]">{post.views}</span>
            </div>
            <div className="flex items-center fill-slate-500 transition hover:fill-slate-600 hover:text-slate-600">
              <LikeIcon className="fill-inherit" />
              <span className="ml-[2px]">{post.reactions.likes}</span>
            </div>
            <div className="flex items-center fill-slate-500 transition hover:fill-slate-600 hover:text-slate-600">
              <LikeIcon className="rotate-180 fill-inherit" />
              <span className="ml-[2px]">{post.reactions.dislikes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
