import "./visualPage.css";

import Map from "./map/Map";
import Gallery from "./gallery/Gallery";

export default function Visual() {
  return (
    <div className="VisualPage">
      <Map style={{ width: "80vw" }} />
      <hr />
      <Gallery />
    </div>
  );
}
