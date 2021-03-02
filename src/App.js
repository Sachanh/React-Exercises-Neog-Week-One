import "./styles.css";
import React, { useState } from "react";
import {
  Counter,
  AlphaNumericPass,
  CharacterCounter,
  DesignerTool,
  ShowPassword,
  DisablePasswordMatch,
  Footer
} from "./Component";

export default function App() {
  const [call, setCall] = useState(<AlphaNumericPass />);

  return (
    <div className="App">
      <div className="nav-bar">
        <span className="nav-title"> NeogCamp React exercises </span>
        <ul className="nav-link">
          <li
            onClick={() => setCall(<AlphaNumericPass />)}
            className="nav-icon"
          >
            {" "}
            AlphaNumeric Password
          </li>
          <li className="nav-icon" onClick={() => setCall(<Counter />)}>
            {" "}
            Counter{" "}
          </li>
          <li
            onClick={() => setCall(<CharacterCounter />)}
            className="nav-icon"
          >
            {" "}
            Character Counter{" "}
          </li>
          <li
            className="nav-icon"
            onClick={() => setCall(<DisablePasswordMatch />)}
          >
            {" "}
            Disable Password Match{" "}
          </li>
          <li className="nav-icon" onClick={() => setCall(<DesignerTool />)}>
            {" "}
            Designer Tool{" "}
          </li>
          <li className="nav-icon" onClick={() => setCall(<ShowPassword />)}>
            {" "}
            Show Password
          </li>
        </ul>
      </div>
      {call}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
