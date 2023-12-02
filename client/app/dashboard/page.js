'use client'
import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Post = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const postStyle = {
        border: '1px solid #04c700',
        borderRadius: 12,
        padding: '10px',
        marginBottom: '0px',
        backgroundColor: isOpen ? '#d9d9d9' : '#fff',
        cursor: 'pointer',
    };
    const titleStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
    };

    return (
        <div style={postStyle} onClick={() => setIsOpen(!isOpen)}>
            <div style={titleStyle}>
                <span>{title}</span>
                <RiArrowDropDownLine /> 
            </div>
            {isOpen && <div style={{ marginTop: '10px' }}>{content}</div>}
        </div>
    );
};

const Homepage = () => {
    const postsData = [
        { id: 1, title: 'Post Title 1', content: 'Detailed content for post 1...' },
        { id: 2, title: 'Post Title 2', content: 'Detailed content for post 2...' },
        { id: 3, title: 'Post Title 3', content: 'Detailed content for post 3...' }
    ];

    return (
        <div style={{ width: '100%' }}>
            {postsData.map(post => (
                <Post key={post.id} title={post.title} content={post.content} />
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
    )
}