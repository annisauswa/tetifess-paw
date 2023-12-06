import React, { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiSettings3Line } from 'react-icons/ri';
import Image from 'next/image';
import UserPost from './UserPost';
import ModalEditProfile from './ModalEditProfile';

const avatarImage = require('../../public/assets/profilepicture.png');

const Post = ({ title, content, user, posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false); // State to manage the Edit Profile modal

    const postStyle = {
        border: '1px solid #04c700',
        borderRadius: 12,
        padding: '10px',
        marginBottom: '5px',
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

    const openEditProfileModal = () => {
        setIsEditProfileModalOpen(true);
    };

    const togglePost = () => {
        if (!isEditProfileModalOpen) { 
            setIsOpen(!isOpen);
        }
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
                        <span style={{fontSize:'1.7vh' }}>{user.name}</span>
                        <span style={{ marginLeft: '1.0vw', color: '#888', fontSize:'1.5vh' }}>{user.username}</span>
                    </div>
                    <div style={{fontSize:'1.5vh' }}> {user.bio}</div>
                    <div style={{ color: '#888', fontSize:'1.3vh' }}>Joined: {user.dateCreated}</div>
                </div>
            </div>
            <div style={iconsContainerStyle}>
                {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                <RiSettings3Line style={iconStyle} onClick={openEditProfileModal} />
            </div>
            {isSettingsOpen && (
                <div>
                    {}
                </div>
            )}
            <div style={contentStyle}>
                {posts.map((data, index) => (
                    <UserPost key={index} data={data}/>
                ))}
            </div>
            <div style={greenLineStyle}></div>
            {isEditProfileModalOpen && (
                <ModalEditProfile
                    show={isEditProfileModalOpen}
                    setShow={setIsEditProfileModalOpen}
                    data={user}
                />
            )}
        </div>
    );
};

export default Post;
