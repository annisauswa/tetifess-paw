/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { IoEllipsisHorizontalSharp } from "react-icons/io5";

import ModalSettingProfile from './SettingProfile';


export function Profile({
  profilePictureUrl,
  nama,
  username,
  bio,
  joinDate,
}) {

  const [modalSetting, setModalSetting] = useState(false)

  return (
    <div className='pt-10 md:mr-10'>
      <div className="w-full flex justify-between flex-row gap-[20px] px-[40px] py-[14px] font-roboto ">
        <div className='flex gap-10'>
          <div className=' bg-[#D9D9D9] w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] rounded-full flex items-center justify-center flex-shrink-0'>
            {profilePictureUrl && <img src={profilePictureUrl} alt="Profile" className="w-full h-full rounded-full" />}
          </div>
          <div className='flex flex-col'>
            <div className='text-[14px] font-semibold'>{nama}</div>
            <div className='text-[12px] font-roboto '>@{username}</div>
            <div className='pt-[4px] pb-[10px] text-[14px] font-medium overflow-auto' style={{ whiteSpace: 'normal', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
              {bio}
            </div>
            <div className='text-[10px] text-tiny'>{joinDate}</div>
          </div>
        </div>

        <div>
          <button onClick={()=>setModalSetting(!modalSetting)} className=''>
            <IoEllipsisHorizontalSharp className='text-tertiery' size={18} />
          </button>
          <ModalSettingProfile show={modalSetting} setShow={setModalSetting} item='account'/>
        </div>
      </div>
    </div>
  );
}


export default Profile