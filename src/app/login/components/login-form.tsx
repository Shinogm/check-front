'use client'
import { LabeledInput } from '@/components/labeled-input'
import RegisterWorker from '../API/register-worker'
import Link from 'next/link'

export default function LoginPage (): JSX.Element {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    try {
      const user = await RegisterWorker(form)
      console.log(user)
    } catch (error) {
      console.error(error)
    }
  }

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
          <span
            className='font-bold'
          >
            Iniciar sesión
          </span>
        </button>
        <Link href='/register/admin'>
          <span className='text-[0.875rem] text-[#145a6a] text-ellipsis'>
            Registrarse
          </span>
        </Link>
      </footer>
    </form>
  )
}

