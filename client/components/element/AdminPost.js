import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiSettings3Line } from 'react-icons/ri';
import Image from 'next/image';
import UserPost from './UserPost';

const avatarImage = require('../../public/assets/profilepicture.png');

const Post = ({ title, content, user, posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
        width: '100%',
    };

    const togglePost = () => {
        setIsOpen(!isOpen);
    };

    const iconsContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 'auto',
    };

    const iconStyle = {
        fontSize: '20px',
        marginRight: '10px',
        cursor: 'pointer',
    };

    const handleGearIconClick = (e) => {
        e.stopPropagation();
        setIsSettingsOpen(!isSettingsOpen);
    };

    const greenLineStyle = {
        backgroundColor: '#04c700',
        height: '2px',
        width: '80%',
        position: 'absolute',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: isOpen ? 'block' : 'none',
    };

    return (
        <div style={postStyle} onClick={togglePost}>
            <div style={userInfoStyle}>
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
            </div>
            <div style={iconsContainerStyle}>
                {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                <RiSettings3Line style={iconStyle} onClick={handleGearIconClick} />
            </div>
            {isSettingsOpen && (
                <div>
                    {}
                </div>
            )}
            <div style={contentStyle}>
                {posts.map((data, index) => (
                    <UserPost key={index} data={data} timestamp={'12:34 PM'} likes={20} />
                ))}
            </div>
            <div style={greenLineStyle}></div>
        </div>
    );
};

export default Post;
