import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import SocialNetworks from '@/app/SocialNetworks';
// import members from '@/assets/images/members.png';

const Footer = () => {
  return (
    <footer
      id='footer-section'
      className='bg-base-secondary  flex flex-col gap-12 justify-center items-center'>
      <div className='flex flex-col items-center w-full py-12'>
        <div className='flex items-center'>
          <Image
            src={logo}
            width={40}
            height={40}
            priority
            alt='logo'
          />
          <span className='text-base-200 text-2xl font-bold cursor-pointer'>
            SwiftCart
          </span>
        </div>
      </div>
      <div className='flex justify-around w-full flex-wrap-reverse'>
        <div className='flex flex-col items-center gap-10 relative before:absolute before:right-[-6em] before:top-0 before:w-1 before:h-full before:bg-base-200 before:rounded-full'>
          <span className='text-xl text-base-font-300 font-bold'>
            Siguenos en nuestras redes!
          </span>
          <SocialNetworks />
        </div>
        <div className='flex justify-evenly w-[clamp(600px,60%,1200px)]'>
          <ul className='flex flex-col gap-2 list-none text-base-font-200'>
            <span className='font-black text-lg pb-2 text-base-font-300'>
              Company
            </span>
            <li>Preguntas frecuentes</li>
            <li>Nosotros</li>
            <li>Contactanos</li>
          </ul>
          <ul className='flex flex-col gap-2 list-none text-base-font-200'>
            <span className='font-black text-lg pb-2 text-base-font-300'>
              Usuarios
            </span>
            <li>Publica</li>
            <li>Profesionales</li>
            <li>Premium</li>
          </ul>
          <ul className='flex flex-col gap-2 list-none text-base-font-200'>
            <span className='font-black text-lg pb-2 text-base-font-300'>
              Sobre nosotros
            </span>
            <li>Seba Perez</li>
            <li>Apoya el proyecto</li>
          </ul>
        </div>
      </div>
      <span className='py-4 font-semibold text-base-font-100'>
        SwiftCart Company © 2024 | SwiftCart@gmail.com
      </span>
    </footer>
  );
};

export default Footer;
{
  /* <div className={styles.subdiv_container}>
        <div className={styles.text_container}>
          <h1>
            <strong>Únete a nosotros</strong> para potenciar tu perfil
            profesional o encontrar al profesional que necesitas.
          </h1>
          <p>
            Recuerda que esta plataforma se mejora continuamente gracias a tus
            sugerencias.
          </p>
          <div className={styles.btns_container}>
            <button>Haz una sugerencia</button>
            <button>Únete ahora</button>
          </div>
        </div>
        <div className={styles.image_container}>
          <Image
            src={members}
            alt='members-img'
          />
        </div>
      </div> */
}
