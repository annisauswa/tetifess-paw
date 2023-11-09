import Link from 'next/link'
import { Button } from '../components/element/Button'
import Sidebar from '../components/layout/Sidebar'

export default function Home() {
  return (
     <main className='bg-white w-full h-screen text-black'>
      <Sidebar />
      <Link href='./dashboard'>
        dashboard
        <Button size="sm" text="dashboard"/>
        </Link>
    </main>
  )
}
