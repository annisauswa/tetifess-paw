import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Post = ({ title, content, user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const postStyle = {
        border: '1px solid #04c700',
        borderRadius: 12,
        padding: '10px',
        marginBottom: '10px', // Increase marginBottom to create space
        backgroundColor: isOpen ? '#d9d9d9' : '#fff',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column', // Display elements in a column layout
        alignItems: 'flex-start', // Align items to the start of the column
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
        marginTop: '10px', // Add space between user info and content
        display: isOpen ? 'block' : 'none', // Conditionally show content
    };

    return (
        <div style={postStyle} onClick={() => setIsOpen(!isOpen)}>
            <img src={user.avatar} alt="User Avatar" style={avatarStyle} />
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
