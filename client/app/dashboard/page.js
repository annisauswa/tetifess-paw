'use client'
import { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import Post from '../../components/element/AdminPost';

const Homepage = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin`, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div style={{ width: '100%' }}>
            {users.map((user, index) => (
                <Post key={user.id} title={user.title} content={user.content} user={user.userDetails} posts={user.posts} />
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