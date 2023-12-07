'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import Post from '../../components/element/Post'
import Profiles from '../../components/element/Profile'
import Layout from '../../components/layout/Layout'

export default function Profile() {
  const router = useRouter()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const [userData, setUserData] = useState({
    name: user.name,
    bio: user.bio,
    username: user.username,
  })
  const [post, setPost] = useState([])
  const [bar, setBar] = useState('post')
  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/posting/${user._id}`,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      setPost(response.data)
    } catch (error) {
      toast.error('Error load posts')
    }
  }

  const getUser = async () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setUserData({
          name: res.data.name,
          bio: res.data.bio,
          username: res.data.username,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUser()
    getPosts()
    if (!localStorage.getItem('token')) {
      alert('You need to login first')
      router.push('/login')
    }
  }, [])

  return (
    <Layout title="tetifess - profile">
      <main className="text-black">
        <Profiles
          nama={userData.name}
          username={userData.username}
          bio={userData.bio}
          joinDate={`Joined ${user.dateCreated}`}
        />
        <div className="md:text-md flex justify-evenly border-b-[1px] border-tertiery text-sm">
          <button
            type="button"
            onClick={() => setBar('post')}
            className={`w-full py-3 text-center hover:font-semibold ${
              bar === 'post' && 'border-b-[3px] border-tertiery font-semibold'
            }`}
          >
            Post
          </button>
          <button
            type="button"
            onClick={() => setBar('liked')}
            className={`w-full py-3 text-center hover:font-semibold ${
              bar === 'liked' && 'border-b-[3px] border-tertiery font-semibold'
            }`}
          >
            Liked
          </button>
        </div>
        {bar === 'post' ? (
          post.length === undefined ? (
            <div className="py-[20px] text-center">No post created</div>
          ) : (
            post.map((item) => (
              <Post
                postId={item._id}
                nama={item.userId.name}
                username={item.userId.username}
                timestamp="1h"
                content={item.text}
                like={item.likes_count}
              />
            ))
          )
        ) : user.likedPostings.length === 0 ? (
          <div className="py-[20px] text-center">No post liked</div>
        ) : (
          user.likedPostings.map((item) => (
            <Post
              postId={item._id}
              nama={item.userId.name}
              username={item.userId.username}
              timestamp="1h"
              content={item.text}
              like={item.likes_count}
            />
          ))
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
