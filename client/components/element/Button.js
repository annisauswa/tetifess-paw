import { type } from 'os'
import { useMemo } from 'react'

export function Button({ width = 'w-full', size = 'sm', text = 'Button', isSubmit = '', onClick }) {
  const buttonSize = useMemo(() => {
    if (size === 'sm') return 'text-[14px] py-[5px] rounded-[12px]'
    if (size === 'md') return 'text-[16px] py-[8px] rounded-[16px]'
    if (size === 'lg') return 'text-[20px] py-[10px] rounded-[24px]'
    return 'text-[12px] px-[10px] h-6'
  }, [size])
  return (
    <button
      className={`rounded-[24px] bg-main font-semibold text-white hover:bg-white hover:text-main hover:ring-[2px] hover:ring-main ${buttonSize} ${width}`}
      type={isSubmit ? 'submit' : 'button'} // Modify this line
      onClick={onClick} // And this line
    >
      {text}
    </button>
  )
}

export default Button
