'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Pagination from 'rc-pagination';
import { useFormik } from 'formik';
import Container from '@/components/ui/Container';
import {
  useDeleteProductMutation,
  useGetProductCategoryListQuery,
  useGetProductListQuery,
} from '@/features/products/store/reducer';
import { Category, Product } from '@/features/products/type';
import '@/assets/styles/pagination.css';
import { PencilIcon, TrashIcon } from '@/assets/icons';
import TextField from '@/components/form/TextField';
import SelectField from '@/components/form/SelectField';

type FormValues = {
  search: string;
  category: string;
  sort?: {
    sortBy: string;
    order: 'asc' | 'desc';
  };
};

const initialValues: FormValues = {
  search: '',
  category: '',
};

type Header = {
  name: string;
  styles: string;
  sortBy?: string;
};

const LIMIT = 10;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const submitHandler = () => {
    // clear formik values
    formik.setValues(initialValues);
  };

  const formik = useFormik({ initialValues, onSubmit: submitHandler });

  const { data, isFetching } = useGetProductListQuery({
    limit: LIMIT,
    skip: (currentPage - 1) * LIMIT,
    category: formik.values?.category,
    search: formik.values?.search,
    sortBy: formik.values.sort?.sortBy,
    order: formik.values.sort?.order,
  });
  const { data: categories } = useGetProductCategoryListQuery(null);

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  const sortHandler = (sortBy: string) => {
    const { sort } = formik.values;
    if (!sort || (sort && sort.sortBy != sortBy)) {
      formik.setFieldValue('sort', { sortBy, order: 'asc' });
      return;
    }

    if (sort && sort.sortBy === sortBy && sort.order === 'asc') {
      formik.setFieldValue('sort', { sortBy, order: 'desc' });
      return;
    }

    formik.setFieldValue('sort', undefined);
  };

  return (
    <Container>
      <section className="container">
        <h1 className="mt-10 text-center text-2xl font-bold uppercase tracking-wider text-dark-2">
          Providers
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
                formik.setFieldValue('category', '');
              }}
            />
            <SelectField
              name="category"
              formik={formik}
              placeholder="Category"
              className="w-[220px]"
              options={
                categories?.map((item: Category) => ({ id: item.slug, title: item.name })) ?? []
              }
              onChange={(event) => {
                formik.handleChange(event);
                formik.setFieldValue('title', '');
              }}
            />
            <button type="submit" className="primary-button uppercase">
              Reset
            </button>
          </form>
          {formik.values.sort ? (
            <p>
              Sorted by: <code className="text-primary">{formik.values.sort.sortBy}</code>, order:{' '}
              <code className="text-primary">{formik.values.sort.order}</code>
            </p>
          ) : null}
        </div>
        {isFetching ? <p>Loading...</p> : null}
        <div className="bg-tranparentmax-w-full overflow-x-auto rounded-xl shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2">
          <table className="w-full table-auto">
            <TableHead headers={headers} sortHandler={sortHandler} />
            <TableBody data={data?.products || []} />
          </table>
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

export default Products;

const headers: Header[] = [
  { name: 'ID', styles: '' },
  { name: 'Title', styles: 'min-w-[280px]', sortBy: 'title' },
  { name: 'Category', styles: 'min-w-[280px]' },
  { name: 'Price', styles: 'min-w-[250px]', sortBy: 'price' },
  { name: 'Rating', styles: 'min-w-[140px]', sortBy: 'rating' },
  { name: 'Actions', styles: 'min-w-[140px]' },
];

const TableHead = ({
  headers,
  sortHandler,
}: {
  headers: Header[];
  sortHandler: (sortBy: string) => void;
}) => {
  return (
    <thead>
      <tr className="bg-primary text-left">
        {headers.map((header, index) => (
          <th className={`px-4 py-4 first:pl-11 last:pr-11 ${header.styles}`} key={index}>
            <div className="flex items-center">
              <span className="text-base font-medium text-white">{header.name}</span>
              {header?.sortBy ? (
                <button
                  type="button"
                  onClick={() => sortHandler(header.sortBy as string)}
                  className="ms-1.5 flex h-4 w-4 items-center justify-center rounded text-white hover:bg-white hover:text-primary"
                >
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </button>
              ) : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ data }: { data: Product[] }) => {
  const [deleteProduct, {}] = useDeleteProductMutation();

  const deleteHandler = (id: number) => {
    deleteProduct(id);
  };

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className="border-t border-stroke px-4 py-5 pl-11 dark:border-dark-3">{row.id}</td>
          <td className="border-t border-stroke px-4 py-5 dark:border-dark-3">
            <p className="text-base text-body-color dark:text-dark-6">
              {' '}
              <Link
                href={`/products/${row.id}`}
                className="text-base text-blue-700 hover:underline dark:text-dark-6"
              >
                {row.title}
              </Link>
            </p>
          </td>
          <td className="border-t border-stroke px-4 py-5 dark:border-dark-3">
            <p className="text-base text-body-color dark:text-dark-6">{row.category}</p>
          </td>
          <td className="border-t border-stroke px-4 py-5 dark:border-dark-3">
            <p className="text-base text-body-color dark:text-dark-6">$ {row.price}</p>
          </td>
          <td className="border-t border-stroke px-4 py-5 dark:border-dark-3">
            <p className="text-base text-body-color dark:text-dark-6">{row.rating}</p>
          </td>
          <td className="border-t border-stroke px-4 pr-11 dark:border-dark-3">
            <div className="flex items-center justify-between">
              <Link href={`/products/${row.id}/edit`} className="group flex items-center">
                <span className="inline-block rounded-full p-2 hover:bg-primary/10">
                  <PencilIcon className="fill-black group-hover:fill-primary" />
                </span>
              </Link>
              <button
                onClick={() => deleteHandler(row.id)}
                type="button"
                className="group flex items-center justify-center"
              >
                <span className="inline-block rounded-full p-2 hover:bg-red/10">
                  <TrashIcon className="fill-black group-hover:fill-red" />
                </span>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
