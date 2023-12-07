import React, { useState } from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import ModalSettingPost from './SettingProfile';

const UserPost = ({ data}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dataBoxStyle = {
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: '8px',
        marginBottom: '8px',
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        width: '100%',
    };

    const timestampStyle = {
        fontSize: '1.4vh',
        color: '#888',
        marginBottom: '5px',
    };

    const textStyle = {
        fontSize: '1.7vh',
        color: '#000000',
    };

    const handleIconClick = () => {
        setIsModalOpen(!isModalOpen);
        console.log(isModalOpen)
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={dataBoxStyle} >
            <span style={timestampStyle}>{data.timestamp}</span>
            <p style={textStyle}>{data.text}</p>
            <span style={{ color: '#888', fontSize: '1.5vh' }}> Likes: {data.likes_count}</span>

            {isModalOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '30px',
                        zIndex: '9999',
                    }}
                >
                    <ModalSettingPost show={isModalOpen} onClick = {handleIconClick} item={data} />
                </div>
            )}

            {/* Icon to open the modal */}
            <IoEllipsisHorizontal
                style={{ position: 'absolute', top: '8px', right: '8px', cursor: 'pointer' }}
                onClick={handleIconClick}
            />
        </div>
    );
};

export default UserPost;
