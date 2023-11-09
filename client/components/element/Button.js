import { useMemo } from "react"

export function Button({
    size = "sm",
    text = "Button"
}) {
  const buttonSize = useMemo(() => {
      if (size === "sm") return "text-[14px] px-[24px] py-[13px] gap-2.5";
      if (size === "md") return "text-[16px] px-[24px] py-[15px] gap-3.5";
      if (size === "lg") return "text-[18px] px-[24px] py-[19px] gap-4";
      return "text-[14px] px-[24px] py-[13px] gap-2.5";
  }, [size]);
  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-[24px] ${buttonSize}`}>
      {text}
    </button>
  )
}

export default Button