import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GrClose } from 'react-icons/gr';
import { usePathname } from 'next/navigation';

const Auth = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState();
  const modal = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  const openModal = (project: any) => {
    setCurrentProject(project);
    if (currentProject) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (currentProject) {
      modal.current?.classList.replace('hidden', 'flex');
      container.current?.classList.add('[filter:blur(5px)]');
      document.documentElement.classList.add('overflow-y-hidden');
      setIsOpen(true);
    }
  }, [currentProject]);

  const closeModal = () => {
    modal.current?.classList.add('[transition:all_400ms]');
    modal.current?.classList.add('[opacity:0!important]');
    modal.current?.classList.replace('sm:w-[40em]', 'w-0');
    modal.current?.classList.replace('w-[100%]', 'w-0');
    setTimeout(() => {
      modal.current?.classList.replace('flex', 'hidden');
      container.current?.classList.remove('[filter:blur(5px)]');
      document.documentElement.classList.remove('overflow-y-hidden');
      setIsOpen(false);
    }, 400);
  };

  return (
    <div className='flex items-center gap-4'>
      <button className='btn_secondary'>Login</button>
      {pathname !== '/auth' && (
        <button
          className='btn_primary'
          onClick={() => router.push('/auth')}>
          Register
        </button>
      )}
    </div>
  );
};

export default Auth;
