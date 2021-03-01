import React, { useState } from "react";

export function DisablePasswordMatch() {
  const [pass, rePass] = useState("");
  const [confPass, setConfPass] = useState(" ");
  // let [result,setResult]=useState("");

  return (
    <div className="App">
      <h1> Disable and Password Match </h1>
      <div>
        {" "}
        <input
          onChange={(event) => {
            rePass(event.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <input
          onChange={(event) => {
            setConfPass(event.target.value);
          }}
        />{" "}
      </div>
      <br />
      <button disabled={pass === confPass && pass !== "" ? false : true}>
        Submit{" "}
      </button>
      {/* <p>{result}</p> */}
      <br />
      {pass === confPass && pass !== "" ? "Right" : "Wrong"}
    </div>
  );
}
