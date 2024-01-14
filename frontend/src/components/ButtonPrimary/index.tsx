import React from "react";
import { Loader } from "../Loader";
import styles from "./index.module.scss";

interface ButtonPrimaryProps {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
}
export default function BtnPrimary(props: Readonly<ButtonPrimaryProps>) {
  if (props.loading) {
    return <Loader size={4} />;
  }

  return (
    <button
      disabled={props.disabled}
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
    >
      {props.text}
    </button>
  );
}
