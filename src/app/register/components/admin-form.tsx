import  RegisterAdmin  from '@/app/register/API/register'
import { LabeledInput } from '@/components/labeled-input'
import Link from 'next/link'

export default function AdminForm (): JSX.Element {


  return (
    <form
      
      className='
            p-4
            md:border
            md:rounded-md
            md:p-10
            md:shadow-xl
            dark:bg-gray-800
            dark:border-gray-700
            dark:text-white
        '
    >

      <section
        className='mb-9'
      >
        <LabeledInput
          label='Nombre'
          type='text'
          placeholder='Nombre'
          required
          name='name'
        />

        <LabeledInput
          label='Domicilio'
          type='text'
          placeholder='Domicilio'
          required
          name='domicilio'
        />

        <LabeledInput
          label='Telefono'
          type='text'
          placeholder='Telefono'
          required
          name='telefono'
        />

        <LabeledInput
          label='Horario'
          type='text'
          placeholder='Horario'
          required
          name='horario'
        />

        <LabeledInput
          label='Empresa'
          type='text'
          placeholder='Empresa'
          required
          name='empresa'
        />

        <LabeledInput
          label='Correo electrónico'
          type='email'
          placeholder='Correo electrónico'
          required
          name='email'
        />

        <LabeledInput
          label='Contraseña'
          type='password'
          placeholder='Contraseña'
          required
          name='password'
        />

        <LabeledInput
          label='Token'
          type='number'
          placeholder='Token'
          required
          name='token'
        />

        </section>
        <footer className='flex flex-col items-center justify-center gap-1'>
        <button
          className='
                bg-gradient-to-r
                from-red/90
                via-red/80
                via-80%
                to-red/90
                text-white
                w-full
                py-2
                rounded-md
                transition-opacity
                opacity-95
                hover:opacity-100
            '
          type='submit'
        >
            <span
                className='font-bold'
            >
                <Link href='/login'>
                Registrar
                </Link>
            </span>

        </button>
        </footer>
    </form>
  )}
