import axios from 'axios'
import { useState } from 'react'
import { BiLike, BiSolidLike } from 'react-icons/bi'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import { toast } from 'react-toastify'

import useRelativeTime from '../../utils/useRelativeTime'
import ModalSettingPost from './SettingProfile'

export function Post({
  postId,
  nama,
  username,
  timestamp,
  content,
  like,
  likeUserId,
  liked,
  postData = {},
}) {
  const [localIsLiked, setLocalIsLiked] = useState(liked || false)
  const user = JSON.parse(localStorage.getItem('user'))
  const [isLiked, setIsLiked] = useState(likeUserId.some((like) => like._id === user._id))
  const [modalSetting, setModalSetting] = useState(false)
  const relativeTime = useRelativeTime(timestamp)

  const setModalSettingPost = () => {
    if (modalSetting === false) {
      setModalSetting(true)
    } else {
      setModalSetting(false)
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
        },
      )
      setIsLiked(!isLiked)
      if (isLiked) {
        toast.success('Post Unliked', { autoClose: 1000 })
      } else {
        toast.success('Post Liked', { autoClose: 1000 })
      }
    } catch (error) {
      toast.error('Failed to like post')
    }
  }

  return (
    <div className="relative mr-10">
      <div className="flex w-full flex-row gap-[20px] border-b-[1px] border-tertiery px-[40px] py-[14px] font-roboto ">
        <div className="grid w-full grid-cols-6 justify-between">
          <div className="col-span-5 flex flex-col">
            <div className="flex items-start justify-start gap-[20px]">
              <div className="h-[36px] w-[36px] flex-shrink-0 rounded-full bg-[#D9D9D9]" />
              <div className="flex w-fit flex-col">
                <div className="text-[14px] font-semibold">{nama}</div>
                <div className="text-[12px] font-light">@{username}</div>
                <div className="pb-[10px] pt-[4px] text-[14px] ">{content}</div>
                <div className="flex h-full items-center gap-2">
                  <button
                    onClick={() => {
                      handleLike()
                    }}
                  >
                    {isLiked || localIsLiked ? (
                      <BiSolidLike className="text-tertiery" size={18} />
                    ) : (
                      <BiLike className="text-tertiery" size={18} />
                    )}
                  </button>
                  <div className="text-[10px]">{isLiked ? like + 1 : like}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex h-fit items-center justify-center gap-[16px]">
            <div className="text-[14px]">{relativeTime}</div>
            <div>
              <button
                onClick={setModalSettingPost}
                className={`${user._id === postData.userId._id ? 'flex' : 'hidden'}`}
              >
                <IoEllipsisHorizontal className="text-tertiery" size={18} />
              </button>
              <div className="absolute w-[150px] md:w-[160px]">
                <ModalSettingPost show={modalSetting} setShow={setModalSetting} item={postData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
