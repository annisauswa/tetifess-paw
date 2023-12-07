import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

import ModalEditProfile from './ModalEditProfile'
import ModalPost from './ModalPost'

export default function SettingProfile({ show, setShow, item }) {
  const loggedin = JSON.parse(localStorage.getItem('user'))
  const [isShow, setIsShow] = useState(false)
  const [user, setUser] = useState({ name: '', bio: '', username: '' })

  const handleDelete = () => {
    console.log('delete')
    setShow(false)
  }

  const getProfile = async () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setUser({
          name: res.data.name,
          bio: res.data.bio,
          username: res.data.username,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProfile()
  }, [])

  console.log(user)

  if (show === false) return ''

  return (
    <div className="absolute -translate-x-20  md:-translate-x-36 ">
      <div className="w-full gap-2  rounded-xl bg-secondary py-2 text-[12px] shadow-lg md:text-sm ">
        <button
          type="button"
          onClick={() => {
            setIsShow(true)
          }}
          className="flex w-full cursor-pointer items-center gap-3 px-7 py-2 hover:bg-main hover:text-white"
        >
          <AiFillEdit />
          Edit {item === 'account' ? 'Account' : 'Post'}
        </button>
        <button
          type="button"
          onClick={() => handleDelete()}
          className="flex w-full cursor-pointer items-center gap-3 px-7 py-2 hover:bg-main hover:text-white"
        >
          <MdDelete />
          Delete {item === 'account' ? 'Account' : 'Post'}
        </button>
      </div>
      {item === 'account' ? (
        <ModalEditProfile show={isShow} setShow={setIsShow} data={user} />
      ) : (
        <ModalPost
          show={isShow}
          setShow={setIsShow}
          user={JSON.parse(localStorage.getItem('user'))}
          postId={item}
        />
      )}
    </div>
  )
}
