import { type } from "os";
import { useMemo } from "react"

export function Button({
  size = "sm",
  text = "Button",
  isSubmit = false, // Default to false
  onClick,
}) {
  const buttonSize = useMemo(() => {
    if (size === "sm") return "text-[12px] w-16 h-6";
    if (size === "md") return "text-[20px] w-60 h-12";
    if (size === "lg") return "text-[20px] w-70 h-12";
    return "text-[12px] w-16 h-6";
  }, [size]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-semibold rounded-[24px] ${buttonSize}`}
      type={isSubmit ? 'submit' : 'button'} // Use 'button' type for non-submit buttons
      onClick={handleClick}
    >
      {text}
    </button>
  );
}


export default Button