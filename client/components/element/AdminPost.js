import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Image from 'next/image';

const avatarImage = require('../../public/assets/profilepicture.jpg');

const Post = ({ title, content, user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const postStyle = {
        border: '1px solid #04c700',
        borderRadius: 12,
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: isOpen ? '#d9d9d9' : '#fff',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
    };

    const userInfoStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',
    };

    const avatarStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const contentStyle = {
        marginTop: '10px',
        display: isOpen ? 'block' : 'none',
    };

    return (
        <div style={postStyle} onClick={() => setIsOpen(!isOpen)}>
            <Image
                src={avatarImage}
                layout="fixed"
                width={40}
                height={40}
                alt="User Avatar"
                style={avatarStyle}
            />
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span>{user.name}</span>
                    <span style={{ marginLeft: '10px', color: '#888' }}>{user.username}</span>
                </div>
                <div>{user.bio}</div>
                <div style={{ color: '#888' }}>Joined: {user.joinDate}</div>
            </div>
            <RiArrowDropDownLine />
            <div style={contentStyle}>{content}</div>
        </div>
    );
};

export default Post;