import React from 'react';

const UserPost = ({ data }) => {
    const dataBoxStyle = {
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: '8px',
        marginBottom: '8px',
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'relative',
        width: '100%', // Add this line to make it stretch horizontally
    };

    return (
        <div style={dataBoxStyle}>
            <p>{data.text}</p>
        </div>
    );
};

export default UserPost;
