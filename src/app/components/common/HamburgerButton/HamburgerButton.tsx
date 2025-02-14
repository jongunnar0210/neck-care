"use client";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

// A typical hamburger button.
// There was no requirement to let it do anything so for now it's just a styled button.
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
      />
    </Button>
  );
};

export default HamburgerButton;
