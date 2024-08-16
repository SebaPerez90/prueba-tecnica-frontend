import step_1 from '@/assets/svgs/step-1.svg';
import step_2 from '@/assets/svgs/step-2.svg';
import step_3 from '@/assets/svgs/step-3.svg';
import post_product from '@/assets/images/post-product.webp';
import Image from 'next/image';

const About = () => {
  const steps = [
    {
      image: step_1,
      title: '1. Busca tu Producto',
      description:
        'Seleciona la categoria que buscas y el nombre del producto.',
    },
    {
      image: step_2,
      title: '2. Agregalo Carrito',
      description:
        'Todas tus productos en un solo lugar para mayor simplicidad.',
    },
    {
      image: step_3,
      title: '3. Paga Online',
      description: 'Paga desde la comodidad de tu hogar con un par de clicks.',
    },
  ];

  return (
    <section
      id='about-section'
      className='flex pt-24 flex-col items-center gap-32 pb-36 bg-inherit'>
      <div className='bg-base-200 py-16 xl:py-20 w-full flex flex-col gap-20 items-center relative z-20'>
        <h1 className='text-5xl text-white font-bold'>¿Como usar?</h1>
        <div className='[grid-template-columns:repeat(3,fit-content(300px))] xl:[grid-template-columns:repeat(3,fit-content(500px))] grid gap-12'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-10'>
              <div className='w-[17em] h-[17em] shadow-bottom rounded-md bg-base-secondary/50 p-4 [backdrop-filter:blur(10px)]'>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={400}
                  className='h-full w-full object-contain'
                />
              </div>
              <div className='flex items-center flex-col gap-2 text-center'>
                <h2 className='text-3xl text-base-font-300 font-bold title-steps'>
                  {step.title}
                </h2>
                <p className='text-base-font-100 font-medium text-lg'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='custom-shape-divider-bottom-1723641869 -z-10'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'>
            <path
              d='M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z'
              className='shape-fill'></path>
          </svg>
        </div>
      </div>
      <div className='flex items-center gap-10 xl:gap-20 h-[30em]'>
        <div className='flex flex-col gap-5 items-start justify-around w-[35em] h-full'>
          <h3 className='text-base-font-300 text-5xl font-bold [line-height:1.2em]'>
            ¿Queres vender tu Producto en{' '}
            <strong className='text-base-200'>SwiftCart</strong>?
          </h3>
          <p className='text-base-font-100 font-medium text-xl'>
            Completa tu perfil con los datos necesarios para generar confianza y
            seguridad. Finalmente, describe lo que estás vendiendo.
            <br></br>
            <br></br>
            ¡Nunca fue tan fácil generar ingresos extra!
          </p>
          <button className='btn_primary w-1/2 scale-125 ml-8'>
            Publica tu producto
          </button>
        </div>
        <div className='rounded-lg overflow-hidden h-[30em] w-[35em]'>
          <Image
            priority
            width={500}
            height={500}
            src={post_product}
            alt='post-product'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
