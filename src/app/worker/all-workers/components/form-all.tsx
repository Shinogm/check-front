'use server'
import GetAdmins from '@/app/register/admin/API/get-admis'
import { Admin, Worker } from '@/components/component/worker-component'
import { PlusIcon } from 'lucide-react'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export default async function WorkersAllC () {
  revalidatePath('/worker')
  const workers = await GetAdmins(2)

  console.log(workers)

  const admin = await GetAdmins(1)

  console.log(admin)

  return (

    <main>
      <section className='grid gap-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white  rounded-lg shadow-md'>
        {admin.length > 0
          ? admin.map((admin) => (
            <Admin
              key={admin.id}
              id={admin.id}
              email={admin.email}
              name={admin.name}
              phone={admin.telefono}
              role={admin.permission}
              horario={admin.horario ?? 'Este usuario es un administrador'}
            />
          ))
          : (
            <div className='text-center text-gray-400'>No admins found</div>
            )}

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

        <div className='
        grid
        gap-6
        p-4
        sm:p-6
        '
        >

          {workers.length > 0
            ? workers.map((worker) => (
              <Worker
                key={worker.id}
                id={worker.id}
                email={worker.email}
                name={worker.name}
                phone={worker.telefono}
                role={worker.permission}
                horario={worker.horario ?? 'Este trabajador no tiene horario asignado'}
              />
            ))
            : (
              <div className='text-center text-gray-400'>No workers found</div>
              )}
        </div>

      </section>
    </main>
  )
}
