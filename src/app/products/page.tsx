'use client';
import React from 'react';
import Container from '@/components/ui/Container';
import { useGetProductListQuery } from '@/features/products/store/reducer';
import { Product } from '@/features/products/type';
import Link from 'next/link';

type Header = {
  name: string;
  styles: string;
};

const Products = () => {
  const { data, isFetching } = useGetProductListQuery({ limit: 10, skip: 0 });
  console.log({ data });

  return (
    <Container>
      <section className="container">
        <h1 className="mt-10 text-center text-2xl font-bold uppercase tracking-wider text-dark-2">
          Providers
        </h1>
        {isFetching ? <p>Loading...</p> : null}
        <div className="my-10 max-w-full overflow-x-auto rounded-xl bg-white shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2">
          <table className="w-full table-auto">
            <TableHead headers={headers} />
            <TableBody data={data?.products || []} />
          </table>
        </div>
      </section>
    </Container>
  );
};

export default Products;

const headers: Header[] = [
  { name: 'Brand', styles: 'min-w-[280px]' },
  { name: 'Category', styles: 'min-w-[280px]' },
  { name: 'Price', styles: 'min-w-[250px]' },
  { name: 'Rating', styles: 'min-w-[140px]' },
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
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className="border-t border-stroke px-4 py-5 pl-11 dark:border-dark-3">
            <Link
              href={`/products/${row.id}`}
              className="text-base text-blue-700 hover:underline dark:text-dark-6"
            >
              {row.brand}
            </Link>
          </td>
          <td className="border-t border-stroke px-4 py-5 dark:border-dark-3">
            <p className="text-base text-body-color dark:text-dark-6">{row.category}</p>
          </td>
          <td className="border-t border-stroke px-4 py-5 dark:border-dark-3">
            <p className="text-base text-body-color dark:text-dark-6">{row.price}</p>
          </td>
          <td className="border-t border-stroke px-4 py-5 pr-11 dark:border-dark-3">
            <p className="text-base text-body-color dark:text-dark-6">{row.rating}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
