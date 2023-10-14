import { Box, Text, Flex, Center, Image } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import RocketGif from "../assets/rocket_details.gif";

export function RocketDetails(rocket) {

  return (
    <Flex bg="black" h="35vh">
      <Box flex="40%" h="100%">
        <Fade>
          <Image objectFit="cover" src={RocketGif}></Image>
        </Fade>
      </Box>
      <Box flex="60%" h="100%">
        <Fade>
          <Center h="18vh">
            <Text>{rocket?.description}</Text>
          </Center>
        </Fade>
      </Box>
    </Flex>
  );
}
