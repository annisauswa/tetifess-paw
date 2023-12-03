import React from 'react';

const UserPost = ({ data, timestamp, likes }) => {
    const dataBoxStyle = {
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: '8px',
        marginBottom: '8px',
        backgroundColor: '#fff',
        flexDirection: 'column', // Change to column to display likes below text
        alignItems: 'flex-start',
        position: 'relative',
        width: '100%',
    };

    const timestampStyle = {
        fontSize: '12px',
        color: '#888',
        marginBottom: '5px', // Add margin to separate timestamp from text
    };

    const likesStyle = {
        fontSize: '12px',
        color: '#888',
    };

    return (
        <div style={dataBoxStyle}>
            <span style={timestampStyle}>{timestamp}</span>
            <p>{data.text}</p>
            <span style={likesStyle}>Likes: {likes}</span>
        </div>
    );
};

export default UserPost;
