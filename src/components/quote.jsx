import React from "react";

export const Quote = (props) => {
  const { cite, quote, character, anime, onClicks } = props;
  return (
    <>
      <figure>
        <blockquote cite={cite}>
          <p>{quote}</p>
        </blockquote>
        <figcaption>
          — {character},{" "}
          <i style={{ color: "gray", fontWeight: "thin" }}>from</i>{" "}
          <cite style={{ fontStyle: "italic", fontWeight: "semi-bold" }}>
            <a
              href={`https://www.bing.com/search?q=${anime}+myanimelist`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {anime}
            </a>
          </cite>
        </figcaption>
      </figure>
    </>
  );
};
