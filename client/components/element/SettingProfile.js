import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'

import ModalEditProfile from './ModalEditProfile'
import ModalPost from './ModalPost'

export default function SettingProfile({ show, setShow, item = {} }) {
  const [isShow, setIsShow] = useState(false)
  let userLocal = ''
  useEffect(() => {
    userLocal = JSON.parse(localStorage.getItem('user'))
  }, [])
  const [user, setUser] = useState(userLocal)
  const router = useRouter()

  const handleDelete = () => {
    if (item === 'account') {
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}/user/delete`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then(() => {
          toast.success('Deletion successful!', { autoClose: 1000 })
        })
        .catch((err) => {
          toast.error(err.message)
        })
      setShow(false)
      localStorage.removeItem('user')
      localStorage.removeItem('role')
      localStorage.removeItem('token')
      router.push('/')
    } else {
      axios
        .delete(`${process.env.NEXT_PUBLIC_API_URL}/posting/${item._id}`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then(() => {
          toast.success('Deletion successful!', { autoClose: 1000 })
        })
        .catch((err) => {
          toast.error(err.message)
        })
      setShow(false)
      window.location.reload()
      toast.success('Deletion successful!', { autoClose: 3000 })
    }
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
        setUser(res.data)
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }

  useEffect(() => {
    if (isShow) {
      getProfile()
    }
  }, [isShow])

  if (show === false) return ''

  return (
    <div className="-translate-x-20  md:-translate-x-36 ">
      <div className="w-full gap-2  rounded-xl bg-secondary py-2 text-[12px] shadow-lg md:text-sm ">
        <button
          type="button"
          onClick={() => {
            setIsShow(true)
          }}
          className="flex w-full cursor-pointer items-center gap-3 px-4 md:px-7 py-2 hover:bg-main hover:text-white"
        >
          <AiFillEdit />
          Edit {item === 'account' ? 'Account' : 'Post'}
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="flex w-full cursor-pointer items-center gap-3 px-4 md:px-7 py-2 hover:bg-main hover:text-white"
        >
          <MdDelete />
          Delete {item === 'account' ? 'Account' : 'Post'}
        </button>
      </div>
      {item === 'account' ? (
        <ModalEditProfile show={isShow} setShow={setIsShow} data={user} />
      ) : (
        <ModalPost show={isShow} setShow={setIsShow} user={user} postData={item} edit />
      )}
    </div>
  )
}
