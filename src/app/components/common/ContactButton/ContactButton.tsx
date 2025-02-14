"use client";
import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

// A button with both a text and an image.
// There was no requirement to let it do anything so for now it's just a styled button.
const ContactButton = () => {
  const IMAGE_SIZE = 20;

  return (
    <Button
      onClick={() => {
        alert("todo");
      }}
      type="nav"
    >
      <p>LET&apos;S TALK</p>
      <Image
        src="/icons/arrow-right.svg"
        alt="arrow-right"
        width={IMAGE_SIZE}
        height={IMAGE_SIZE}
      />
    </Button>
  );
};

export default ContactButton;
