import { Carousel } from "react-carousel-minimal";
import * as data from "../../../sites.json";

function App() {
  const sites = [];

  data.sites.forEach((element) => {
    let site = {
      image: element.image,
      caption: element.name
    };
    sites.push(site);
  });

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold"
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold"
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2>אתרי מורשת דרך העיניים</h2>
        <h4>תמונות נבחרות מההאתרים</h4>
        <div
          style={{
            padding: "0 20px"
          }}
        >
          <Carousel
            data={sites}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
