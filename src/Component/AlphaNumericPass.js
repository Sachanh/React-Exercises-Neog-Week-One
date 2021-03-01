import React, { useState } from "react";

export function AlphaNumericPass() {
  let [password, setPassword] = useState("");
  let [ch, setch] = useState(" ");
  const AlphaNumericPassStyle = {
    "--color-1": "#FEFFFF",
    "--color-2": "#040123",
    background: `
      linear-gradient(
        130deg,
        var(--color-1),
        var(--color-2) 90%
      )
    `,
    paddingTop: 20,
    PaddingBottom: 20
  };

  return (
    <div className="alphaPass" style={AlphaNumericPassStyle}>
      <h1> AlphaNumeric Password </h1>
      <input
        onChange={(event) => {
          password = event.target.value;
          setPassword(password);
          let passwordNew = [...password];
          let j = 0;
          let k = 0;
          for (let i = 0; i < password.length; i++) {
            if (isNaN(passwordNew[i]) === false) {
              j++;
            } else {
              k++;
            }
          }
          if (j > 0 && k > 0) {
            ch = "Password is Alphanumeric";
            setch(ch);
          } else {
            ch = "Password is not alphanumeric";
            setch(ch);
          }
        }}
      />
      <h2> {ch} </h2>
    </div>
  );
}
