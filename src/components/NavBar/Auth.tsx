import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Login from './Login';
import { AnimatePresence } from 'framer-motion';

const Auth = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const modal = document.getElementById('modal');
    if (isOpen === false) {
      modal?.classList.replace('flex', 'hidden');
    }
  }, [isOpen]);

  const openModal = () => {
    const main_container = document.getElementById('main-section');
    const footer_section = document.getElementById('footer-section');
    const navbar = document.getElementById('nagevacion-links');
    const auth_btns = document.getElementById('auth-btns');

    if (isOpen) {
      auth_btns?.classList.remove('pointer-events-none', '[filter:blur(5px)]');
      navbar?.classList.remove('pointer-events-none', '[filter:blur(5px)]');
      footer_section?.classList.remove('[filter:blur(5px)]');
      main_container?.classList.remove(
        '[filter:blur(5px)]',
        'pointer-events-none'
      );
    } else {
      auth_btns?.classList.add('pointer-events-none', '[filter:blur(5px)]');
      navbar?.classList.add('pointer-events-none', '[filter:blur(5px)]');
      footer_section?.classList.add('[filter:blur(5px)]');
      main_container?.classList.add(
        '[filter:blur(5px)]',
        'pointer-events-none'
      );
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        id='auth-btns'
        className='flex items-center gap-4 bg duration-300'>
        <button
          onClick={openModal}
          className='btn_secondary'>
          Login
        </button>
        {pathname !== '/auth' && (
          <button
            className='btn_primary'
            onClick={() => router.push('/auth')}>
            Register
          </button>
        )}
      </div>
      <AnimatePresence>
        {isOpen && <Login closeModal={openModal} />}
      </AnimatePresence>
    </>
  );
};

export default Auth;
