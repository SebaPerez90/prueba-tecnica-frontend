import { INavLinks } from '@/interfaces/navlinks.interface';
import Link from 'next/link';
import React from 'react';

const links: INavLinks[] = [
  {
    name: 'Ofertas',
    label: 'offers-link',
    path: '/offers',
  },
  {
    name: 'Categorías',
    label: 'categories-link',
    path: '/categories',
  },
  {
    name: 'Vender',
    label: 'post-product-link',
    path: '/post-product',
  },
];

const NavBar = () => {
  return (
    <nav className='flex items-center gap-8'>
      {links.map((links: INavLinks, index) => (
        <Link
          key={index}
          href={links.path}
          aria-label={links.label}
          className='text-base-font-300 font-semibold text-lg hover:text-base-200/70 hover:duration-200 duration-200 relative before:absolute before:left-0 before:-bottom-1 before:rounded-full before:w-0 before:h-1 before:bg-base-200/50 hover:before:w-full before:duration-200 flex items-center gap-1'>
          {links.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
