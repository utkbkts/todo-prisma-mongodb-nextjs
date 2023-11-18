import React from "react";

interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input = ({ name, type, placeholder, value }: inputProps) => {
  
  return (
    <>
      <input
        type={type}
        value={value}
        className="w-full p-2 border-gray-200 border h-[40px] outline-none"
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
