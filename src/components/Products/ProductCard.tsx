'use client';

import fake_data from '@/utils/fake-store-data.json';
import { IProduct } from '@/interfaces/product.interface';
import { MdAddShoppingCart } from 'react-icons/md';
import Image from 'next/image';
import { FaFire } from 'react-icons/fa';
import { useState } from 'react';

const ProductCard = () => {
  const discountPercentage = 0.2;
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const addToFavorite = (index: number) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  return (
    <section
      id='products-section'
      className='bg-base-secondary'>
      <h1>Productos Destacados</h1>
      <div className='grid [grid-template-columns:repeat(3,fit-content(300px))] gap-8 justify-center'>
        {fake_data.map((product: IProduct, index) => (
          <div
            key={index}
            className='relative flex flex-col items-center justify-between py-4 rounded-lg shadow-neutral gap-4 w-[22em] bg-white'>
            <svg
              id='heart-svg'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill={favorites[index] ? '#f00' : 'none'}
              stroke={favorites[index] ? '#f00' : '#0007'}
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              style={
                favorites[index]
                  ? { animation: 'growEffect 500ms linear' }
                  : undefined
              }
              className='feather feather-heart h-8 w-8 absolute right-4 top-4 cursor-pointer duration-1000'
              onClick={() => addToFavorite(index)}>
              <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
            </svg>
            <div className='h-[13em] w-[13em]'>
              <Image
                priority
                width={300}
                height={300}
                src={product.image}
                alt={product.title}
                className='w-full h-full object-contain z-20 hover:scale-110 duration-200'
              />
            </div>
            <span className='text-base-font-300 flex flex-col gap-2 font-bold text-lg w-[90%] text-center'>
              {product.title}
            </span>
            <span className='flex items-center font-extrabold text-2xl text-base-font-300 [letter-spacing:-1px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='black'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='relative left-1'>
                <path d='M12 3v18M17 6h-6a3 3 0 1 0 0 6h2a3 3 0 1 1 0 6H7' />
              </svg>
              {product.rating.rate < 3.5 ? (
                <span className='flex items-center gap-2'>
                  {(product.price * (1 - discountPercentage)).toFixed(2)}
                  <span className='text-base-font-100/70 font-semibold relative before:absolute before:left-0 before:top-[50%] before:w-full before:h-[2px] before:bg-base-font-100/70 px-2'>
                    {product.price}
                  </span>
                </span>
              ) : (
                product.price
              )}
              {product.rating.rate < 3.5 && (
                <span className='absolute top-2 left-2 text-[0.8em] flex items-center gap-1 border rounded-md px-3 font-medium bg-[#ffffff1f] [backdrop-filter:blur(5px)]'>
                  Oferta
                  <FaFire className='text-red-500' />
                </span>
              )}
            </span>
            <div className='flex items-center gap-2'>
              <button className='btn_secondary py-3 px-6'>Ver más</button>
              <button className='btn_primary flex items-center gap-2 py-3 px-6'>
                Sumar al carro
                <MdAddShoppingCart className='text-2xl' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
