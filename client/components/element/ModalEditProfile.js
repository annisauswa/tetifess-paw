import React from 'react'
import { RiCloseFill } from 'react-icons/ri';

export default function ModalEditProfile({ isHide, onClose }) {

  if (!isHide) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  }

  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[500px]'>
        <div className='bg-secondary p-2 rounded-xl space-y-3 px-5'>
          <div className='flex justify-between'>
            <p className='font-leckerli-one text-xl font-bold'>Edit Profile</p>
            <button
              onClick={() => onClose()}
              className='text-4xl px-2'>
                <RiCloseFill />
            </button>
          </div>
          <div className='line'></div>
          <div className='w-24 h-24 bg-gray-400 rounded-full'></div>
          <form className='flex flex-col'>
            <label className='text-sm font-semibold'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='e.g.'
              className='px-2 py-2 mb-5 bg-transparent border rounded-md border-gray-500'
            />
            <label className='text-sm font-semibold'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='e.g.'
              className='px-2 py-2 mb-5 bg-transparent border rounded-md border-gray-500'
            />
            <label className='text-sm font-semibold'>Bio</label>
            <textarea
              id='bio'
              name='bio'
              placeholder='e.g.k'
              className='px-3 py-8 mb-5 bg-transparent border rounded-md border-gray-500'>
            </textarea>
          </form>
          <div className='line'></div>
          <div className='flex justify-end'>
            <button className={`bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-bold   rounded-[24px] text-[14px] px-[28px] py-[7px] gap-2.5`}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
