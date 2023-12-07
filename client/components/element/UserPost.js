import React from 'react'

function UserPost({ data }) {
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
  }

  const timestampStyle = {
    fontSize: '1.4vh',
    color: '#888',
    marginBottom: '5px',
  }

  const textStyle = {
    fontSize: '1.7vh',
    color: '#000000',
  }

  return (
    <div style={dataBoxStyle}>
      <span style={timestampStyle}>{data.timestamp}</span>
      <p style={textStyle}>{data.text}</p>
      <span style={{ color: '#888', fontSize: '1.5vh' }}> Likes: {data.likes_count}</span>
    </div>
  )
}

export default UserPost
