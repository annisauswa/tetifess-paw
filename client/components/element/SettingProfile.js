import React from 'react'

import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function SettingProfile({ hide }) {

  if (hide === false) return ''

  return (
    <div className='absolute -translate-x-20  md:-translate-x-36 '>
      <div className='bg-secondary py-2 px-7 rounded-xl shadow-lg text-[12px] md:text-sm gap-2'>
        <div className='flex gap-3 py-2 items-center cursor-pointer'>
          <AiFillEdit />
          Edit Account
        </div>
        <div className='flex gap-3 py-2 items-center cursor-pointer'>
          <MdDelete />
          Delete Account
        </div>
      </div>
    </div>
  )
}
