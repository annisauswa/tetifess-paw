'use client'
import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import Post from '../../components/element/AdminPost';

const Homepage = () => {
    const userPostsData = [
        { text: 'Tweet 1: Lorem ipsum dolor sit amet.' },
        { text: 'Tweet 2: Consectetur adipiscing elit.' },
        { text: 'Tweet 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ];
    const postsData = [
        { id: 1, title: 'Post Title 1', content: 'Detailed content for post 1...' },
        { id: 2, title: 'Post Title 2', content: 'Detailed content for post 2...' },
        { id: 3, title: 'Post Title 3', content: 'Detailed content for post 3...' },
        { id: 4 , title: 'Test', content: 'Map test' }
    ];
    const [user, setUser] = useState({
        avatar: 'user_avatar_url',
        name: 'John Doe',
        username: 'johndoe',
        bio: 'A passionate developer',
        joinDate: 'January 1, 2022',
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
                setUser(response.data)
                console.log(response.data[0])
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    console.log(user);

    return (
        <div style={{ width: '100%' }}>
            {postsData.map(post => (
                <Post key={post.id} title={post.title} content={post.content} user={user} posts ={userPostsData} />
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
                    {/* Content goes here */}
                    <Homepage />
                </section>
            </main>
        </Layout>
    );
}