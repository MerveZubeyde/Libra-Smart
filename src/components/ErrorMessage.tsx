import { ErrorMessageProps } from "../app/types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return <p className="text-red-500 text-sm mt-6">{message}</p>;
};

export default ErrorMessage;
