import React from "react";

const stylesBtn = {
  textDecoration: "none",
  position: "fixed",
  bottom: "10px",
  right: "60px",
  display: "block",
  padding: "10px 20px",
  borderRadius: "10px",
  color: "white",
  backgroundColor: "black",
};

const styleRefresh = {
  textDecoration: "none",
  position: "fixed",
  bottom: "10px",
  right: "10px",
  display: "block",
  padding: "10px 20px",
  borderRadius: "10px",
  color: "white",
  backgroundColor: "black",
};

export const Button = (props) => {
  const { text, onClicks } = props;
  return (
    <>
      <button style={stylesBtn} type="button" onClick={onClicks}>
        {text}
      </button>
      <a href="/" style={styleRefresh}>
        #
      </a>
    </>
  );
};
