import React from "react";
import Loader from "../Loader";

interface Props {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}
export default function BtnPrimary(props: Readonly<Props>) {
  return (
    <button
      disabled={props.disabled}
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={` bg-orange-700 hover:bg-orange-800 rounded-md py-2 px-6 text-white font-medium	${
        props.className ?? ""
      }`}
    >
      {props.loading ? <Loader size={6} /> : props.text}
    </button>
  );
}
