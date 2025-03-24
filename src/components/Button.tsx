import { ButtonProps } from "../app/types";

const Button: React.FC<ButtonProps> = ({ text, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full p-4 rounded-lg text-lg font-semibold bg-[#2D3748] text-white 
                   border-2 border-transparent shadow-2xl bg-clip-padding focus:outline-none 
                   focus:ring-4 transition-all duration-300 ease-in-out 
                   transform hover:scale-105 hover:bg-transparent"
    >
      {text}
    </button>
  );
};

export default Button;
