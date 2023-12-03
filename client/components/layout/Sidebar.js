import { useState } from 'react';
import { IoHome, IoPersonSharp, IoLogOutOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import Button from "../element/Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import ModalPost from '../element/ModalPost';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
    const router = useRouter();
    const [isShow, setIsShow] = useState(false);

    const handleLogout = () => {
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      localStorage.removeItem('token');
      Cookies.remove('token');
      alert('Logout success');
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

    const icons = [IoHome, IoPersonSharp, MdOutlineSearch];

    return (
      <div className={`fixed sm:relative h-screen w-64 transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
        <div className="px-4 py-2 space-y-2">
          {menu.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <Link href={item.href} key={idx}>
                <button
                  className={`w-full flex gap-4 hover:bg-tertiary/20 p-2 rounded text-black items-center justify-start ${
                    pathname == item.href ? 'font-bold' : 'font-normal'
                  }`}
                >
                  <Icon size={24} />
                  {item.name}
                </button>
              </Link>
            );
          })}
          <Button onClick={() => setIsShow(true)} text="Post" size="md" />
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 justify-start items-start ">
              <div className='bg-[#D9D9D9] w-9 h-9 rounded-full'/>
              <div className='flex flex-col w-fit text-black'>
                <div className='text-lg font-semibold'>admin</div>
                <div className='text-md font-light'>@admin123</div>
              </div>
            </div>
            <button onClick={handleLogout}>
              <IoLogOutOutline size={24} className='text-black'/>
            </button>
          </div>
        </div>
        {isShow && <ModalPost isHide={!isShow} onClose={() => setIsShow(false)} />}
      </div>
    )
}