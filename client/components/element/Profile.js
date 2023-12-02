import React from 'react';

export function Profile({
    profilePictureUrl,
    nama,
    username,
    bio,
    defaultColor = '#123456',
  }) {
    return (
      <div className="w-full flex flex-row gap-[20px] px-[40px] py-[14px] font-roboto border-b-[1px] border-tertiery">
        <div className=' bg-[#D9D9D9] w-[64px] h-[64px] rounded-full flex items-center justify-center flex-shrink-0'>
          {profilePictureUrl && <img src={profilePictureUrl} alt="Profile" className="w-full h-full rounded-full" />}
        </div>
        <div className='flex flex-col'>
          <div className='text-[14px] font-semibold'>{nama}</div>
          <div className='text-[12px] font-light'>@{username}</div>
          <div className='pt-[4px] pb-[10px] text-[14px] overflow-hidden' style={{ whiteSpace: 'normal', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2 }}>
            {bio}
        </div>
        </div>
      </div>
    );
  }
  

export default Profile