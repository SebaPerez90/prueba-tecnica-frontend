import { IFormData } from '@/interfaces/formdata.interface';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

interface LoginProps {
  closeModal: () => void;
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {
  const router = useRouter();

  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [wrongEmail, setWrongEmail] = useState<boolean>(true);
  const send_btn = useRef<HTMLButtonElement | null>(null);
  const [formData, setFormData] = useState<Partial<IFormData>>({
    password: '',
    email: '',
  });

  useEffect(() => {
    // Disable the send button function until the fields are completed
    if (wrongEmail === false && formData.password) {
      send_btn.current?.classList.replace('btn_disabled', 'btn_primary');
    } else if (wrongEmail === true) {
      send_btn.current?.classList.replace('btn_primary', 'btn_disabled');
    }
  }, [formData.password, wrongEmail]);

  const captureValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      const updatedValue = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData({ ...formData, [name]: updatedValue });
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(value)) {
        setFormData({ ...formData, [name]: value });
        setWrongEmail(false);
      } else {
        setWrongEmail(true);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL_BACKEND_DEPLOY}/api/v1/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error('Error al iniciar sesión');
      localStorage.setItem('session', 'connected');
      const data = await response.json();

      setTimeout(() => {
        router.push('/');
        closeModal();
      }, 3000);

      return data;
    } catch (error) {
      throw error;
    }
  };

  const succesMessage = (e: any) => {
    const myPromise = signIn(e);

    toast.promise(
      myPromise,
      {
        loading: 'Enviando datos...',
        success: 'Bienvenido nuevamente!',
        error: 'Oops! ocurrió un error',
      },
      {
        style: {
          minWidth: '200px',
          padding: '1.1em 1.4em',
          fontSize: '1.3em',
        },
        success: {
          duration: 3000,
        },
      }
    );
  };

  return (
    <motion.div
      id='modal'
      transition={{
        type: 'spring',
        bounce: 0.5,
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0 }}
      className='absolute left-[30%] top-[1em] rounded-lg bg-[#181818] px-8'>
      <div className='flex items-center justify-evenly flex-col relative h-[39em]'>
        <div className='flex flex-col items-center gap-3'>
          <div className='flex items-center'>
            <Image
              src={logo}
              width={25}
              height={25}
              priority
              alt='logo'
              className='[filter:brightness(2)]'
            />
            <span className='text-base-200 text-2xl font-bold [filter:brightness(1.2)]'>
              SwiftCart
            </span>
          </div>
          <h3 className='text-white text-4xl font-bold'>Inicia Sesión</h3>
          <span className='text-slate-400 '>
            Accede a tu cuenta de SwiftCart
          </span>
        </div>
        <form
          name='contact-form'
          method='POST'
          onSubmit={succesMessage}
          className='flex flex-col justify-around gap-9 w-[27em]'>
          <div className='relative w-full input_field_container_login'>
            <input
              required={true}
              autoComplete='off'
              type={hidePassword ? 'password' : 'text'}
              name='password'
              id='password'
              maxLength={15}
              onChange={(e) => {
                captureValues(e);
              }}
              className='text-xl border-slate-500 outline-none bg-zinc-800 duration-300 border text-slate-200 rounded-lg w-full focus:bg-base-300/70 font-medium p-4'
            />
            <label
              htmlFor='password'
              className='absolute  text-slate-400/70 left-8 top-5 text-lg duration-300'>
              Contraseña
            </label>
            <span
              onClick={() => setHidePassword(!hidePassword)}
              className='absolute bottom-5 text-2xl right-6 cursor-pointer text-slate-50'>
              {hidePassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>
          <div className='relative w-full input_field_container_login'>
            <input
              required={true}
              autoComplete='off'
              type='text'
              name='email'
              id='email'
              onChange={(e) => {
                captureValues(e);
              }}
              className='text-xl border-slate-500 outline-none bg-zinc-800 duration-300 border text-slate-200 rounded-lg w-full focus:bg-base-300/70 font-medium p-4 lowercase'
            />
            <label
              htmlFor='email'
              className='absolute text-slate-400/70 left-8 top-5 text-lg duration-300'>
              Correo electrónico
            </label>
          </div>
          <div className='flex items-center flex-col gap-8 mt-6'>
            <label
              htmlFor='checkbox'
              className='ml-2 text-slate-200 text-lg flex items-center gap-3 self-start'>
              <input
                id='checkbox'
                type='checkbox'
                name='checkbox'
                className='scale-150'
              />
              Recuérdame en este equipo
            </label>
            <button
              ref={send_btn}
              type='submit'
              onClick={succesMessage}
              className='w-1/2 btn_disabled'>
              Enviar
            </button>
            <p className='text-slate-200 text-lg'>
              ¿Aún no tienes una cuenta?{' '}
              <strong
                onClick={() => router.push('/auth')}
                className='text-base-200 cursor-pointer hover:text-base-300 duration-200'>
                Regístrate aquí
              </strong>
            </p>
          </div>
        </form>
      </div>
      <button
        onClick={closeModal}
        className='absolute right-6 top-6 text-slate-400 hover:text-white duration-200 font-extrabold text-xl'>
        X
      </button>
      <Toaster />
    </motion.div>
  );
};

export default Login;
