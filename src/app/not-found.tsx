'use client';

import not_found from '@/assets/svgs/not-found.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoMdHome } from 'react-icons/io';

export default function NotFound() {
  const router = useRouter();
  const [counter, setCounter] = useState(5);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1500);

      const timeout = setTimeout(() => {
        router.push('/');
      }, 7500);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }, [router]);

  return (
    <div className='relative h-dvh bg-gradient-to-br gap-20 from-black to-base-300 flex items-center justify-center'>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-white text-7xl z-20 font-extrabold'>
          Llegaste a la Luna!
        </h1>
        <p className='text-slate-200 text-xl z-20'>
          Parece que estás algo perdido, no te preocupes.<br></br> Serás
          redirigido al inicio en {counter} segundos...
        </p>
        <button
          onClick={() => router.push('/')}
          className='btn_primary flex items-center gap-2 mt-8'>
          <IoMdHome />
          Vuelve al Inicio
        </button>
      </div>
      <div className=''>
        <Image
          src={not_found}
          alt='Not Found'
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
