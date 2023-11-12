import {IoEllipsisHorizontal} from 'react-icons/io5'
import {BiSolidLike, BiLike} from 'react-icons/bi'

export function Post({
    nama, username, timestamp, content, like
}) {
  return (
    <div className="w-full flex flex-row gap-[20px] px-[40px] py-[14px] font-roboto border-b-[1px] border-tertiery">
        <div className='w-full justify-between grid-cols-6 grid'>
            <div className='col-span-5 flex flex-col'>
                <div className="flex gap-[20px] justify-start items-start">
                    <div className='bg-[#D9D9D9] w-[36px] h-[36px] rounded-full'/>
                    <div className='flex flex-col w-fit'>
                        <div className='text-[14px] font-semibold'>{nama}</div>
                        <div className='text-[12px] font-light'>@{username}</div>
                        <div className='pt-[4px] pb-[10px] text-[14px] '>{content}</div>
                        <div className='flex gap-[8px] items-center'>
                            <BiLike className='text-main ' size={20}/>
                            <div className='text-[10px]'>{like}</div>
                        </div>

                    </div>
                </div>
                
            </div>
            <div className="col-span-1 flex justify-center h-fit gap-[16px] items-center">
                <div className='text-[14px]'>{timestamp}</div>
                <IoEllipsisHorizontal className='text-tertiery' size={18}/>
            </div>
        </div>
    </div>
  )
}

export default Post