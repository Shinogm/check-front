'use client'
import { Back } from './components/back'
import { WorkerForm } from './components/worker-form'

export default function AdminRegister () {
  return (
    <main className='h-dvh gap-6 md:flex md:justify-center md:items-center'>
      <div>
        <h1 className='text-3xl font-bold'>Registro de Trabajadores</h1>
        <span className='text-sm text-gray-500'>Ingreesa los datos necesarios </span>
        <div className='
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
      <section className='md:w-1/2'>
        <WorkerForm />
      </section>

    </main>
  )
}
