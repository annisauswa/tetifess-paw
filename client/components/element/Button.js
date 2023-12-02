import { type } from "os";
import { useMemo } from "react"

export function Button({
  size = "sm",
  text = "Button",
  isSubmit = "",
  onClick,  // Add this line
}) { 
const buttonSize = useMemo(() => {
    if (size === "sm") return "text-[12px] w-16 h-6";
    if (size === "md") return "text-[20px] w-60 h-12";
    if (size === "lg") return "text-[20px] w-70 h-12";
    return "text-[12px] w-16 h-6";
}, [size]);
return (
  <button 
    className={`bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-bold rounded-[24px] ${buttonSize}`}
    type={isSubmit ? "submit" : "button"}  // Modify this line
    onClick={onClick}  // And this line
  >
    {text}
  </button>
)
}

export default Button