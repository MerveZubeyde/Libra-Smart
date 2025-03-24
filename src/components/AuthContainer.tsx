import { AuthContainerProps } from "../app/types";

const AuthContainer: React.FC<AuthContainerProps> = ({
  title,
  subtitle,
  children,
  borderColor,
}) => {
  return (
    <div className="flex flex-col justify-start items-center space-y-6 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto bg-[#1A202C] py-16 sm:py-24 px-6 sm:px-12 rounded-lg shadow-2xl">
      <div className="w-full flex flex-col items-center space-y-3 mb-4">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
        <hr className={`w-1/3 sm:w-1/4 border-t ${borderColor}`} />
        <p className="text-gray-400 text-sm mb-4">{subtitle}</p>
      </div>
      <div className="w-full flex justify-center">{children}</div>
    </div>
  );
};

export default AuthContainer;
