import { useState } from "react";

import "./mySite.css";

// import * as sites from "../../../../sites.json";

import * as data from "../../sites.json";

import Site from "./Site";
import GetLocation from "./GetLocation";

import ListSites from "./ListSites";

export default function App() {
  const [siteId, setSiteId] = useState(null);

  return (
    <div className="App">
      <ListSites setSiteId={setSiteId} />

      {siteId === null && <GetLocation setSiteId={setSiteId} />}
      {siteId !== null && <Site siteId={siteId} />}
    </div>
  );
}
