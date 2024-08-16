'use client';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '@/interfaces/product.interface';
import ProductCard from './ProductCard';
import fake_data from '@/utils/fake-store-data.json';

const ProductCarrousel = () => {
  return (
    <section
      id='products-carrousel-section'
      className='bg-white py-32'>
      <h1 className='w-full text-center text-4xl font-extrabold text-base-font-300 mb-16'>Algunos de nuestros productos destacados</h1>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        className='bg-gradient-to-br from-base-300 to-black'>
        {fake_data.map((product: IProduct, index: number) => (
          <SwiperSlide
            key={index}
            className='flex items-center px-12 py-16 pl-20'>
            <ProductCard
              key={index}
              product={product}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarrousel;
