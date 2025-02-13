"use client";
import React from "react";
import styles from "./Button.module.scss";

type ButtonType = "normal" | "nav";

interface Props {
  children: React.ReactNode;
  type?: ButtonType;
  onClick?: () => void;
}

const Button = ({ children, type, onClick }: Props) => {
  const myStyles = `${styles.button} ${type === "nav" ? styles.nav : ""}`;

  return (
    <button className={myStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
