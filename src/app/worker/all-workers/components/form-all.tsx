'use server'
import GetAdmins from '@/app/register/admin/API/get-admis'
import { Worker } from '@/components/component/worker-component'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export default async function allWorkersAllC () {
  const allWorkers = await GetAdmins(2)
  return (

    <main>
      <section className='grid gap-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white  rounded-lg shadow-md
      '
      >
        <Worker
          email='example@email.com'
          name='Tobach'
          phone='123456789'
          role='Admin'
          horario=''
        />

        <div className='flex items-center justify-between '>
          <h2 className='text-lg font-semibold text-white '>allWorkers</h2>
          <Link
            href='/worker'
            className='bg-green-400/80 rounded-md flex px-2 justify-center items-center font-semibold py-1 text-white transition-colors hover:bg-green-400/60 focus:bg-green-400/60 focus:outline-none disabled:pointer-events-none disabled:opacity-50 '
          >
            <PlusIcon className='w-4 h-4 mr-2 ' />
            Create new worker
          </Link>
        </div>

        {
          allWorkers.map((worker: { email: string, name: string, telefono: string, permission: string, id: number, horario: string }) => (
            <Worker
              email={worker.email}
              name={worker.name}
              phone={worker.telefono}
              role={worker.permission}
              key={worker.id.toString()}
              horario={worker.horario}
            />
          ))
        }

      </section>
    </main>
  )
}
