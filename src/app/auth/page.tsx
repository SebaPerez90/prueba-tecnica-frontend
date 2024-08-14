'use client';
import { IFormData } from '@/interfaces/formdata.interface';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// const router = useRouter();
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';
import { IoInformationCircle } from 'react-icons/io5';

const Auth = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    phone: 0,
    password: '',
    email: '',
  });
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [wrongEmail, setWrongEmail] = useState<boolean>(false);
  const send_btn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (wrongEmail === false && formData.password.length > 5) {
      send_btn.current?.classList.replace(
        'pointer-events-none',
        'pointer-events-auto'
      );
    }
  }, [wrongEmail]);

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
    console.log(wrongEmail);
  };

  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('aca va la url del backend "/signup"', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(formData);
  };

  return (
    <main className='flex flex-col items-center justify-center h-dvh bg-white'>
      <form
        name='contact-form'
        method='POST'
        onSubmit={signUp}
        className='flex flex-col justify-around gap-12 w-[20em]'>
        <div className='input_field_container relative w-full bg-white dark:bg-dark-main'>
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
            className='text-xl border-b-base-200 p-2 pt-5 bg-white outline-none duration-300 border-2 border-transparent text-base-font-200 rounded-sm w-full focus:border-2 focus:border-base-200 focus:rounded-md focus:bg-white font-medium'
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
            className='text-xl border-b-base-200 p-2 pt-5 bg-white outline-none duration-300 border-2 border-transparent text-base-font-200 rounded-sm w-full focus:border-2 focus:border-base-200 focus:rounded-md focus:bg-white font-medium'
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
          type='submit'
          className='btn_primary pointer-events-none'>
          Enviar Formulario
        </button>
      </form>
    </main>
  );
};

export default Auth;
