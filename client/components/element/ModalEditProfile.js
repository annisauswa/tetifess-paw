import { useEffect, useState } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import ReactDOM from 'react-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function ModalEditProfile({ show, setShow, data }) {
  const role = localStorage.getItem('role')
  const [name, setName] = useState(data.name)
  const [bio, setBio] = useState(data.bio)
  const [username, setUsername] = useState(data.username)

  const handleEdit = () => {
    let url
    if (role === 'admin'){
      url = `${process.env.NEXT_PUBLIC_API_URL}/admin/${data._id}`
    }
    else{
      url = `${process.env.NEXT_PUBLIC_API_URL}/user/edit`
    }
    axios.patch(url,{
      name, username, bio},
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true
      })
      .then(() => {
        toast.success('Profile updated')
        setShow(false)
        window.location.reload()
      })
      .catch(() => {
        toast.error('Failed to update profile')
        setShow(false)
      })
  }

  useEffect(() => {
   
  },[name, bio, username])

  if (show===false) return null

  return ReactDOM.createPortal(
    (
    <div
      id='wrapper'
      className='fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center z-50 text-black'>
      <div className='w-[500px]'>
        <div className='bg-secondary p-2 rounded-xl space-y-3 px-5'>
          <div className='flex justify-between'>
            <p className='font-leckerli-one text-xl font-bold'>Edit Profile</p>
            <button
              onClick={() => setShow(false)}
              className='text-4xl px-2'>
                <RiCloseFill />
            </button>
          </div>
          <div className='line'></div>
          <div className='w-24 h-24 bg-gray-400 rounded-full'></div>
          <form className='flex flex-col'>
            <label className='text-sm font-semibold'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='e.g.'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='px-2 py-2 mb-5 bg-transparent border rounded-md border-tertiery focus:ring-main focus:outline-none'
            />
            <label className='text-sm font-semibold'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='e.g.'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='px-2 py-2 mb-5 bg-transparent border rounded-md border-tertiery focus:ring-main focus:outline-none'
            />
            <label className='text-sm font-semibold'>Bio</label>
            <textarea
              id='bio'
              name='bio'
              placeholder='e.g.k'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className='px-2 py-2 mb-5 bg-transparent border rounded-md border-tertiery focus:ring-main focus:outline-none'>
            </textarea>
          </form>
          <div className='line'></div>
          <div className='flex justify-end'>
            <button onClick={()=>handleEdit()} className={`bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-bold   rounded-[24px] text-[14px] px-[28px] py-[7px] gap-2.5`}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
  document.body
);
}
