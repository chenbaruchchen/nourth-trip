import { Card, Button } from "react-bootstrap";

import Visual from "../../visual/Visual";

import { withRouter } from "react-router-dom";

import { FaRoute } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

import "./card.css";

const RouterButtonTrip = withRouter(({ history }) => (
  <div
    className="card"
    style={{ margin: "auto", width: "60%", "min-heigh": "20vh" }}
    onClick={() => {
      history.push("/visual");
    }}
  >
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>
          <h3>שביל הצפון</h3>
        </Card.Title>
        {/* <Card.Text>
          <h5>מסלול שביל הצפון, לוקח אותנו </h5>
        </Card.Text> */}

        <FaRoute
          className="card-icon"
          style={{ width: "3em", height: "3em" }}
        />
      </Card.Body>
    </Card>
  </div>
));

const RouterButtonSites = withRouter(({ history }) => (
  <div
    className="card"
    style={{
      margin: "auto",
      width: "60%",
      "min-heigh": "20vh",
      "margin-top": "2em"
    }}
    onClick={() => {
      history.push("/mySite");
    }}
  >
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>
          <h3>אתרי השביל</h3>
        </Card.Title>
        {/* <Card.Text>
          <h5> צפו בסיפורי האתרים</h5>
        </Card.Text> */}

        <MdLocationOn
          className="card-icon"
          style={{ width: "3em", height: "3em" }}
        />
      </Card.Body>
    </Card>
  </div>
));

export default function App() {
  return (
    <>
      <RouterButtonTrip />
      <RouterButtonSites />
    </>
  );
}
