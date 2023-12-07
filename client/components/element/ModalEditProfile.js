import axios from 'axios'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { RiCloseFill } from 'react-icons/ri'
import { toast } from 'react-toastify'

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
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          withCredentials: true,
        },
      )
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

  useEffect(() => {}, [name, bio, username])

  if (show === false) return null

  return ReactDOM.createPortal(
    <div
      id="wrapper"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 text-black backdrop-blur-sm"
    >
      <div className="w-[500px]">
        <div className="space-y-3 rounded-xl bg-secondary p-2 px-5">
          <div className="flex justify-between">
            <p className="font-leckerli-one text-xl font-bold">Edit Profile</p>
            <button onClick={() => setShow(false)} className="px-2 text-4xl">
              <RiCloseFill />
            </button>
          </div>
          <div className="line" />
          <div className="h-24 w-24 rounded-full bg-gray-400" />
          <form className="flex flex-col">
            <label className="text-sm font-semibold">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="e.g."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-5 rounded-md border border-tertiery bg-transparent px-2 py-2 focus:outline-none focus:ring-main"
            />
            <label className="text-sm font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-5 rounded-md border border-tertiery bg-transparent px-2 py-2 focus:outline-none focus:ring-main"
            />
            <label className="text-sm font-semibold">Bio</label>
            <textarea
              id="bio"
              name="bio"
              placeholder="e.g.k"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mb-5 rounded-md border border-tertiery bg-transparent px-2 py-2 focus:outline-none focus:ring-main"
            />
          </form>
          <div className="line" />
          <div className="flex justify-end">
            <button
              onClick={() => handleEdit()}
              className="gap-2.5 rounded-[24px] bg-main px-[28px] py-[7px] text-[14px] font-bold   text-white hover:bg-white hover:text-main hover:ring-[2px] hover:ring-main"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
