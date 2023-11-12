import { type } from "os";
import { useMemo } from "react"

export function Button({
    size = "sm",
    text = "Button",
    isSubmit = "",
}) {
  const buttonSize = useMemo(() => {
      if (size === "sm") return "text-[14px] px-[24px] py-[13px] gap-2.5";
      if (size === "md") return "text-[16px] px-[24px] py-[15px] gap-3.5";
      if (size === "lg") return "text-[18px] px-[24px] py-[19px] gap-4";
      return "text-[14px] px-[24px] py-[13px] gap-2.5";
  }, [size]);
  return (
    <button 
      className={`w-full bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-bold rounded-[24px] ${buttonSize}`}
      type={isSubmit}>
      {text}
    </button>
  )
}

export default Button