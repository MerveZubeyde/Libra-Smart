"use client";
import { InputProps } from "../app/types";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
}) => {
  const [error, setError] = useState("");

  const validateInput = () => {
    if (!value) {
      setError("This field cannot be empty!");
    } else {
      setError("");
    }
  };

  return (
    <div className="w-full">
      <label className="block text-gray-300 text-sm font-medium mb-2">
        {label}
      </label>
      <input
        className="w-full p-4 rounded-lg border text-gray-300 border-gray-700 bg-[#2D3748] 
                       focus:outline-none focus:ring-2 transition duration-300"
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e);
          setError("");
        }}
        onBlur={validateInput}
        placeholder={placeholder}
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export default Input;
