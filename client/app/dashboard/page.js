'use client'

import axios from 'axios';
import { useEffect,useState } from 'react';

import Post from '../../components/element/AdminPost';
import Layout from '../../components/layout/Layout';
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

function Homepage() {
  const router = useRouter()
  const [users, setUsers] = useState([])

  useEffect(() => {
    document.title = 'tetifess - admin dashboard'
    if (!localStorage.getItem('token')) {
      toast.error('You need to login first')
      router.push('/login')
    }

    if (localStorage.getItem('role') !== 'admin') {
      toast.info('You are not authorized to access this page')
      router.push('/home')
    }

    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        setUsers(response.data)
      } catch (error) {
        toast.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div style={{ width: '100%' }}>
        {users.map((user, index) => (
            <Post key={user.id} title={user.title} content={user.content} user={user.userDetails} posts={user.posts} />
        ))}
    </div>
  )
}

export default function dashboard() {
  const middleContainerStyle = {
    flexGrow: 1,
    display: 'flex',
    marginTop: 25,
    borderRadius: 12,
    justifyContent: 'center',
    border: '2px solid #04c700',
  }

  return (
    <Layout title='tetifess'>
        <main className='w-full h-screen text-black flex'>
            <section style={middleContainerStyle}>
          {}
          <Homepage />
        </section>
          </main>
      </Layout>
  )
}
