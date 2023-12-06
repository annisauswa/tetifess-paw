import { type } from "os";
import { useMemo } from "react"

export function Button({
  width = "w-full",
  size = "sm",
  text = "Button",
  isSubmit = "",
  onClick,
}) { 
const buttonSize = useMemo(() => {
    if (size === "sm") return "text-[14px] py-[5px] rounded-[12px]";
    if (size === "md") return "text-[16px] py-[8px] rounded-[16px]";
    if (size === "lg") return "text-[20px] py-[10px] rounded-[24px]";
    return "text-[12px] px-[10px] h-6";
}, [size]);
  return (
    <button 
      className={`bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-semibold rounded-[24px] ${buttonSize} ${width}`}
      type={isSubmit ? "submit" : "button"}  // Modify this line
      onClick={onClick}  // And this line
    >
      {text}
    </button>
  )
}

export default Button