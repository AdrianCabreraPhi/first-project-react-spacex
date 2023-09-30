import logo from "../assets/spacex.png";
import "./Header.css";
import headerImg from "../assets/spacexheader1.png";
import RocketGif from "../assets/cohete1.gif";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const gifHeaderStyle = {
  marginBottom: "100px",
};


export function Header() {
  return (
    <>
      <Fade big>
        <div className="header">
          <Fade delay={1000}>
            <img style={gifHeaderStyle} src={RocketGif} alt="Gif Rocket" />
          </Fade>
        </div>
      </Fade>
    </>
  );
}
