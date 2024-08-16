'use client';

import Footer from '@/components/Footer';
import Header from '@/components/NavBar/Header';
import ProductList from '@/components/Products/ProductList';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa6';

const Categories = () => {
  const [rating, setRating] = useState<number | string>(3);

  return (
    <>
      <Header />
      <main className='flex main-cont'>
        <div className='bg-base h-auto w-[25em] bg-base-secondary p-[0_1em] flex flex-col gap-8'>
          <h1 className='font-bold'>Filtros</h1>
          <div className=''>
            <p className='font-bold'>Calificación del usuario</p>
            <div className='flex items-center gap-2 w-auto p-4 bg-base-secondary'>
              <input
                type='range'
                min='1'
                max='5'
                step='1'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className='cursor-grab hover:cursor-grabbing'
              />
              <div className='font-bold text-base-font-100 flex items-center gap-1'>
                <span>{rating}</span>
                <FaStar
                  style={{
                    color: '#FAFF00',
                    filter: 'drop-shadow(0px 0px 1px #00000093)',
                  }}
                />
              </div>
            </div>
          </div>

          <div className=''>
            <p className='font-bold'>Usuario Premium</p>
            <div className='flex items-center gap-2 bg-base-secondary w-[12em] p-4 z-50'>
              <div className='relative z-10 before:absolute before:left-0 before:top-0 before:w-20 before:h-6 before:rounded-[40px] before:-z-10 before:bg-white before:border-base-borders'>
                <button className='btn_disabled'></button>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='font-bold'>Profesiones</p>
            {/* {professions.map((element, index) => (
              <label
                className={styles.labels_container}
                key={index}>
                <input
                  id={String(index)}
                  key={index}
                  type='checkbox'
                  value={element.professionEn}
                  onChange={(e) => console.log(e.target.value)}
                />
                {language === 'english'
                  ? element.professionEn
                  : element.professionEs}
              </label>
            ))} */}
          </div>
        </div>
        <ProductList />
      </main>
      <Footer />
    </>
  );
};

export default Categories;
