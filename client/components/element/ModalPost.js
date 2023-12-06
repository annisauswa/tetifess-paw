import {useState} from 'react'
import { RiCloseFill } from 'react-icons/ri'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default function ModalPost({ show, setShow, user, postId }) {
  const [text, setText] = useState('')
  if(show===false) return null

  const handleEdit = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posting/post`,{
      text: text},{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        withCredentials: true
      })
      .then((res) => {
      console.log(res)
      setShow(false)
      })
      .catch((err) => {
        console.log(err)
        setShow(false)
      })
  }

  return ReactDOM.createPortal(
    (
      <div
        id='wrapper'
        className='fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center z-50 text-black'>
        <div className='w-[600px]'>
          <div className='bg-secondary p-2 rounded-xl space-y-3 px-5'>
            <div className='flex justify-between items-center'>
              <div className='flex space-x-5 items-center'>
                <div className='w-14 h-14 rounded-full bg-gray-400'></div>
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="">@{user.username}</p>
                </div>
              </div>
              <button
                onClick={() => setShow(false)}
                className='text-4xl px-2'>
                  <RiCloseFill />
              </button>
            </div>
            <div className=''>
              <textarea
                className='py-1 bg-transparent border-none w-full focus:border-none focus:ring-0 focus:outline-none'
                placeholder='Ready to spill the beans? Confess anything...' 
                value={text}
                onChange={(e) => setText(e.target.value)}
              >
              </textarea>
            </div>
            <div className='line'></div>
            <div className='flex justify-end'>
              <button onClick={handleEdit()} className={`bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-bold rounded-[24px] text-[14px] px-[28px] py-[7px] gap-2.5`}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
    document.body
  );
}