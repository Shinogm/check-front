'use client'

import GetAdmins from '@/app/register/admin/API/get-admis'
import { DashBoard } from '@/components/component/dash-board'
import WorkerComponent from '@/components/component/worker-component'

export default function Workers () {
  const workers = GetAdmins(1).then((data) => {
    console.log(data)
  }).catch((error) => {
    console.error('Error:', error)
  })
  console.log(workers.catch((error) => {
    console.error('Error:', error)
  }))

  return (
    <DashBoard>
      <main>
        <WorkerComponent />
      </main>
    </DashBoard>
  )
}
