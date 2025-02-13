"use client";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

const HamburgerButton = () => {
  const IMAGE_SIZE = 24;

  return (
    <Button
      onClick={() => {
        alert("todo");
      }}
      type="nav"
    >
      <Image
        src="/icons/hamburger.svg"
        alt="hamburger"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
        //   className={styles.image}
      />
    </Button>
  );
};

export default HamburgerButton;
