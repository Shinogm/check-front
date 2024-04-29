'use client'
import { motion } from 'framer-motion'
import { LabeledInput } from '@/components/labeled-input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import LoadingSVG from '@/app/register/admin/components/loading'
import RegisterWorker from '../API/register-worker'

export const WorkerForm = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    console.log('form', form)
    try {
      await RegisterWorker(form)
      console.log('register')
    } catch (error) {
      console.error(error)
      setLoading(false)
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

      <motion.section
        className='mb-9'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
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
          label='Hora de entrada'
          type='number'
          placeholder='Hora de entrada'
          required
          name='Hora de entrada'
        />

        <LabeledInput
          label='Hora de salida'
          type='number'
          placeholder='Hora de salida'
          required
          name='Hora de salida'
        />

        <LabeledInput
          label='Dias de trabajo'
          type='text'
          placeholder='Dias de trabajo'
          required
          name='Dias de trabajo'
        />
      </motion.section>
      <motion.footer
        className='flex flex-col items-center justify-center gap-1'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
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
            <Button
              className='w-full bg-green-500 hover:bg-green-600 text-white'
              type='submit'
              disabled={loading}
            >
              Register
            </Button>
            )}
      </motion.footer>

    </motion.form>
  )
}
