import axios from 'axios'
import { useEffect, useState } from 'react'

import { Post } from '../../element/Post'
import { toast } from 'react-toastify'

export default function Homepage() {
  const [post, setPost] = useState([])
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
    } catch (error) {
      toast.error('Error load posts', error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="w-full">
      {post.map((item) => (
        <Post
          key={item._id}
          postData={item}
          postId={item._id}
          nama={item.userId.name}
          username={item.userId.username}
          timestamp="1h"
          content={item.text}
          like={item.likes_count}
          likeUserId={item.likes}
        />
      ))}
    </div>
  )
}
