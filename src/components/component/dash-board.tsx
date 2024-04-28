"use client"
import Link from 'next/link'
import { motion } from 'framer-motion';
import { EyeIcon, MountainIcon } from 'lucide-react';

interface DashBoardProps {
  children: React.ReactNode
}
export function DashBoard({ children }: DashBoardProps) {
  return (
    <motion.div
      key='1'
      className='flex min-h-screen flex-col'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className='flex h-16 items-center justify-between border-b bg-gray-50 px-6'>
        <motion.div
          className='flex items-center gap-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link className='flex items-center gap-2' href='#'>
            <MountainIcon className='h-6 w-6' />
            <span>De La Tobach Dashboard</span>
          </Link>
        </motion.div>
        <nav className='flex items-center gap-4'>
          <Link
            className='rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 '
            href='#'
          >
            Api Docs
          </Link>
          <Link
            className='rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 '
            href='#'
          >
            Workers
          </Link>
          <Link
            className='rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 '
            href='#'
          >
            Cerrar Sesion
          </Link>
        </nav>
      </header>
      <div className='flex flex-1'>
        <aside className='hidden w-64 flex-col border-r bg-gray-50 p-6 lg:flex'>
          <motion.div
            className='space-y-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              className='flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 white:hover:bg-white/90 dark:focus-visible:ring-gray-600'
              href='http://localhost:3001/docs#/'
            >
              <UserIcon className='h-5 w-5' />
              Api Docs
            </Link>
            <Link
              className='flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 white:hover:bg-white/90 dark:focus-visible:ring-gray-600'
              href='#'
            >
              <UsersIcon className='h-5 w-5' />
              Workers
            </Link>
            <Link
              className='flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 white:hover:bg-white/90 dark:focus-visible:ring-gray-600'
              href='#'
            >
              <EyeIcon className='h-5 w-5' />
              Detect
            </Link>
          </motion.div>
        </aside>

        <motion.main
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          {children}
        </motion.main>
      </div>
    </motion.div>
  );
}


function UserIcon (props: React.SVGProps<SVGSVGElement>) { // Add explicit type for 'props'
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
      <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
      <circle cx='12' cy='7' r='4' />
    </svg>
  )
}

function UsersIcon (props) {
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
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
      <circle cx='9' cy='7' r='4' />
      <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
      <path d='M16 3.13a4 4 0 0 1 0 7.75' />
    </svg>
  )
}
