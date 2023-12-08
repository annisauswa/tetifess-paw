import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Post } from '../../element/Post'
import LoadingPage from '../../element/LoadingPage'

export default function Homepage() {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posting`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      setPost(response.data)
      setIsLoading(false)
    } catch (error) {
      toast.error('Error loading posts', error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getPosts()
  }, [])

  return (
    <>
      {isLoading ? 
        <LoadingPage />:
        <div className="w-full">
          {post.map((item) => (
            <Post
              key={item._id}
              postData={item}
              postId={item._id}
              nama={item.userId.name}
              username={item.userId.username}
              timestamp={item.timestamp}
              content={item.text}
              like={item.likes_count}
              likeUserId={item.likes}
            />
          ))}
        </div>
      }
    </>
  )
}
