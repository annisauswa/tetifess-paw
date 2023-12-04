'use client'
import Homepage from '../../components/pages/homepage/Homepage'
import Layout from '../../components/layout/Layout'
import Profiles from '../../components/element/Profile'
import Post from '../../components/element/Post'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Profile() {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('You need to login first')
      router.push('/login')
    }
  }, [])
  
  // profile
  const namaProfile = 'ethan kuning';
  const usernameProfile = 'tahumerakyat'
  const bioProfile = 'info parfum yang wanginya dah lewat tapi orangnya ketinggalan';
  const joinDate = 'Joined October 2023'

  // post
  const timestamp = 'timestamp'
  const content = 'pengen makan ayam geprek'
  const like = 23

  const content2 = 'z'
  const like2 = 7

  return (
    <Layout title='tetifess'>
      <main className=' w-full h-screen text-black'>
        <Profiles
          nama={namaProfile}
          username={usernameProfile}
          bio={bioProfile}
          joinDate={joinDate}
        />
        <Post
          nama={namaProfile}
          username={usernameProfile}
          content={content}
          like={like}
          timestamp={timestamp}
        />

        <Post
          nama={namaProfile}
          username={usernameProfile}
          content={content2}
          like={like2}
          timestamp={timestamp}
        />
      </main>
    </Layout>
  )
}
