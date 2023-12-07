import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

import ModalEditProfile from './ModalEditProfile'
import ModalPost from './ModalPost'
import { toast } from 'react-toastify'
import { resolveTypeReferenceDirective } from 'typescript'
import { useRouter } from 'next/navigation'

export default function SettingProfile({ show, setShow, item={} }) {
  const [isShow, setIsShow] = useState(false)
  const [user, setUser] = useState()
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
        .catch((err) => {
          toast.error(err.message)
        })
      setShow(false)
      localStorage.removeItem('user')
      localStorage.removeItem('role')
      localStorage.removeItem('token')
      console.log('delete user')
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
        .then((res) => {
          window.location.reload()
          toast.success('Deletion success!', { autoClose: 3000})
        })
        .catch((err) => {
          toast.error(err.message)
        })
      setShow(false)
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
  console.log('item:')
  console.log(item)
  console.log('user:')
  console.log(user)

  useEffect(() => {
    getProfile();
  }, [])

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
          onClick={handleDelete}
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
          user={user}
          postData={item}
          edit={true}
        />
      )}
    </div>
  )
}
