
import { Button } from '@/components/ui/button'
import { CardContent, Card } from '@/components/ui/card'

export default function WorkerComponent () {
  return (
    <section className='grid gap-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white dark:bg-gray-800/80 rounded-lg shadow-md
    '
    >
      <div key='1' className='grid gap-4'>
        <Card>
          <CardContent className='flex items-center p-4'>
            <div className='flex items-center gap-4 text-sm'>
              <WorkflowIcon className='w-6 h-6' />
              <div className='grid gap-1.5'>
                <div className='font-semibold'>Tobach</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>Admin</div>
              </div>
            </div>
            <div className='ml-auto flex items-center gap-4 text-xs'>
              <div className='font-medium'>aj@example.com</div>
              <div className='font-medium'>123-456-7890</div>
              <div className='flex items-center gap-2'>
                <Button className='rounded-full bg-green-400/80' size='icon' variant='ghost'>
                  <FileEditIcon className='w-4 h-4' />
                  <span className='sr-only'>Edit</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='flex items-center justify-between '>
          <h2 className='text-lg font-semibold text-white '>Workers</h2>
          <Button
            className='bg-green-400/80

          ' size='sm' variant='secondary'
          >
            <PlusIcon className='w-4 h-4 mr-2 ' />
            Create new worker
          </Button>
        </div>
        <Card>
          <CardContent className='flex items-center p-4'>
            <div className='flex items-center gap-4 text-sm'>
              <WorkflowIcon className='w-6 h-6' />
              <div className='grid gap-1.5'>
                <div className='font-semibold'>Tobach</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>Worker</div>
              </div>
            </div>
            <div className='ml-auto flex items-center gap-4 text-xs'>
              <div className='font-medium'>bs@example.com</div>
              <div className='font-medium'>987-654-3210</div>
              <div className='flex items-center gap-2'>
                <Button className='rounded-full bg-green-400/80' size='icon' variant='ghost'>
                  <FileEditIcon className='w-4 h-4' />
                  <span className='sr-only'>Edit</span>
                </Button>
                <Button className='rounded-full bg-red-400/80' size='icon' variant='destructive'>
                  <TrashIcon className='w-4 h-4 ' />
                  <span className='sr-only'>Delete</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='flex items-center p-4'>
            <div className='flex items-center gap-4 text-sm'>
              <WorkflowIcon className='w-6 h-6' />
              <div className='grid gap-1.5'>
                <div className='font-semibold'>si</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>Worker</div>
              </div>
            </div>
            <div className='ml-auto flex items-center gap-4 text-xs'>
              <div className='font-medium'>cd@example.com</div>
              <div className='font-medium'>555-555-5555</div>
              <div className='flex items-center gap-2'>
                <Button className='rounded-full bg-green-400/80' size='icon' variant='ghost'>
                  <FileEditIcon className='w-4 h-4' />
                  <span className='sr-only'>Edit</span>
                </Button>
                <Button className='rounded-full bg-red-400/80' size='icon' variant='destructive'>
                  <TrashIcon className='w-4 h-4 ' />
                  <span className='sr-only'>Delete</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function FileEditIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5' />
      <polyline points='14 2 14 8 20 8' />
      <path d='M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z' />
    </svg>
  )
}

function PlusIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
      <path d='M12 5v14' />
    </svg>
  )
}

function TrashIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 6h18' />
      <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
      <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
    </svg>
  )
}

function WorkflowIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='8' height='8' x='3' y='3' rx='2' />
      <path d='M7 11v4a2 2 0 0 0 2 2h4' />
      <rect width='8' height='8' x='13' y='13' rx='2' />
    </svg>
  )
}
