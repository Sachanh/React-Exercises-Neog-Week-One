import React, { useState } from "react";

export function ShowPassword() {
  const [pwd, showpwd] = useState(false);
  const showPasswordStyle = {
    "--color-1": "#1B1687",
    "--color-2": "#9CBB56",
    background: `
      linear-gradient(
        170deg,
        var(--color-1),
        var(--color-2) 80%
      )
    `,
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: "cursive"
  };
  return (
    <div className="showPassword" style={showPasswordStyle}>
      <h1> Show password </h1>
      <input
        type={pwd ? "text" : "password"}
        placeholder="NeOgPass"
        maxLength="10"
      />
      <button onClick={() => showpwd(pwd ? false : true)}>
        Show/Hide password{" "}
      </button>
    </div>
  );
}
