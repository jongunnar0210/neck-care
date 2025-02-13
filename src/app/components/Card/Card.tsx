import React from "react";

interface Props {
  text: string;
  subText: string;
  availableSince: number;
}

const Card = ({ text, subText, availableSince }: Props) => {
  return (
    <div>
      <h3>{text}</h3>
      <h4>{subText}</h4>
      <h5>Available since {availableSince}</h5>
    </div>
  );
};

export default Card;
