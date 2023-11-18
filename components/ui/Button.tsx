"use client"
import clsx from "clsx"
import {ReactNode} from "react"
import {FiMenu} from "react-icons/fi"
interface buttonProps {
  type?:"button"|"submit"|"reset";
  text:string | ReactNode;
  onClick?:()=>void;
  actionButton?:boolean;
  className?:string;
}

const Button = ({type,text,onClick,actionButton}:buttonProps) => {
  return (
    <>
      <button onClick={onClick} type={type} className={clsx(actionButton && "bg-orange-700  text-white rounded-full p-2","bg-orange-700 px-2  h-[40px] text-[12px] text-white")}>{text}</button>
    </>
  )
}

export default Button
