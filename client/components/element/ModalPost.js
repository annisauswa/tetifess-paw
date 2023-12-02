import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

export default function ModalPost({ isHide, onClose }) {
  if (isHide) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };

  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px]'>
        <div className='bg-secondary p-2 rounded-xl space-y-3 px-5'>
          <div className='flex justify-between items-center'>
            <div className='flex space-x-5 items-center'>
              <div className='w-14 h-14 rounded-full bg-gray-400'></div>
              <div>
                <p className="font-bold">nama</p>
                <p className="">username</p>
              </div>
            </div>
            <button
              onClick={() => onClose()}
              className='text-4xl px-2'>
                <RiCloseFill />
            </button>
          </div>
          <div className=''>
            <textarea className='py-1 px-10 bg-transparent border-none w-full' placeholder='Ready to spill the beans? confes anything...'></textarea>
          </div>
          <div className='line'></div>
          <div className='flex justify-end'>
            <button className={`bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-bold rounded-[24px] text-[14px] px-[28px] py-[7px] gap-2.5`}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}