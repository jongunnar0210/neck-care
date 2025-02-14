import React from "react";

interface Props {
  text: string;
  subText: string;
  availableSince: number;
}

// TODO: Rename this component to something more descriptive after talking to
// NeckCare about what they want to call it.
const Card = ({ text, subText, availableSince }: Props) => {
  return (
    <div>
      <h3>
        <em>{text}</em>
      </h3>
      <h4>{subText}</h4>
      <h5>Available since {availableSince}</h5>
    </div>
  );
};

export default Card;
