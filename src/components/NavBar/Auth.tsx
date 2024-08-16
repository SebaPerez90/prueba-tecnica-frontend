import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Login from './Login';
import { AnimatePresence, motion } from 'framer-motion';
import { FiLogOut } from 'react-icons/fi';
import { FaUserLarge } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';

const Auth = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const modal = document.getElementById('modal');
    if (isOpen === false) {
      modal?.classList.replace('flex', 'hidden');
    }

    localStorage.getItem('session') === 'connected'
      ? setIsLogged(true)
      : setIsLogged(false);
  }, [isLogged, isOpen]);

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

  const logout = () => {
    localStorage.setItem('session', 'offline');
    setIsLogged(false);
    router.push('/');
  };

  return (
    <>
      <div
        id='auth-btns'
        className='flex items-center gap-4 bg duration-300'>
        {isLogged ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className='flex items-center gap-3'>
            <span className='text-4xl text-base-200 cursor-pointer'>
              <FaBell />
            </span>
            <span className='text-3xl text-base-200 border border-base-200 rounded-full p-3'>
              <FaUserLarge />
            </span>
            <span className='btn_primary text-2xl translate-x-1'>
              <FaShoppingCart />
            </span>
            <button
              onClick={logout}
              className='flex items-center gap-2 btn_secondary'>
              Salir
              <FiLogOut />
            </button>
          </motion.div>
        ) : (
          <>
            <button
              onClick={openModal}
              className='btn_secondary py-3 animate-[appearElement_300ms_ease_forwards]'>
              Login
            </button>
            {pathname !== '/auth' && (
              <button
                className='btn_primary py-3 animate-[appearElement_300ms_ease_forwards]'
                onClick={() => router.push('/auth')}>
                Register
              </button>
            )}
          </>
        )}
      </div>
      <AnimatePresence>
        {isOpen && <Login closeModal={openModal} />}
      </AnimatePresence>
    </>
  );
};

export default Auth;
