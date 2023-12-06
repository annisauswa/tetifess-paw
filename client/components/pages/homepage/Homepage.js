import { Post } from '../../element/Post';
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Homepage(){
    const [post, setPost] = useState([])
    const getPosts = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posting`, {
              // withCredentials: true,
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            })
            setPost(response.data);
          } catch (error) {
            console.error('Error fetching posts:', error)
          }
      }
    
      console.log(post)

      useEffect(() => {
        getPosts()
      }, [])

    return (
        <div className='w-full'>
            {post.map((item) => (
                <Post
                    postId={item._id}
                    nama={item.userId.name}
                    username={item.userId.username}
                    timestamp='1h'
                    content={item.text}
                    like={item.likes_count}
                />
            
            ))}
        </div>
    )
}