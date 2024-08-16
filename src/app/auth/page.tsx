'use client';
import { IFormData } from '@/interfaces/formdata.interface';
import Image from 'next/image';
import signup_img from '@/assets/images/signup.webp';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';
import { IoInformationCircle } from 'react-icons/io5';
import toast, { Toaster } from 'react-hot-toast';
import Header from '@/components/NavBar/Header';
import Footer from '@/components/Footer';

const Auth = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    phone: 0,
    password: '',
    email: '',
  });
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [wrongEmail, setWrongEmail] = useState<boolean>(true);
  const send_btn = useRef<HTMLButtonElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    // Disable the send button function until the fields are completed
    if (
      wrongEmail === false &&
      formData.password &&
      formData.email &&
      formData.name &&
      formData.phone
    ) {
      send_btn.current?.classList.replace('btn_disabled', 'btn_primary');
    } else if (wrongEmail === true) {
      send_btn.current?.classList.replace('btn_primary', 'btn_disabled');
    }
  }, [
    formData.email,
    formData.name,
    formData.password,
    formData.phone,
    wrongEmail,
  ]);

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

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const response = await fetch(
        // `${process.env.NEXT_PUBLIC_URL_BACKEND_DEPLOY}/signup`, //PRODUCTION
        `${process.env.NEXT_PUBLIC_URL_BACKEND_DEV}/signup`, // DEVELOPMENT
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error('Error al registrar');
      localStorage.setItem('session', 'connected');
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const succesMessage = (e: any) => {
    const myPromise = signUp(e);

    toast.promise(
      myPromise,
      {
        loading: 'Enviando datos...',
        success: 'Registro exitoso!',
        error: 'Hubo un error al registrar',
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

    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className='flex items-center gap-32 justify-center py-40 bg-gradient-to-r from-base-secondary to-base-100/40'>
        <form
          name='contact-form'
          method='POST'
          onSubmit={succesMessage}
          className='duration-300 flex flex-col justify-around gap-12 w-[33em] border shadow-bottom bg-white rounded-lg py-12 px-24'>
          <div className='input_field_container relative w-full bg-white'>
            <input
              required={true}
              autoComplete='off'
              type='text'
              name='name'
              value={formData.name}
              id='name'
              onChange={(e) => {
                captureValues(e);
              }}
              className='text-xl border-b-base-200 p-2 pt-5 bg-white outline-none duration-300 border-2 border-transparent text-base-font-200 rounded-sm w-full focus:border-2 focus:border-base-200 focus:rounded-md focus:bg-white font-medium capitalize'
            />
            <label
              htmlFor='name'
              className='absolute font-medium text-base-200  left-4 top-7 text-lg duration-300'>
              Nombre
            </label>
          </div>
          <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
            <input
              required={true}
              autoComplete='off'
              type='number'
              name='phone'
              id='phone'
              maxLength={2}
              onChange={(e) => {
                captureValues(e);
              }}
              className='text-xl border-b-base-200 p-2 pt-5 bg-white outline-none duration-300 border-2 border-transparent text-base-font-200 rounded-sm w-full focus:border-2 focus:border-base-200 focus:rounded-md focus:bg-white font-medium'
            />
            <label
              htmlFor='phone'
              className='absolute font-medium text-base-200 left-4 top-7 text-lg duration-300'>
              Teléfono
            </label>
          </div>
          <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
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
              className='text-xl border-b-base-200 p-2 pt-5 bg-white outline-none duration-300 border-2 border-transparent text-base-font-200 rounded-sm w-full focus:border-2 focus:border-base-200 focus:rounded-md focus:bg-white font-medium'
            />
            <label
              htmlFor='password'
              className='absolute font-medium text-base-200 left-4 top-7 text-lg duration-300'>
              Contraseña
            </label>
            <span
              onClick={() => setHidePassword(!hidePassword)}
              className='absolute bottom-3 text-2xl right-3 cursor-pointer text-base-200'>
              {hidePassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>
          <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
            <input
              required={true}
              autoComplete='off'
              type='text'
              name='email'
              id='email'
              onChange={(e) => {
                captureValues(e);
              }}
              className='text-xl border-b-base-200 p-2 pt-5 bg-white outline-none duration-300 border-2 border-transparent text-base-font-200 rounded-sm w-full focus:border-2 focus:border-base-200 focus:rounded-md focus:bg-white font-medium lowercase'
            />
            <label
              htmlFor='email'
              className='absolute font-medium text-base-200 left-4 top-7 text-lg duration-300'>
              Email
            </label>
            {wrongEmail ? (
              <span className='absolute flex items-center gap-1 font-medium text-lg w-max left-0 -bottom-8 text-orange-500'>
                <IoInformationCircle />
                Ingresa una dirección de email válido
              </span>
            ) : null}
          </div>
          <button
            ref={send_btn}
            // onClick={}
            type='submit'
            className='w-[70%] m-[0_auto] text-lg btn_disabled duration-500'>
            Enviar
          </button>
        </form>
        <div className='w-[30em]  gap-12 flex flex-col '>
          <h1 className='font-extrabold text-4xl text-base-font-300'>
            Regístrate y descubre una nueva forma de comprar: rápida, sencilla y
            a tu medida.
          </h1>
          <div className='h-[25em] w-[30em] rounded-lg overflow-hidden'>
            <Image
              priority
              width={500}
              height={500}
              src={signup_img}
              alt='signup-img'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default Auth;
