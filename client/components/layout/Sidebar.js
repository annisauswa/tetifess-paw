'use client'
import { IoHome, IoPersonSharp, IoLogOutOutline } from "react-icons/io5"
import { MdOutlineSearch } from "react-icons/md"
import Button from "../element/Button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Cookies from 'js-cookie'

export default function Sidebar(){
    const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('role')
    localStorage.removeItem('token')
    Cookies.remove('token')
    alert('Logout success')
    router.push('/login')
  }
    const pathname = usePathname()
    console.log(pathname)
    const menu =[
        {
            name: "Home",
            href: '/'
        },
        {
            name: "Profile",
            href: '/profile'
        },
        {
            name: "Search",
            href: '/search'
        }
    ]

    const icons =[
        IoHome,
        IoPersonSharp,
        MdOutlineSearch
    ]
    return(
        <section className="flex flex-col h-full bg-secondary border-tertiery border-r-[1px] px-[60px] py-[40px] gap-[4px] justify-between">
            <div>
                {menu.map((item, idx)=>{
                    const Icon = icons[idx]
                    return(
                        <Link href={item.href} key={idx}>
                        <button className={`w-full flex gap-[16px] hover:bg-tertiery/20 p-[12px] rounded-[24px] text-black items-center justify-start 
                        ${pathname == item.href ? 'font-bold':'font-normal'}
                        ` }
                        >
                            <Icon size={24} />
                            {item.name}
                        </button>
                        </Link>
                    )
                })}
                <Button text='Post' size='md'/>
            </div>
            <div className="flex justify-between items-center mb-[40px]">
                <div className="flex gap-[20px] justify-start items-start ">
                    <div className='bg-[#D9D9D9] w-[36px] h-[36px] rounded-full'/>
                    <div className='flex flex-col w-fit text-black'>
                            <div className='text-[14px] font-semibold'>admin</div>
                            <div className='text-[12px] font-light'>@admin123</div>
                        </div>
                </div>
                <button onClick={handleLogout}>
                    <IoLogOutOutline size={24} className='text-black'/>
                </button>
            </div>
        </section>
    )
}