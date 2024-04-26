
import GetAdmins from '@/app/register/admin/API/get-admis'
import { DashBoard } from '@/components/component/dash-board'
import { Worker } from '@/components/component/worker-component'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

export default async function Workers () {
  const workers = await GetAdmins(1)

  console.log(workers)

  return (
    <DashBoard>
      <main>
        <section className='grid gap-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white dark:bg-gray-800/80 rounded-lg shadow-md
    '
        >
          <Worker
            email='example@email.com'
            name='Tobach'
            phone='123456789'
            role='Worker'
          />
          <div className='flex items-center justify-between '>
            <h2 className='text-lg font-semibold text-white '>Workers</h2>
            <Link
              href='/register'
              className='bg-green-400/80 rounded-md flex px-2 justify-center items-center font-semibold py-1 text-white transition-colors hover:bg-green-400/60 focus:bg-green-400/60 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-green-400/60 dark:focus:bg-green-400/60 dark:hover:text-gray-50 dark:focus:text-gray-50 dark:focus:outline-none dark:disabled:pointer-events-none dark:disabled:opacity-50'
            >
              <PlusIcon className='w-4 h-4 mr-2 ' />
              Create new worker
            </Link>
          </div>

          {
            workers.map((worker) => (
              <Worker
                email={worker.email}
                name={worker.name}
                phone={worker.telefono}
                role={worker.permission}
                key={worker.id}
              />
            ))
          }

        </section>
      </main>
    </DashBoard>
  )
}
