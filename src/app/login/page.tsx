'use client'
import GetPermsAll from '@/utils/api/api-calls'

export default function LoginPage (): JSX.Element {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const perm = await GetPermsAll()
    console.log('Form submitted', perm)
  }

  return (
    <form className='text-black' onSubmit={handleSubmit as React.FormEventHandler<HTMLFormElement>}>
      <label>
        Email
        <input type='text' />
      </label>
      <label>
        Password
        <input type='password' />
      </label>
      <button type='submit'>Log in</button>
    </form>
  )
}
