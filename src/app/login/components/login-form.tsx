'use client'
import { LabeledInput } from '@/components/labeled-input'
<<<<<<< HEAD
import { useState } from 'react'
import Login from '../API/login'
=======
import LoginAdmin from '../API/login'
>>>>>>> 72eadf24f433997d97dcbb49f5c14ff56f268bbc
import Link from 'next/link'
import LoadingSVG from '@/app/register/components/loading'
import { useRouter } from 'next/navigation'

<<<<<<< HEAD
export const LoginForm = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      const form = new FormData(e.currentTarget);
      console.log('form', form);
      try {
          console.log("Login")
          push('/');
          const login = await Login(form);

      } catch (error) {
          console.error(error);
          setLoading(false);
      }
  };

  console.log('Login');
  console.log('loading', loading);
=======
export default function LoginPage (): JSX.Element {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    try {
      const user = await LoginAdmin(form)
      console.log(user)
    } catch (error) {
      console.error(error)
    }
  }
>>>>>>> 72eadf24f433997d97dcbb49f5c14ff56f268bbc

  return (
    <form
      onSubmit={handleSubmit}
      className='
            p-4
            md:border
            md:rounded-md
            md:p-10
            md:shadow-xl
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-white
        '
    >

      <section
        className='mb-9 rounded-xl'

      >
        <LabeledInput
          label='Correo electrónico'
          type='email'
          placeholder='example@example.com'
          required
          name='email'
        />

        <LabeledInput
          label='Contraseña'
          type='password'
          placeholder='********'
          required
          name='password'
        />
      </section>

      <footer
        className='flex flex-col items-center justify-center gap-1'
      >
        <button
          className='
                bg-gradient-to-r
                from-gray-800
                via-gray-900
                to-gray-800
                text-white
                w-full
                py-2
                rounded-md
                transition-opacity
                opacity-95
                hover:opacity-100
            '
          type='submit'
        >
          <span className='font-bold'>
            {loading ? <LoadingSVG
                          className='w-6 h-6 items-center justify-center'
                          /> : 'Iniciar sesión'}
          </span>
        </button>
<<<<<<< HEAD
        <Link href='/register' onClick={
          (e) => {
            e.preventDefault();
            setLoading(true);
            push('/register');
            
          }
        
        }>
        <span className='font-bold'>
            'No tienes cuenta? Registrate aquí'
=======
        <Link href='/register/admin'>
          <span className='text-[0.875rem] text-[#145a6a] text-ellipsis'>
            Registrarse
>>>>>>> 72eadf24f433997d97dcbb49f5c14ff56f268bbc
          </span>
        </Link>
      </footer>
    </form>
  )
}

