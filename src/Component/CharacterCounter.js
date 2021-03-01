import React, { useState } from "react";

export function CharacterCounter() {
  let [char, setCharCount] = useState(0);

  const counterInputStyle = {
    width: "20rem",
    height: "6rem",
    textAlign: "center",
    color: "#5FFBF1",
    backgroundColor: "#071212"
  };

  const characterCounterBackground = {
    "--color-1": "#032436",
    "--color-2": "#C0B0DA",
    background: `
      linear-gradient(
        170deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,
    color: "#1A0A53",
    fontFamily: "cursive",
    paddingTop: 10,
    paddingBottom: 10
  };

  return (
    <div className="character" style={characterCounterBackground}>
      <h1> CharacterCounter </h1>
      <textarea
        style={counterInputStyle}
        maxLength="300"
        onChange={(event) => {
          setCharCount(event.target.value);
        }}
      />
      <p>
        {" "}
        Total character {char.length}/{char === 0 ? 300 : 300 - char.length}{" "}
      </p>
      <p>
        {" "}
        {char.length === 300
          ? "You reached your maximum character limit"
          : "Type now"}
      </p>
    </div>
  );
}
