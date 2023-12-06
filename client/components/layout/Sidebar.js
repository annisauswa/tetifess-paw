import { useState, useEffect } from 'react';
import { IoHome, IoPersonSharp, IoLogOutOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md"
import { BiSolidDashboard } from "react-icons/bi"
import Button from "../element/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import ModalPost from '../element/ModalPost'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const role = localStorage.getItem('role')
    const router = useRouter();
    const [isShow, setIsShow] = useState(false)

    const [user, setUser] = useState({name: '', username: '', });

    const getUser = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        console.log('User data:', response.data);
        setUser({
          name: response.data.name,
          username: response.data.username,
        });
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    useEffect(() => {
      getUser();
    }, []);


    const handleLogout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      Cookies.remove('token');
      toast.success('Logout success');
      router.push('/login');
    };

    const pathname = usePathname();
    const menu = [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'Profile',
        href: '/profile',
      },
      {
        name: 'Search',
        href: '/search',
      },
    ];

    console.log(role)

    const icons = [IoHome, IoPersonSharp, MdOutlineSearch];

    return (
      <div className={`text-[14px] md:text-[16px] fixed top-0  h-screen w-64 md:relative md:w-full transform transition-transform duration-200 ease-in-out bg-secondary drop-shadow-md ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
        <div className="h-full px-4 pt-[48px] md:pt-2    pb-2 flex flex-col justify-between">
          <div className='flex flex-col gap-[10px] md:pt-[62px]'>
          {menu.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <Link href={item.href} key={idx}>
                <button
                  className={`w-full flex gap-[12px] md:gap-4 hover:bg-tertiary/20 p-2 rounded text-black items-center justify-start ${
                    pathname == item.href ? 'font-bold' : 'font-normal'
                  }`}
                >
                  <Icon className='text-black w-[20px] h-[20px] md:w-[24px] md:h-[24px]' />
                  {item.name}
                </button>
              </Link>
            );
          })}
          {role === 'admin' && (
            <Link href='/dashboard'>
            <button
              className={`w-full flex gap-[12px] md:gap-4 hover:bg-tertiary/20 p-2 rounded text-black items-center justify-start ${
                pathname == '/dashboard' ? 'font-bold' : 'font-normal'
              }`}
            >
              <BiSolidDashboard className='text-black w-[20px] h-[20px] md:w-[24px] md:h-[24px]' />
              Dashboard
            </button>
          </Link>
          )}
          <Button onClick={() => setIsShow(true)} text="Post" size="md" />
          </div>
            <div className="flex justify-between items-center mb-4 p-2">
              <div className="flex gap-4 justify-start items-start ">
                <div className='bg-[#D9D9D9] w-9 h-9 rounded-full'/>
                <div className='flex flex-col w-fit text-black'>
                  <div className='font-semibold'>{user.name}</div>
                  <div className='text-[12px] md:text-[14px] font-light'>@{user.username}</div>
                </div>
              </div>
              <button onClick={handleLogout}>
                <IoLogOutOutline className='text-black w-[20px] h-[20px] md:w-[24px] md:h-[24px]'/>
              </button>
            </div>
        </div>
        {isShow && <ModalPost show={isShow} setShow={setIsShow} user={user}/>}
      </div>
    )
}