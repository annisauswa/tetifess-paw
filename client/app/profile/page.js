'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import Post from '../../components/element/Post'
import Profiles from '../../components/element/Profile'
import Layout from '../../components/layout/Layout'
import LoadingPage from '../../components/element/LoadingPage'

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  let token = ''
  let user = ''

  useEffect(() => {
    token = localStorage.getItem('token')
    user = JSON.parse(localStorage.getItem('user'))
  }, [])

  const [userData, setUserData] = useState({
    id: user._id,
    name: user.name,
    bio: user.bio,
    username: user.username,
    likedPostings: user.likedPostings,
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
        setUserData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        toast.error(err)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    getPosts()
    getUser()
    if (!localStorage.getItem('token')) {
      alert('You need to login first')
      router.push('/login')
    }
  }, [])

  return (
    <Layout title="tetifess - profile">
      {isLoading? 
        <LoadingPage/>
        :
        <main className="text-black">
          <Profiles
            nama={userData.name}
            username={userData.username}
            bio={userData.bio}
            joinDate={`Joined ${new Date(userData.dateCreated).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}`}
          />
          <div className="md:text-md flex justify-evenly border-b-[1px] border-tertiery text-sm">
            <button
              type="button"
              onClick={() => {
                setBar('post')
                getPosts()
              }}
              className={`w-full py-3 text-center hover:font-semibold ${
                bar === 'post' && 'border-b-[3px] border-tertiery font-semibold'
              }`}
            >
              Post
            </button>
            <button
              type="button"
              onClick={() => {
                setBar('liked')
                getUser()
              }}
              className={`w-full py-3 text-center hover:font-semibold ${
                bar === 'liked' && 'border-b-[3px] border-tertiery font-semibold'
              }`}
            >
              Liked
            </button>
          </div>
          {bar === 'post' ? (
            post.length === undefined || 0 ? (
              <div className="py-[20px] text-center">No post created</div>
            ) : (
              post.map((item) => (
                <Post
                  key={item._id}
                  postId={item._id}
                  nama={item.userId.name}
                  username={item.userId.username}
                  timestamp={item.timestamp}
                  content={item.text}
                  like={item.likes_count}
                  likeUserId={item.likes}
                  postData={item}
                />
              ))
            )
          ) : null}
          {bar === 'liked' ? (
            userData.likedPostings.length === undefined || 0 ? (
              <div className="py-[20px] text-center">No post liked</div>
            ) : (
              userData.likedPostings.map((item) => (
                <Post
                  liked
                  key={item._id}
                  postId={item._id}
                  nama={item.userId.name}
                  username={item.userId.username}
                  timestamp={item.timestamp}
                  content={item.text}
                  like={item.likes_count}
                  likeUserId={item.likes}
                  postData={item}
                />
              ))
            )
          ) : null}
        </main>
      }
    </Layout>
  )
}
