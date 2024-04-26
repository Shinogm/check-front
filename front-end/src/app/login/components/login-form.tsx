'use client'
import { LabeledInput } from '@/components/labeled-input'
import { useState } from 'react'
import Login from '../API/login'
import Link from 'next/link'
import LoadingSVG from '@/app/register/admin/components/loading'
import { useRouter } from 'next/navigation'

export const LoginForm = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget as HTMLFormElement)
    const email = form.get('email') as string
    const password = form.get('password') as string
    const { rawResponse } = await Login(
      email,
      password
    )
    try {
      console.log('Login')

      console.log('Response', rawResponse)

      if ((Number(rawResponse.status) === 200) && ((rawResponse.statusText).toString()) === 'OK') {
        console.log('Login successful')
        // Redirect to some other page
        push('/worker')
      } else {
        // Handle other status codes or errors
        console.error('Login failed')
        setLoading(false)
      }
    } catch (error) {
      console.error('Error during login:', error)
    } finally {
      setLoading(false) // Ensure to set loading to false whether login is successful or not
    }
  }

  console.log('Login')
  console.log('loading', loading)

  return (
    <form
      onSubmit={handleSubmit}
      className='
            p-4
            md:border
            md:rounded-md
            md:p-10
            md:shadow-xl
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
            {loading
              ? <LoadingSVG
                  className='w-6 h-6 items-center justify-center'
                />
              : 'Iniciar sesión'}
          </span>
        </button>
        <Link
          href='/register' onClick={
          (e) => {
            e.preventDefault()
            setLoading(true)
            push('/register')
          }

        }
        >
          <span className='font-bold'>
            'No tienes cuenta? Registrate aquí'
          </span>
        </Link>
      </footer>
    </form>
  )
}
