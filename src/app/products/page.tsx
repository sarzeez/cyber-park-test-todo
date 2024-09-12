'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Pagination from 'rc-pagination';
import Container from '@/components/ui/Container';
import {
  useDeleteProductMutation,
  useGetProductListQuery,
} from '@/features/products/store/reducer';
import { Product } from '@/features/products/type';
import '@/assets/styles/pagination.css';
import { PencilIcon, TrashIcon } from '@/assets/icons';

type Header = {
  name: string;
  styles: string;
};

const LIMIT = 10;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching } = useGetProductListQuery({
    limit: LIMIT,
    skip: (currentPage - 1) * LIMIT,
  });

  const onChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <section className="container">
        <h1 className="mt-10 text-center text-2xl font-bold uppercase tracking-wider text-dark-2">
          Providers
        </h1>
        {isFetching ? <p>Loading...</p> : null}
        <div className="mt-10 max-w-full overflow-x-auto rounded-xl bg-white shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2">
          <table className="w-full table-auto">
            <TableHead headers={headers} />
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
  { name: 'Title', styles: 'min-w-[280px]' },
  { name: 'Category', styles: 'min-w-[280px]' },
  { name: 'Price', styles: 'min-w-[250px]' },
  { name: 'Rating', styles: 'min-w-[140px]' },
  { name: 'Actions', styles: 'min-w-[140px]' },
];

const TableHead = ({ headers }: { headers: Header[] }) => {
  return (
    <thead>
      <tr className="bg-primary text-left">
        {headers.map((header, index) => (
          <th
            className={`px-4 py-4 text-base font-medium text-white first:pl-11 last:pr-11 ${header.styles}`}
            key={index}
          >
            {header.name}
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
