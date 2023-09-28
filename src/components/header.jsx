import logo from "../assets/spacex.png";
import "./Header.css";
import headerImg from "../assets/spacexheader1.png";
import RocketGif from "../assets/cohete1.gif";

const gifHeaderStyle = {
  marginBottom: "100px",
};

export function Header() {
  return (
    <>
      <div className="header">
        <img style={gifHeaderStyle} src={RocketGif} alt="Gif Rocket" />
      </div>
    </>
  );
}
