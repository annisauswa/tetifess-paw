'use client'
import { useEffect, useState } from 'react'
import Homepage from '../../components/pages/homepage/Homepage'
import Layout from '../../components/layout/Layout'
import Profiles from '../../components/element/Profile'
import Post from '../../components/element/Post'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Profile() {
  const router = useRouter()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const [post, setPost] = useState([])
  const [bar, setBar] = useState('post')

  const getPosts = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/posting/${user._id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setPost(response.data)
    } catch (error) {
      toast.error('Error load posts')
    }
  }

  useEffect(() => {
    getPosts()
    if (!localStorage.getItem('token')) {
      alert('You need to login first')
      router.push('/login')
    }
  }, [])

  return (
    <Layout title='tetifess - profile'>
      <main className='text-black'>
        <Profiles
          nama={user.name}
          username={user.username}
          bio={user.bio}
          joinDate={`Joined ${user.dateCreated}`}
        />
        <div className='flex justify-evenly text-sm md:text-md border-b-[1px] border-tertiery'>
          <button type='button' onClick={()=>setBar('post')} className={`py-3 w-full text-center ${bar ==='post' && 'font-semibold border-b-[3px] border-tertiery'}`}>Post</button>
          <button type='button' onClick={()=>setBar('liked')} className={`py-3 w-full text-center ${bar ==='liked' && 'font-semibold border-b-[3px] border-tertiery'}`}>Liked</button>
      </div>
      {bar==='post' ? (
        post.length===undefined ? (
        <div className='text-center py-[20px]'>No post created</div>
        ) : (
        post.map((item) => (
                <Post
                    postId={item._id}
                    nama={item.userId.name}
                    username={item.userId.username}
                    timestamp='1h'
                    content={item.text}
                    like={item.likes_count}
                />
            
            ))
        )
      ) :(
        user.likedPostings.length===0 ? (
          <div className='text-center py-[20px]'>No post liked</div>
        ):(
          user.likedPostings.map((item) => (
            <Post
                postId={item._id}
                nama={item.userId.name}
                username={item.userId.username}
                timestamp='1h'
                content={item.text}
                like={item.likes_count}
            />
        )))
      )}
        {/* {post.length===undefined ? (<div className='text-center py-[20px]'>No post created</div>) :
        post.map((item) => (
                <Post
                    postId={item._id}
                    nama={item.userId.name}
                    username={item.userId.username}
                    timestamp='1h'
                    content={item.text}
                    like={item.likes_count}
                />
            
            ))} */}
      </main>
    </Layout>
  )
}
