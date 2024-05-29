'use client'
import { motion } from 'framer-motion'
import { LabeledInput } from '@/components/labeled-input'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import LoadingSVG from '@/app/register/admin/components/loading'
import modifyWorker from '../API/modify'
import { z } from 'zod'
import GetEmail, { UserEmail } from '../API/get-email'
import { useRouter } from 'next/navigation'

export const querySchema = z.object({
  name: z.string(),
  domicilio: z.string(),
  telefono: z.string(),
  empresa: z.string(),
  email: z.string().email(),
  horario: z.string(),
  HoraDeEntrada: z.string(),
  HoraDeSalida: z.string(),
  DiasDeTrabajo: z.string()
})

export type queryType = z.infer<typeof querySchema>

export const WorkerModifyForm = () => {
  const [loading, setLoading] = useState(false)
  const [currentUrl, setCurrentUrl] = useState<string | null>(null)
  const [parsedQuery, setParsedQuery] = useState<queryType | null>(null)
  const [user, setUser] = useState<UserEmail | null>(null)
  console.log('WorkerModifyForm', user)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setCurrentUrl(window.location.search)

    try {
      const parsedQuery = querySchema.parse({
        name: urlParams.get('name') ?? '',
        domicilio: urlParams.get('domicilio') ?? '',
        telefono: urlParams.get('telefono') ?? '',
        empresa: urlParams.get('empresa') ?? '',
        email: urlParams.get('email') ?? '',
        horario: urlParams.get('horario') ?? '',
        HoraDeEntrada: urlParams.get('HoraDeEntrada') ?? '',
        HoraDeSalida: urlParams.get('HoraDeSalida') ?? '',
        DiasDeTrabajo: urlParams.get('DiasDeTrabajo') ?? ''

      })
      setParsedQuery(parsedQuery)
    } catch (error) {
      console.error('Error al analizar la cadena de consulta:', error)
    }
  }, [currentUrl])

  useEffect(() => {
    GetEmail(parsedQuery?.email ?? '').then((data) => {
      console.log('data:', data.user?.email)
      setUser({
        user: data.user,
        status: data.status
      })
    })
      .catch((error) => {
        console.log('error:', error)
      })
  }, [parsedQuery])

  console.log('getUser:', user)
  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)
    console.log('form', form)
    try {
      await modifyWorker(form, user?.user.id ?? 0)
      push('/worker/all-workers')
    } catch (error) {
      console.error(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }
  console.log('SignUpForm')
  console.log('loading', loading)

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='
            p-4
            md:border
            md:rounded-md
            md:p-10
            md:shadow-xl
        '
    >

      <motion.section
        className='mb-9'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <LabeledInput
          label='Nombre'
          type='text'
          placeholder='Nombre'
          name='name'
          defaultValue={parsedQuery?.name}
        />

        <LabeledInput
          label='Domicilio'
          type='text'
          placeholder='Domicilio'
          name='domicilio'
          defaultValue={user?.user.domicilio ?? parsedQuery?.domicilio}
        />

        <LabeledInput
          label='Telefono'
          type='text'
          placeholder='Telefono'
          name='telefono'
          defaultValue={user?.user.telefono}
        />

        <LabeledInput
          label='Empresa'
          type='text'
          placeholder='Empresa'
          name='empresa'
          defaultValue={user?.user.empresa}
        />

        <LabeledInput
          label='Correo electrónico'
          type='email'
          placeholder='Correo electrónico'
          required
          name='email'
          defaultValue={user?.user.email}
        />

        <span className='text-sm text-gray-500'>
          Tu horario anterior de trabajo es: {parsedQuery?.horario ?? 'No se ha asignado'}
        </span>

        <LabeledInput
          label='Hora de entrada'
          type='text'
          placeholder='Hora de entrada'
          name='horaEntrada'
        />

        <LabeledInput
          label='Hora de salida'
          type='text'
          placeholder='Hora de salida'
          name='horaSalida'
        />

        <LabeledInput
          label='Dias de trabajo'
          type='text'
          placeholder='Dias de trabajo'
          name='fechaSemana'
        />
      </motion.section>
      <motion.footer
        className='flex flex-col items-center justify-center gap-1'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {loading
          ? (
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
              disabled={loading}
            >
              <LoadingSVG className='w-6 h-6 items-center justify-center' />
            </button>
            )
          : (
            <Button
              className='w-full bg-green-500 hover:bg-green-600 text-white'
              type='submit'
              disabled={loading}
            >
              Register
            </Button>
            )}
      </motion.footer>

    </motion.form>
  )
}
