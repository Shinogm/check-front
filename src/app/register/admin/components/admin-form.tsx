'use client'
import { motion } from 'framer-motion'
import { LabeledInput } from '@/components/labeled-input'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LoadingSVG from './loading'
import RegisterAdmin from '../API/register'
import { Button } from '@/components/ui/button'
import { Toaster, toast } from 'sonner'

export const AdminForm = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    const token = parseInt(form.get('token') as string)
    console.log('form', form)
    console.log('token', token)
    try {
      console.log('register')
      const res = await RegisterAdmin(form, token)
      console.log('res:', res)
      if (res.status === 200) {
        toast.success('Usuario registrado')

        console.log('bien')
        push('/')
      } else {
        toast.error('Error al registrar usuario')
      }
    } catch (error) {
      console.log('error:', error)
      setLoading(false)
      toast.error('Error al registrar usuario')
    } finally {
      setLoading(false)
    }
  }

  console.log('SignUpForm')
  console.log('loading', loading)

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='
            p-4
            md:border
            md:rounded-md
            md:p-10
            md:shadow-xl
        '
    >

      <section
        className='mb-9'
      >
        <LabeledInput
          label='Nombre'
          type='text'
          placeholder='Nombre'
          required
          name='name'
        />

        <LabeledInput
          label='Domicilio'
          type='text'
          placeholder='Domicilio'
          required
          name='domicilio'
        />

        <LabeledInput
          label='Telefono'
          type='text'
          placeholder='Telefono'
          required
          name='telefono'
        />

        <LabeledInput
          label='Empresa'
          type='text'
          placeholder='Empresa'
          required
          name='empresa'
        />

        <LabeledInput
          label='Correo electrónico'
          type='email'
          placeholder='Correo electrónico'
          required
          name='email'
        />

        <LabeledInput
          label='Contraseña'
          type='password'
          placeholder='Contraseña'
          required
          name='password'
        />

        <LabeledInput
          label='Token'
          type='number'
          placeholder='Token'
          required
          name='token'
        />

      </section>
      <footer className='flex flex-col items-center justify-center gap-1'>
        {loading
          ? (
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
              disabled={loading}
            >
              <LoadingSVG className='w-6 h-6 items-center justify-center' />
            </button>
            )
          : (
            <>
              <Toaster />
              <Button
                className='w-full bg-green-500 hover:bg-green-600 text-white'
                type='submit'
                disabled={loading}
              >
                Register
              </Button>
            </>
            )}
      </footer>
    </motion.form>
  )
}
