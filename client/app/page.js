'use client'

import 'react-toastify/dist/ReactToastify.css'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import Layout from '../components/layout/Layout'
import Homepage from '../components/pages/homepage/Homepage'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      if (!toast.isActive('loginError')) {
        toast.error('You need to login first', { autoClose: 3000, toastId: 'loginError' })
      }
      setTimeout(() => {
        router.push('/login')
      }, 3000)
    }
  }, [])

  return (
    <Layout title="tetifess">
      <ToastContainer />
      <main className=" h-screen w-full text-black">
        <Homepage />
      </main>
    </Layout>
  )
}
