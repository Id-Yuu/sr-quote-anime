import React from "react";

export const Button = (props) => {
  const { text, onClicks } = props;
  return (
    <>
      <button type="button" onClick={onClicks}>
        {text}
      </button>
    </>
  );
};
