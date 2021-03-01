import Reaact, { useState } from "react";

export function DesignerTool() {
  let [size, setSize] = useState(20);
  const [color, setColor] = useState("brown");

  const changeOption1 = {
    backgroundColor: `${color}`
  };

  const fontResize = {
    fontSize: `${size}px`
  };
  return (
    <div>
      <button onClick={() => setSize(size + 8)}> Font+ </button>
      <button onClick={() => setSize(size - 8)}> Font- </button>
      <div style={changeOption1}>
        <p style={fontResize}> This is my new programme </p>{" "}
      </div>
      {/* color Selectoion */}
      <div className="Change1" onClick={() => setColor("red")}>
        Chnage Color
      </div>
    </div>
  );
}
