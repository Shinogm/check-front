'use client'
import { Back } from '../worker/components/back'
import { AdminForm } from './admin/components/admin-form'

export default function AdminRegister () {
  return (
    <main className='h-dvh gap-6 md:flex md:justify-center md:items-center'>
      <div>
        <h1 className='text-3xl font-bold'>Registro de Administrador</h1>
        <span className='text-sm text-gray-500'>Regresar a iniciar sesion</span>
        <div className='
          items-center
          justify-center
          flex
          gap-2
          mt-2
          '
        >
          <Back url='/login'>Iniciar sesion</Back>
        </div>
      </div>
      <section className='md:w-1/2'>
        <AdminForm />
      </section>

    </main>
  )
}
