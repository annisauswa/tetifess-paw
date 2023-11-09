import { IoHome, IoPersonSharp } from "react-icons/io5"
import { MdOutlineSearch } from "react-icons/md"
import Button from "../element/Button"
import Link from "next/link"
export default function Sidebar(){
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
            href: '/profile'
        }
    ]

    const icons =[
        IoHome,
        IoPersonSharp,
        MdOutlineSearch
    ]
    return(
        <section className="flex flex-col min-w-[360px] w-1/5 h-screen bg-blue-100 border-blue-200 border-r-[1px] px-[60px] py-[40px] gap-[4px]">
            {menu.map((item, idx)=>{
                const Icon = icons[idx]
                return(
                    <Link href={item.href} key={idx}>
                    <button className="w-full flex gap-[16px] hover:bg-blue-200 p-[12px] rounded-[24px] text-black items-center justify-start" 
                    >
                        <Icon size={24} />
                        {item.name}
                    </button>
                    </Link>
                )
            })}
            <Button text='Post' size='sm'/>
        </section>
    )
}