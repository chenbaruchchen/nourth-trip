import { useState, useEffect } from "react";

import { Button, Form } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";

import * as data from "../../sites.json";

export default function Site(props) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  var distances = [];

  function getLocation() {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }

    getDistance();
    props.setSiteId(getMinDistance());
  }

  function getDistance() {
    data.sites.forEach((element) => {
      let distance = calcCrow(lat, lng, element.Latitude, element.Longitude);

      // let distance = calcCrow(
      //   32.96291479730095,
      //   35.4989157261363,
      //   element.Latitude,
      //   element.Longitude
      // );

      distances.push({ distance: distance, element: element });
    });
  }

  function getMinDistance() {
    getDistance();

    let minDistance = distances[0].distance;
    let minIndex = 0;
    for (let index = 0; index < distances.length; index++) {
      const element = distances[index];

      const distance = element.distance;

      if (distance < minDistance) {
        minDistance = distance;
        minIndex = index;
      }
    }

    console.log(minDistance);
    console.log(minIndex);
    return minIndex;
  }

  function calcCrow(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
  }

  // Converts numeric degrees to radians
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  return (
    <div
      className="App"
      style={{
        margin: "0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <img
        style={{
          width: "40vw",
          height: "auto",
          "border-radius": "50%",
          display: "inline-block",
          marginBottom: "2em"
        }}
        src="https://i.ibb.co/bJBSZ8k/logo.jpg"
        alt="logo"
        border="0"
      />

      <Button onClick={() => getLocation()} variant="success">
        <h1>אתר לפי מיקום</h1>

        <MdLocationOn />
      </Button>
      {/* 
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>} */}
    </div>
  );
}
