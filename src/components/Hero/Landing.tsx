import Image from 'next/image';
import hero from '@/assets/svgs/hero.svg';

const Landing = () => {
  return (
    <section
      id='hero-section'
      className='flex items-center z-10 py-8 xl:justify-center'>
      <div className='w-1/2 pl-16 flex flex-col items-start gap-10 z-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-black text-base-font-300 text-7xl gradient-text xl:text-pretty'>
            Encontrá lo que necesitás sin salir de casa
          </h1>
          <h2 className='font-medium text-base-font-100 text-2xl w-[90%]'>
            Descubrí una amplia variedad de categorías y productos, perfectos
            para darte ese gusto que siempre quisiste
          </h2>
        </div>
        <div className='flex items-center gap-4'>
          <button className='btn_primary'>Explorar Categorías</button>
          <button className='btn_primary'>Ver Ofertas</button>
        </div>
      </div>
      <div className='flex flex-col items-center w-1/2 z-10 gap-4 xl:w-auto'>
        <div className='w-[28em] h-auto mr-10 xl:w-[32em]'>
          <Image
            width={500}
            height={500}
            priority
            src={hero}
            alt='hero-section-image'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
