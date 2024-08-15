'use client';

import Image from 'next/image';
import Auth from './Auth';
import NavBar from './NavBar';
import logo from '@/assets/images/logo.png';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const nav_bar: HTMLElement | null = document.getElementById('nav-bar');

      if (window.scrollY !== 0) {
        nav_bar?.classList.add('[backdrop-filter:blur(10px)]');
        nav_bar?.classList.add('bg-[#ffffffaa]');
        nav_bar?.classList.add('[box-shadow:0px_0px_30px_0px_#00000033]');
      } else {
        nav_bar?.classList.remove('[backdrop-filter:blur(10px)]');
        nav_bar?.classList.remove('bg-[#ffffffaa]');
        nav_bar?.classList.remove('[box-shadow:0px_0px_30px_0px_#00000033]');
      }
    };

    handleScroll();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header
      id='nav-bar'
      className='flex justify-between items-center w-full fixed left-0 top-0 z-50 p-[1.5em_2em_1.5em_1em]'>
      <div className='flex items-center'>
        <Image
          src={logo}
          width={40}
          height={40}
          priority
          alt='logo'
        />
        <span
          onClick={() => router.push('/')}
          className='text-base-200 text-2xl font-bold cursor-pointer'>
          SwiftCart
        </span>
      </div>
      <NavBar />
      <Auth />
    </header>
  );
};

export default Header;
