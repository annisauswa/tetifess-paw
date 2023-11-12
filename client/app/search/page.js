'use client'
import Homepage from '../../components/pages/homepage/Homepage'
import Layout from '../../components/layout/Layout'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Search() {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('You need to login first')
      router.push('/login')
    }
  }, [])
  return (
    <Layout title='tetifess'>
      <main className=' w-full h-screen text-black'>
        <Homepage />
      </main>
    </Layout>
  )
}
