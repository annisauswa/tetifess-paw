'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Button from '../../components/element/Button'
import Post from '../../components/element/Post'
import Profile from '../../components/element/Profile'
import SearchInput from '../../components/element/SearchInput'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-toastify'

export default function Search() {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('You need to login first')
      router.push('/login')
    }
  }, [])

  const [searchPostValue, setSearchPostValue] = useState('')
  const [searchUserValue, setSearchUserValue] = useState('')
  const [notFound, setNotFound] = useState(false)
  const [post, setPost] = useState([])
  const [user, setUser] = useState([])

  const handleSearch = async () => {
    setNotFound(false)
    setPost([])
    setUser([])

    try {
      const token = localStorage.getItem('token')
      let apiEndpoint

      if (searchPostValue) {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/posting/search?param=${searchPostValue}&username=${searchUserValue}`
      } else if (searchUserValue) {
        apiEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/user/search?param=${searchUserValue}`
      } else {
        return
      }

      const response = await axios.get(apiEndpoint, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      const { data } = response

      if (searchPostValue) {
        setPost(response.data)
      } else if (searchUserValue) {
        setUser(response.data)
      }
    } catch (error) {
      toast.error(error)
      setNotFound(true)
    }
  }

  return (
    <Layout title="tetifess - search">
      <main className="h-screen w-full text-black">
        <div className="mt-5 flex flex-col justify-center px-[14px] md:flex-row">
          <SearchInput
            label="Search post"
            id="searchPostInput"
            placeholder="Enter keyword"
            setValue={setSearchPostValue}
            value={searchPostValue}
          />
          <div className="mx-4" />
          <SearchInput
            label="Search user"
            id="searchUserInput"
            placeholder="Enter keyword"
            setValue={setSearchUserValue}
            value={searchUserValue}
          />
        </div>
        <div className="flex justify-end pr-[14px]">
          <Button size="sm" text="Search" onClick={handleSearch} width="px-[10px] flex md:hidden" />
          <Button size="md" text="Search" onClick={handleSearch} width="px-[16px] hidden md:flex" />
        </div>
        <hr className="mt-5 border-t border-tertiery" />
        {notFound && (
          <p className="mt-5 text-center font-roboto text-gray-700">
            Your keyword doesn't bring any result. Try changing your keyword.
          </p>
        )}
        {post && (
          <div>
            {post.map((item) => (
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
            ))}
          </div>
        )}
        {user && (
          <div>
            {user.map((item) => (
              <Profile nama={item.name} username={item.username} bio={item.bio} />
            ))}
          </div>
        )}
      </main>
    </Layout>
  )
}
