'use client';
import { useSession } from 'next-auth/react';
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
    title: 'Users',
    url: '/users',
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
      <div className="container flex w-full flex-1 items-center justify-between gap-4">
        <h2 className="font-bold text-primary">
          Cyber<span className="text-dark">Park</span>
        </h2>
        <div className="group relative py-1 lg:py-3">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-transparent bg-primary text-sm font-medium uppercase text-white duration-300 group-hover:bg-primary/90">
            {data?.user?.email && data?.user?.email[0]}
          </button>
          <div className="border-stroke shadow-3 dark:border-dark-3 dark:bg-dark-2 dark:shadow-features-dark invisible absolute right-0 top-[120%] w-[260px] rounded-lg border-[.5px] bg-white py-2.5 opacity-0 duration-200 group-hover:visible group-hover:top-full group-hover:opacity-100">
            <div className="border-stroke dark:border-dark-3 border-b px-6 pb-3.5">
              <p className="text-dark line-clamp-1 text-base font-medium dark:text-white"> </p>
              <p className="text-body-color dark:text-dark-text-2 line-clamp-1 text-sm">
                {data?.user?.email}
              </p>
            </div>
            <div className="space-y-1.5 px-2.5 py-3">
              <a
                className="text-body-color hover:bg-gray-2 hover:text-dark dark:text-dark-text-2 dark:hover:bg-dark group flex items-center gap-2 rounded-lg px-3.5 py-2 duration-300 dark:hover:text-white"
                href="/settings"
              >
                Account Settings
              </a>
            </div>
            <div className="border-stroke dark:border-dark-3 border-t px-2.5 pt-3">
              <a
                href="api/auth/signout"
                className="text-body-color hover:bg-gray-2 hover:text-dark dark:text-dark-text-2 dark:hover:bg-dark group flex w-full items-center gap-2 rounded-lg px-3.5 py-2 duration-300 dark:hover:text-white"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="dark:bg-dark-2 mt-6 inline-flex flex-wrap items-center rounded-[30px] bg-white px-1 py-0.5 shadow-[0px_1px_2px_rgba(0,0,0,0.11)]">
        <ul className="-mx-0.5 flex flex-wrap">
          {menus.map((menu, index) => (
            <li key={index} className="p-0.5">
              <a
                href={menu.url}
                className={`text-body-color dark:text-dark-text flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-[30px] px-5 text-sm font-medium ${pathname == menu.url ? 'bg-primary text-white' : 'hover:bg-primary/5 hover:text-primary dark:hover:bg-white/5 dark:hover:text-white'}`}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
