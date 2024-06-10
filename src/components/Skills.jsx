import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const  Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <br />
              <br />
              <br />
              <Carousel
                autoPlay={true}
                autoPlaySpeed={1000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                responsive={responsive}
                // customTransition="linear 1s"
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={"https://cdn-icons-png.flaticon.com/512/5969/5969347.png"}
                    alt="Image"
                  />
                  <h5>Unity</h5>
                </div>
                <div className="item">
                  <img src={"https://cdn-icons-png.flaticon.com/512/6132/6132221.png"} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn-icons-png.flaticon.com/512/1377/1377892.png"}
                    alt="Image"
                  />
                  <h5>VR</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn-icons-png.flaticon.com/512/2248/2248435.png"}
                    alt="Image"
                  />
                  <h5>AR</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn-icons-png.flaticon.com/512/882/882731.png"}
                    alt="Image"
                  />
                  <h5>Nvidia Omniverse</h5>
                </div>
                <div className="item">
                  <img
                    src={"https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png"}
                    alt="Image"
                  />
                  <h5>Unreal</h5>
                </div>
                
                <div className="item">
                  <img
                    src={"https://cdn.iconscout.com/icon/free/png-256/free-github-159-721954.png?f=webp&w=256"}
                    alt="Image"
                  />
                  <h5>GitHub</h5>
                </div>
                
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
