'use client'
import Homepage from '../components/pages/homepage/Homepage'
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const router = useRouter()
  useEffect(() => {
      if (!localStorage.getItem('token')) {
          if (!toast.isActive('loginError')) {
              toast.error('You need to login first', { autoClose: 3000, toastId: 'loginError' });
          }
          setTimeout(() => {
              router.push('/login');
          }, 3000);
      }
  }, [])


return (
  <Layout title='tetifess'>
      <ToastContainer />
      <main className=' w-full h-screen text-black'>
          <Homepage />
      </main>
  </Layout>
)

}
