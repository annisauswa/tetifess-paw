import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

export default function SettingPost({ hide }) {
  if (hide === false) return ''

  return (
    <div className="absolute -translate-x-20  md:-translate-x-36">
      <div className="gap-2 rounded-xl bg-secondary px-7 py-2 text-[12px] shadow-lg  md:text-sm">
        <div className="flex cursor-pointer items-center gap-3 py-2">
          <AiFillEdit />
          Edit Post
        </div>
        <div className="flex cursor-pointer items-center gap-3 py-2">
          <MdDelete />
          Delete Post
        </div>
      </div>
    </div>
  )
}
