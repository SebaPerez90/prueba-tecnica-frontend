import { IFormData } from '@/interfaces/formdata.interface';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';
import { IoInformationCircle } from 'react-icons/io5';

interface LoginProps {
  closeModal: () => void;
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {
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
      className='absolute left-[30%] top-[1em] w-[35em] py-20 rounded-lg bg-gradient-to-br from-black to-base-300'>
      <div className='flex items-center justify-around flex-col gap-8 relative h-[30em]'>
        <h1 className='text-white text-4xl font-semibold'>Inicia Sesión</h1>
        <form
          name='contact-form'
          method='POST'
          onSubmit={signUp}
          className='flex flex-col justify-around gap-5 w-[20em]'>
          <div className='relative w-full'>
            <input
              required={true}
              autoComplete='off'
              type='text'
              name='email'
              id='email'
              onChange={(e) => {
                captureValues(e);
              }}
              className='text-xl border-base-200 bg-inherit outline-none duration-300 border-2 text-slate-200 rounded-lg w-full focus:bg-base-300 font-medium p-4 lowercase'
            />
            <label
              htmlFor='email'
              className='absolute font-medium text-base-200 left-8 top-5 text-lg duration-300'>
              Correo Electrónico
            </label>
            {wrongEmail ? (
              <span className='absolute flex items-center gap-1 font-medium text-lg w-max left-0 -bottom-8 text-orange-500'>
                <IoInformationCircle />
                Ingresa una dirección de email válido
              </span>
            ) : null}
          </div>
          <div className='relative w-full'>
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
              className='text-xl border-base-200 bg-inherit outline-none duration-300 border-2 text-slate-200 rounded-lg w-full focus:bg-base-300 font-medium p-4'
            />
            <label
              htmlFor='password'
              className='absolute font-medium text-base-200 left-8 top-5 text-lg duration-300'>
              Contraseña
            </label>
            <span
              onClick={() => setHidePassword(!hidePassword)}
              className='absolute bottom-3 text-2xl right-3 cursor-pointer text-base-200'>
              {hidePassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </div>
          <button
            ref={send_btn}
            type='submit'
            className='btn_secondary pointer-events-none text-white w-1/2 py-4 m-[0_auto]'>
            Enviar
          </button>
        </form>
      </div>
      <button
        onClick={closeModal}
        className='absolute right-6 top-6 btn_secondary text-white scale-75'>
        <GrClose />
      </button>
    </div>
  );
};

export default Login;
