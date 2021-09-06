import { useState } from "react";

import ReactMapGL from "react-map-gl";
import { Marker, Popup } from "react-map-gl";

import "./map.css";

import * as data from "../../../sites.json";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 32.97080002468377,
    longitude: 35.492267933666106,
    zoom: 7,
    width: "100%",
    height: "50vh"
  });

  const [selectedSite, setSelctedSite] = useState(null);

  return (
    <div className="App">
      <div style={{ "text-align": "center", margin: "2em" }}>
        <h2>מפת מסלול שביל הצפון</h2>
      </div>
      <ReactMapGL
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapboxApiAccessToken={
          "pk.eyJ1IjoibWFwYm94Zm9yemVmYXQiLCJhIjoiY2tzNHVyZXhrMDV6YjJ2cWltbmxqaTZleiJ9.EpNPGHDLSAgc2ZzSryPhkA"
        }
        {...viewport}
        mapStyle="mapbox://styles/mapboxforzefat/cks4v3msf821p18p69xo3u7db"
      >
        {data.sites.map((site) => (
          <Marker
            latitude={site.Latitude}
            longitude={site.Longitude}
            key={site.id}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelctedSite(site);
              }}
              className="ptzan social"
              id="social1"
            ></button>
          </Marker>
        ))}

        {selectedSite && (
          <Popup
            onClose={() => {
              setSelctedSite(null);
            }}
            longitude={selectedSite.Longitude}
            latitude={selectedSite.Latitude}
          >
            <h2>{selectedSite.name}</h2>
            <img
              style={{ width: "4em" }}
              src={selectedSite.image}
              alt="site "
            />
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}
