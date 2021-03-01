import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const style1 = {
    "--color-1": "#1500F2",
    "--color-2": "#000A0F",
    background: `
      linear-gradient(
        120deg,
        var(--color-1),
        var(--color-2) 90%
      )
    `,
    color: "white",
    fontFamily: "cursive",
    paddingBottom: 30,
    paddingTop: 30
  };

  const stylebtn = {
    // color: "red",
    // backgroundColor: "#86A8E7",
    // borderRadius: 10,

    "--color-1": "#051937",
    "--color-2": "#A8EB12",
    background: `
      linear-gradient(
        170deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,

    fontFamily: "Georgia, serif",
    color: "white",
    textAlign: "center",
    padding: 10,
    borderRadius: 12
  };

  return (
    <div className="counter" style={style1}>
      <h1> Counter </h1>
      <button style={stylebtn} onClick={() => setCount(count + 1)}>
        {" "}
        Increment{" "}
      </button>
      <h1> {count} </h1>
      <button style={stylebtn} onClick={() => setCount(count - 1)}>
        {" "}
        Decreament{" "}
      </button>
    </div>
  );
}
