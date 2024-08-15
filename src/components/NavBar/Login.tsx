import { IFormData } from '@/interfaces/formdata.interface';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';
import { IoInformationCircle } from 'react-icons/io5';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

interface LoginProps {
  closeModal: () => void;
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {
  const router = useRouter();
  const modal = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState<Partial<IFormData>>({
    password: '',
    email: '',
  });

  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [wrongEmail, setWrongEmail] = useState<boolean>(false);
  const send_btn = useRef<HTMLButtonElement | null>(null);

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
    await fetch('aca va la url del backend "/signup"', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    // console.log(formData);
  };

  return (
    <div
      ref={modal}
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
          onSubmit={signUp}
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
            {wrongEmail ? (
              <span className='absolute flex items-center gap-1 font-medium text-lg w-max left-0 -bottom-8 text-red-500'>
                <IoInformationCircle />
                Ingresa una dirección de email válido
              </span>
            ) : null}
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
              className='pointer-events-none bg-zinc-800 w-1/2 text-slate-300 py-4 px-8 rounded-md font-medium'>
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
    </div>
  );
};

export default Login;
