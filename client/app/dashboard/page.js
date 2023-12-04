'use client'
import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import Post from '../../components/element/AdminPost';

const Homepage = () => {
    
    let [postsData, setPosts] = useState([
        {text: 'Post Title 1', dateCreated: 'January 1, 2022', likes: 21},
        {text: 'Post Title 2', dateCreated: 'January 1, 2022', likes: 21},
        {text: 'Post Title 3', dateCreated: 'January 1, 2022', likes: 21},
        {text: 'Test', dateCreated: 'January 1, 2022', likes: 21}
    ]);

    const [user, setUser] = useState({
        avatar: 'user_avatar_url',
        name: 'John Doe',
        username: 'johndoe',
        bio: 'A passionate developer',
        dateCreated: 'January 1, 2022',
    });

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setUser(response.data[0].userDetails)
                setPosts(response.data[0].posts)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div style={{ width: '100%' }}>
            {postsData.map(post => (
                <Post key={post.id} title={post.title} content={post.content} user={user} posts ={postsData} />
            ))}
        </div>
    );
};

export default function dashboard() {
    const middleContainerStyle = {
        flexGrow: 1,
        display: 'flex',
        marginTop: 25,
        borderRadius: 12,
        justifyContent: 'center',
        border: '2px solid #04c700',
    };

    return (
        <Layout title='tetifess'>
            <main className='w-full h-screen text-black flex'>
                <section style={middleContainerStyle}>
                    {}
                    <Homepage />
                </section>
            </main>
        </Layout>
    );
}