'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Login from '@/app/login/API/login'

export const LoginForm = () => {
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget as HTMLFormElement)
    const email = form.get('email') as string
    const password = form.get('password') as string
    const { rawResponse } = await Login(
      email,
      password
    )
    try {
      console.log('Login')

      console.log('Response', rawResponse)

      if ((Number(rawResponse.status) === 200) && ((rawResponse.statusText).toString()) === 'OK') {
        console.log('Login successful')
        // Redirect to some other page
        push('/worker')
      } else {
        // Handle other status codes or errors
        console.error('Login failed')
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  console.log('Login')

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Card className='mx-auto w-[400px]'>
        <CardHeader className='p-6'>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>Enter your credentials below</CardDescription>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <Label htmlFor='username'>Email address</Label>
              <Input id='username' placeholder='m@example.com' />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' />
            </div>
            <Button className='w-full bg-green-500 hover:bg-green-600 text-white'>Login</Button>
          </div>
        </CardContent>
        <CardFooter className='p-6 border-t'>
          <div className='text-center text-sm text-gray-500'>
            Don't have an account?
            <Link className='text-green-500 hover:underline' href='/register'>
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}
