import "./Header.css";
import RocketGif from "../assets/cohete1.gif";
import Fade from "react-reveal/Fade";
import { Box, Text } from "@chakra-ui/react";
const gifHeaderStyle = {
  marginBottom: "300px",
  marginRight: "100vh",
};


const xStyle = {
  color: "#11141B"
}

export function Header() {
  return (
    <>
      <Fade big>
        <div className="header">
          <Fade delay={1000}>
            <Box borderBottom="1px" borderBottomColor="#11141B"  display="flex" style={gifHeaderStyle}>
              <Text  fontSize="9xl" color="white">
                Space <span style={xStyle}>X</span>
              </Text>
              <Fade delay={1500}>
                <img src={RocketGif} alt="Gif Rocket" />
              </Fade>
              {/* <Text fontSize='5xl' colorScheme="blue"> </Text> */}
            </Box>
          </Fade>
        </div>
      </Fade>
    </>
  );
}
