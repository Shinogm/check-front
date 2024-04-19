import './globals.css'

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en' className='h-dvh md:flex md:justify-center md:items-center'>
      <body>{children}</body>
    </html>
  )
}
