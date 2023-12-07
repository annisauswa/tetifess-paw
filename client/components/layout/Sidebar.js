import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { IoHome, IoLogOutOutline, IoPersonSharp } from 'react-icons/io5'
import { MdOutlineSearch } from 'react-icons/md'
import { toast } from 'react-toastify'

import { Button } from '../element/Button'
import ModalPost from '../element/ModalPost'

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {  
  const router = useRouter()
  const [isShow, setIsShow] = useState(false)
  
  const [user, setUser] = useState({ name: '', username: '' })

  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      setUser(response.data)
    } catch (error) {
      toast.error('Error fetching user:', error)
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    Cookies.remove('token')
    toast.success('Logout success')
    router.push('/login')
  }

  const pathname = usePathname()
  const menu = [
    {
      name: 'Home',
      href: '/home',
    },
    {
      name: 'Profile',
      href: '/profile',
    },
    {
      name: 'Search',
      href: '/search',
    },
  ]

  const icons = [IoHome, IoPersonSharp, MdOutlineSearch]

  return (
    <div
      className={`fixed top-0 h-screen w-64  transform bg-secondary text-[14px] drop-shadow-md transition-transform duration-200 ease-in-out md:relative md:w-full md:text-[16px] ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-64'
      } md:translate-x-0`}
    >
      <div className="flex h-full flex-col justify-between    px-4 pb-2 pt-[48px] md:pt-2">
        <div className="flex flex-col gap-[10px] md:pt-[62px]">
          {menu.map((item, idx) => {
            const Icon = icons[idx]
            return (
              <Link href={item.href} key={idx}>
                <button
                  className={`flex w-full items-center justify-start gap-[12px] rounded-[24px] p-2 text-black hover:bg-tertiery/10 md:gap-4 ${
                    pathname == item.href ? 'font-bold' : 'font-normal'
                  }`}
                >
                  <Icon className="h-[20px] w-[20px] text-black md:h-[24px] md:w-[24px]" />
                  {item.name}
                </button>
              </Link>
            )
          })}
          {user.role === 'admin' && (
            <Link href="/dashboard">
              <button
                className={`flex w-full items-center justify-start gap-[12px] rounded p-2 text-black hover:bg-tertiery/10 md:gap-4 ${
                  pathname == '/dashboard' ? 'font-bold' : 'font-normal'
                }`}
              >
                <BiSolidDashboard className="h-[20px] w-[20px] text-black md:h-[24px] md:w-[24px]" />
                Dashboard
              </button>
            </Link>
          )}
          <Button onClick={() => setIsShow(true)} text="Post" size="md" />
        </div>
        <div className="mb-4 flex items-center justify-between p-2">
          <div className="flex items-start justify-start gap-4 ">
            <div className="h-9 w-9 rounded-full bg-[#D9D9D9]" />
            <div className="flex w-fit flex-col text-black">
              <div className="font-semibold">{user.name}</div>
              <div className="text-[12px] font-light md:text-[14px]">@{user.username}</div>
            </div>
          </div>
          <button onClick={handleLogout}>
            <IoLogOutOutline className="h-[20px] w-[20px] text-black md:h-[24px] md:w-[24px]" />
          </button>
        </div>
      </div>
      {isShow && <ModalPost show={isShow} setShow={setIsShow} user={user} />}
    </div>
  )
}
