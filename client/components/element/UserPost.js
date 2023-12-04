import React from 'react';

const UserPost = ({ data}) => {
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
        fontSize: '12px',
        color: '#888',
        marginBottom: '5px',
    };

    const likesStyle = {
        fontSize: '12px',
        color: '#888',
    };

    return (
        <div style={dataBoxStyle}>
            <span style={timestampStyle}>{data.timestamp}</span>
            <p>{data.text}</p>
            <span style={likesStyle}>Likes: {data.likes_count}</span>
        </div>
    );
};

export default UserPost;
