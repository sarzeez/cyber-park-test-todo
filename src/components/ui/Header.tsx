'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type Menu = {
  title: string;
  url: string;
};

const menus: Menu[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Products',
    url: '/products',
  },
  {
    title: 'Posts',
    url: '/posts',
  },
];

const Header = () => {
  const pathname = usePathname();
  const { data } = useSession();

  return (
    <header className="flex flex-col items-center justify-center">
      <div className="container flex w-full flex-1 items-center justify-between gap-4 py-3">
        <a href="/" className="text-2xl font-bold text-primary">
          Cyber<span className="text-dark">Park</span>
        </a>
        <nav className="hidden flex-wrap items-center rounded-[30px] bg-white px-1 py-0.5 shadow-[0px_1px_2px_rgba(0,0,0,0.11)] dark:bg-dark-2 md:inline-flex">
          <ul className="-mx-0.5 flex flex-wrap">
            {menus.map((menu, index) => (
              <li key={index} className="p-0.5">
                <Link
                  href={menu.url}
                  className={`dark:text-dark-text flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-[30px] px-5 text-sm font-medium text-body-color ${pathname == menu.url ? 'bg-primary text-white' : 'hover:bg-primary/5 hover:text-primary dark:hover:bg-white/5 dark:hover:text-white'}`}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="group relative py-1 lg:py-3">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent bg-primary text-sm font-medium uppercase text-white duration-300 group-hover:bg-primary/90">
            {data?.user?.name && data?.user?.name[0]}
          </button>
          <div className="dark:shadow-features-dark z-100 invisible absolute right-0 top-[120%] w-[260px] rounded-lg border-[.5px] border-stroke bg-white py-2.5 opacity-0 shadow-3 duration-200 group-hover:visible group-hover:top-full group-hover:opacity-100 dark:border-dark-3 dark:bg-dark-2">
            <div className="border-b border-stroke px-6 pb-3.5 dark:border-dark-3">
              <p className="line-clamp-1 text-base font-medium text-dark dark:text-white"> </p>
              <p className="dark:text-dark-text-2 line-clamp-1 text-sm text-body-color">
                {data?.user?.email}
              </p>
            </div>
            <div className="space-y-1.5 px-2.5 py-3">
              <a
                className="dark:text-dark-text-2 group flex items-center gap-2 rounded-lg px-3.5 py-2 text-body-color duration-300 hover:bg-gray-2 hover:text-dark dark:hover:bg-dark dark:hover:text-white"
                href="/settings"
              >
                Account Settings
              </a>
            </div>
            <div className="border-t border-stroke px-2.5 pt-3 dark:border-dark-3">
              <Link
                href="api/auth/signout"
                className="dark:text-dark-text-2 group flex w-full items-center gap-2 rounded-lg px-3.5 py-2 text-body-color duration-300 hover:bg-gray-2 hover:text-dark dark:hover:bg-dark dark:hover:text-white"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
