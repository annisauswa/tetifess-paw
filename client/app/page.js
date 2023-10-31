import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-white w-full h-full'>TETIFESS
      <Link href='./dashboard' className='hover:text-blue text-black'>dashboard</Link>
    </main>
    
  )
}
