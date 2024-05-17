import React from 'react'
import { WorkerModifyForm } from './components/modify'
import { DashBoard } from '@/components/component/dash-board'
import { Back } from '../components/back'

export default function ModifyWorker () {
  return (
    <DashBoard>
      <main className='h-dvh gap-6 md:flex md:justify-center md:items-center'>
        <div>
          <h1 className='text-3xl font-bold'>Modificacion de Trabajadores</h1>
          <span className='text-sm text-gray-500'>Regresar a seccion de trabajadores</span>
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
          <WorkerModifyForm />
        </section>

      </main>

    </DashBoard>
  )
}
