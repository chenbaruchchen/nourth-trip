import { useState } from "react";
import { Button } from "react-bootstrap";

// import * as sites from "../../../../sites.json";

import * as data from "../../sites.json";

import { Card } from "react-bootstrap";

import "../home/displayPage/card.css";

import {
  AiFillEdit,
  AiOutlineCompass,
  AiOutlineFolderOpen,
  AiOutlineClose
} from "react-icons/ai";

export default function Site(props) {
  // var some_fancy_gradient =
  //   "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
  // var some_fancy_image = data.sites[props.siteId].image;

  // let background = some_fancy_gradient + "url(" + some_fancy_image + ")";
  let background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
    data.sites[props.siteId].image
  })`;

  const [display, setDisplay] = useState(null);
  return (
    <div
      style={{
        backgroundImage: background
      }}
      className="site"
    >
      <div
        style={{
          color: "white"
        }}
      >
        <h1
          style={{
            position: "relative",
            top: "1em"
          }}
        >
          {" "}
          אתר מורשת
        </h1>
        <br />
        <h2> "{data.sites[props.siteId].name}"</h2>
      </div>

      <LeesonButton site={data.sites[props.siteId]} setDisplay={setDisplay} />
      <TripButton site={data.sites[props.siteId]} setDisplay={setDisplay} />
      <HellperButton site={data.sites[props.siteId]} setDisplay={setDisplay} />

      <br />
      <br />

      {display && (
        <MainDisplay
          site={data.sites[props.siteId]}
          display={display}
          setDisplay={setDisplay}
        />
      )}
    </div>
  );
}

function Leeson(props) {
  return (
    <div style={{ width: "100%", height: "100%" }} className="site">
      <h1>מערך שיעור</h1>
      <h3>"{props.site.name}"</h3>

      <h3>עמותת תל סאקי</h3>
      <h5>מלחמת יום כיפור 1973</h5>
      <p>גדוד הנחל המוצנח חטיבה 188 חטיבה 7 אוגדה 146 חטיבת עודד</p>
      <iframe
        width="100%"
        height="250vh"
        src="https://www.youtube.com/embed/2I4x5MOGqkQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={props.site.image} alt="img of site" border="0" />
    </div>
  );
}

function Trip(props) {
  return (
    <div style={{ width: "100%", height: "100%" }} className="site">
      <h1> מתווה הסיור באיזור</h1>
      <h3>"{props.site.name}"</h3>

      <h3>עמותת תל סאקי</h3>
      <h5>מלחמת יום כיפור 1973</h5>
      <p>גדוד הנחל המוצנח חטיבה 188 חטיבה 7 אוגדה 146 חטיבת עודד</p>
      <iframe
        width="100%"
        height="250vh"
        src="https://www.youtube.com/embed/2I4x5MOGqkQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={props.site.image} alt="img of site" border="0" />
    </div>
  );
}
function Hellper(props) {
  return (
    <div style={{ width: "100%", height: "100%" }} className="site">
      <h1> עזרים</h1>
      <h3>"{props.site.name}"</h3>

      <h3>עמותת תל סאקי</h3>
      <h5>מלחמת יום כיפור 1973</h5>
      <p>גדוד הנחל המוצנח חטיבה 188 חטיבה 7 אוגדה 146 חטיבת עודד</p>
      <iframe
        width="100%"
        height="250vh"
        src="https://www.youtube.com/embed/2I4x5MOGqkQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={props.site.image} alt="img of site" border="0" />
    </div>
  );
}

function LeesonButton(props) {
  return (
    <div
      className="card"
      style={{
        margin: "auto",
        width: "60%",
        "min-heigh": "20vh",
        "margin-top": "2em"
      }}
    >
      <Card
        onClick={() => {
          props.setDisplay(<Leeson site={props.site} />);
        }}
        style={{ width: "100%" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>מערך שיעור </h3>
          </Card.Title>
          {/* <Card.Text>
          <h5> צפו בסיפורי האתרים</h5>
        </Card.Text> */}

          <AiFillEdit
            className="card-icon"
            style={{ width: "3em", height: "3em" }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

function TripButton(props) {
  return (
    <div
      className="card"
      style={{
        margin: "auto",
        width: "60%",
        "min-heigh": "20vh",
        "margin-top": "2em"
      }}
    >
      <Card
        onClick={() => {
          props.setDisplay(<Trip site={props.site} />);
        }}
        style={{ width: "100%" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>מתווה הסיור באיזור </h3>
          </Card.Title>
          {/* <Card.Text>
          <h5>מסלול שביל הצפון, לוקח אותנו </h5>
        </Card.Text> */}

          <AiOutlineCompass
            className="card-icon"
            style={{ width: "3em", height: "3em" }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

function HellperButton(props) {
  return (
    <div
      className="card"
      style={{
        margin: "auto",
        width: "60%",
        "min-heigh": "20vh",
        "margin-top": "2em"
      }}
    >
      <Card
        onClick={() => {
          props.setDisplay(<Hellper site={props.site} />);
        }}
        style={{ width: "100%" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>עזרים</h3>
          </Card.Title>
          {/* <Card.Text>
          <h5> צפו בסיפורי האתרים</h5>
        </Card.Text> */}

          <AiOutlineFolderOpen
            className="card-icon"
            style={{ width: "3em", height: "3em" }}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

function MainDisplay(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: "0",

        background: "white"
      }}
    >
      MainDisplay
      <AiOutlineClose
        style={{
          position: "fixed",
          right: "10px",
          top: "10px",
          width: "2em",
          height: "2em"
        }}
        onClick={() => {
          props.setDisplay(null);
        }}
      />
      {props.display}
    </div>
  );
}
