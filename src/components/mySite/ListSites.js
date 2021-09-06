import { useState } from "react";

import "./mySite.css";

// import * as sites from "../../../../sites.json";

import * as data from "../../sites.json";

export default function App(props) {
  const listSites = data.sites.map((site) => (
    <a
      style={{ textDecoration: "none" }}
      href={"#" + site.id}
      onClick={() => props.setSiteId(site.id)}
    >
      <li className="list-item">
        <div className="list-card">
          <img style={{ width: "4em" }} src={site.image} alt="site " />
          {site.name}
        </div>
      </li>
    </a>
  ));

  return <ul class="scroll">{listSites}</ul>;
}
