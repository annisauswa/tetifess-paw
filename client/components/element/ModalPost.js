import axios from 'axios'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { RiCloseFill } from 'react-icons/ri'
import { toast } from 'react-toastify'

export default function ModalPost({ show, setShow, user, postData, edit=false }) {
  const [text, setText] = useState(edit ? postData.text : '')
  console.log(postData)
  if (show === false) return null
  const handleCreate = () => {
    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/posting/post`,
        {
          text,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          withCredentials: true,
        },
      )
      .then(() => {
        setShow(false)
        toast.success('Post created')
        window.location.reload()
      })
      .catch((err) => {
        setShow(false)
        toast.error(err)
      })
  }

  const handleEdit = () => {
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/posting/${postData._id}`,
        {
          text,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        },
      )
      .then(() => {
        setShow(false)
        toast.success('Post updated')
        window.location.reload()
      })
      .catch((err) => {
        setShow(false)
        toast.error(err)
      })
  }

  return ReactDOM.createPortal(
    <div
      id="wrapper"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 text-black backdrop-blur-sm"
    >
      <div className="w-full sm:w-[600px] p-8 sm:p-0">
        <div className="space-y-3 rounded-xl bg-secondary p-2 px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 rounded-full bg-gray-400" />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="">@{user.username}</p>
              </div>
            </div>
            <button onClick={() => setShow(false)} className="px-2 text-4xl">
              <RiCloseFill />
            </button>
          </div>
          <div className="">
            <textarea
              className="w-full border-none bg-transparent py-1 focus:border-none focus:outline-none focus:ring-0"
              placeholder="Ready to spill the beans? Confess anything..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="line" />
          <div className="flex justify-end">
            <button
              onClick={()=>{
                if(edit) handleEdit()
                else handleCreate()
              }}
              className="gap-2.5 rounded-[24px] bg-main px-[28px] py-[7px] text-[14px] font-bold text-white hover:bg-white hover:text-main hover:ring-[2px] hover:ring-main"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
