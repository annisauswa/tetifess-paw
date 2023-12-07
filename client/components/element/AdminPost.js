import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiSettings3Line } from 'react-icons/ri';
import { BsFillShieldFill, BsShield } from "react-icons/bs";
import Image from 'next/image';
import UserPost from './UserPost';
import ModalEditProfile from './ModalEditProfile';
import axios from 'axios';
import { toast } from 'react-toastify'
const avatarImage = require('../../public/assets/profilepicture.png');

const Post = ({ title, content, user, posts }) => {
    const role = localStorage.getItem('role')
    const [name, setName] = useState(user.name)
    const [bio, setBio] = useState(user.bio)
    const [username, setUsername] = useState(user.username)
    const [isOpen, setIsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(user.role==='admin'? false:true);
    console.log(user)
    const toggleAdminStatus = async () => {
        try {
            let url
            if (isAdmin){
                url = `${process.env.NEXT_PUBLIC_API_URL}/admin/take/${user._id}`
            }
            else {
                url = `${process.env.NEXT_PUBLIC_API_URL}/admin/give/${user._id}`
            }
            
            await axios.patch(url,{
                name, username, bio},
                {
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  },
                  withCredentials: true
                })

            setIsAdmin(!isAdmin);
            toast.success('Successfully changed admin status');
        } catch (error) {
            console.error('Error toggling admin status:', error);
            toast.error('Failed to changed admin status');
        }
    };

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
        transition: 'background-color 0.3s ease',
    }

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
        //position: 'absolute',
        top: '100px',
        left: '50%',
        transform: 'flex',
        display: isOpen ? 'block' : 'none',
    };
    const adminIcon = isAdmin ? (
        <BsFillShieldFill
            style={iconStyle}
            onClick={toggleAdminStatus}
            title="Toggle Admin status"
        />
    ) : (
        <BsShield
            style={iconStyle}
            onClick={toggleAdminStatus}
            title="Toggle Admin status"
        />
    );



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
                {isOpen ? <RiArrowDropUpLine size={30}/> : <RiArrowDropDownLine size={30}/>}
                {adminIcon}
                <RiSettings3Line
                style={iconStyle}
                onClick={openEditProfileModal}
                title="Edit Profile"
                />
            </div>
            <div style={greenLineStyle}></div>
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
