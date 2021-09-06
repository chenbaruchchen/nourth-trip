import "./home.css";
import { useHistory, useState } from "react-router-dom";

import DisplayPage2 from "./displayPage/DisplayPage2";

import Visual from "../visual/Visual";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="Home">
      <div className="text">
        <br />

        <img
          style={{
            width: "40vw",
            height: "auto",
            "border-radius": "50%",
            display: "inline-block"
          }}
          src="https://i.ibb.co/bJBSZ8k/logo.jpg"
          alt="logo"
          border="0"
        />

        {/* <h1>
          בשביל הצפון
          <br />
          .דרך.ערך
        </h1> */}

        <br />
        <br />

        <h3>
          מחוברים למורשת ולמרחב
          <br />
          בכל נקודת זמן
        </h3>

        <hr />
      </div>
      <div syle={{ "margin-buttom": "3em" }} className="DisplayPage">
        <DisplayPage2 />
      </div>

      <br />
      <br />
    </div>
  );
}
