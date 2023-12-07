import { useState } from 'react'
import { BiLike,BiSolidLike } from 'react-icons/bi'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import axios from 'axios'

import ModalSettingPost from './SettingProfile'
import { toast } from 'react-toastify'
import useRelativeTime from '../../utils/useRelativeTime'

export function Post({
    postId, nama, username, timestamp, content, like, likeUserId, liked, postData={}
}) {
    const [localIsLiked, setLocalIsLiked] = useState(liked || false);
    const user = JSON.parse(localStorage.getItem('user'))
    const [isLiked, setIsLiked] = useState(likeUserId.some(like => like._id === user._id))
    const [modalSetting, setModalSetting] = useState(false)
    const relativeTime = useRelativeTime(timestamp);

    const setModalSettingPost = () => {
        if (modalSetting === false) {
            setModalSetting(true);
        } else {
            setModalSetting(false);
        }
    }

    const handleLike = async () => {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/posting/${postId}/like`,
          {},
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )    
        setIsLiked(!isLiked)
        if(isLiked){
          toast.success('Post Unliked')
        }else{
          toast.success('Post Liked')
        }
      } catch (error) {
        toast.error('Failed to like post')
      }
    }

    return (
      <div className='mr-10 relative'>
        <div className="w-full flex flex-row gap-[20px] px-[40px] py-[14px] font-roboto border-b-[1px] border-tertiery ">
          <div className='w-full justify-between grid-cols-6 grid'>
            <div className='col-span-5 flex flex-col'>
              <div className="flex gap-[20px] justify-start items-start">
                <div className='bg-[#D9D9D9] w-[36px] h-[36px] rounded-full flex-shrink-0' />
                <div className='flex flex-col w-fit'>
                  <div className='text-[14px] font-semibold'>{nama}</div>
                  <div className='text-[12px] font-light'>@{username}</div>
                  <div className='pt-[4px] pb-[10px] text-[14px] '>{content}</div>
                  <div className='flex gap-2 h-full items-center'>
                    <button onClick={()=>{
                      handleLike()
                      }}>
                      {isLiked || localIsLiked ? (
                        <BiSolidLike className='text-tertiery' size={18} />
                        ):(
                          <BiLike className='text-tertiery' size={18} />
                      )}
                    </button>
                    <div className='text-[10px]'>
                      {isLiked? like+1:like}
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center h-fit gap-[16px] items-center">
              <div className='text-[14px]'>{relativeTime}</div>
              <div>
                <button onClick={setModalSettingPost} className={`${user._id === postData.userId._id? 'flex':'hidden'}`}>
                  <IoEllipsisHorizontal className='text-tertiery' size={18} />
                </button>
                <div className='absolute w-[150px] md:w-[160px]'>
                  <ModalSettingPost show={modalSetting} setShow={setModalSetting} item={postData}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Post