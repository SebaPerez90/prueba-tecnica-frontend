import Image from 'next/image';
import hero from '@/assets/svgs/hero.svg';

const Landing = () => {
  return (
    <section
      id='hero-section'
      className='flex items-center relative before:absolute before:left-[50%] before:bottom-[35%] before:w-32 before:h-32 before:rounded-full before:[background:radial-gradient(circle,#ffff,#655DBB)] before:-z-20 before:blur-2xl before:opacity-50 before:scale-[5] z-10'>
      <div className='w-1/2 pl-16 flex flex-col items-start gap-10 z-10'>
        <div className='flex flex-col gap-4'>
          <h1 className='font-black text-base-font-300 text-7xl gradient-text'>
            Encontrá lo que necesitás sin salir de casa
          </h1>
          <h2 className='font-medium text-base-font-100 text-2xl'>
            Descubrí una amplia variedad de categorías y productos, perfectos
            para darte ese gusto que siempre quisiste
          </h2>
        </div>
        <div className='flex items-center gap-4'>
          <button className='btn_primary py-4'>Explorar Categorías</button>
          <button className='btn_primary py-4'>Ver Ofertas</button>
        </div>
      </div>
      <div className='flex flex-col items-center w-1/2 z-10'>
        <div className='w-[28em] h-auto mr-10'>
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
