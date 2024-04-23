'use client'
import { LabeledInput } from '@/components/labeled-input'
import { useState } from 'react'
import Login from '../API/login'
import Link from 'next/link'
import LoadingSVG from '@/app/register/components/loading'
import { useRouter } from 'next/navigation'

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
        className='mb-9'
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
                from-red/90
                via-red/80
                via-80%
                to-red/90
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
        <Link href='/register' onClick={
          (e) => {
            e.preventDefault();
            setLoading(true);
            push('/register');
            
          }
        
        }>
        <span className='font-bold'>
            'No tienes cuenta? Registrate aquí'
          </span>
        </Link>
      </footer>
    </form>
  )
}

