'use client'
import { motion } from 'framer-motion'
import { Back } from './components/back'
import { WorkerForm } from './components/worker-form'

export default function AdminRegister () {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-dvh gap-6 md:flex md:justify-center md:items-center'
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold'
        >
          Registro de Trabajadores
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-sm text-gray-500'
        >
          Ingresa los datos necesarios
        </motion.span>
        <div
          className='
            items-center
            justify-center
            flex
            gap-2
            mt-2
            '
        >
          <Back url='/worker/all-workers'>Seccion de trabajadores</Back>
        </div>
      </div>
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='md:w-1/2'
      >
        <WorkerForm />
      </motion.section>
    </motion.main>
  )
}
