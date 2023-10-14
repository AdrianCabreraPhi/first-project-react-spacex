import { useParams, Link } from "react-router-dom";
import * as API from "../services/launches";
import { useState, useEffect } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Center,
  Image,
  Tabs,
  TabList,
  TabIndicator,
  TabPanels,
  TabPanel,
  Tab,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import leftImg from "../assets/spacex.png";
import { FaHome } from "react-icons/fa";
import YoutubePlayer from "../services/YoutubePlayer.jsx";
import RocketGif from "../assets/rocket_details.gif";
import { IoLogoGithub } from "react-icons/io";
import { MainDetails } from "./MainDetails";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();
  const [rocket, setRocket] = useState();

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId)
      .then((launchData) => {
        setLaunch(launchData);
        if (launchData.rocket) {
          API.getRocketDetails(launchData.rocket.rocket_id)
            .then((rocketData) => {
              setRocket(rocketData);
              // console.log(launchData.launch_site.site_id);
            })
            .catch(console.log);
        }
      })
      .catch(console.log);
  }, [launchId]);

  return (
    <>
      <Fade>
        <Flex bg="black" h="100vh">
          <Box flex="60%" h="100%">
            <Fade delay={2000}>
              <Box bg="black" h="5%" m={0} p={0}>
                <Link to="/">
                  <Button size="lg" colorScheme="blackAlpha">
                    <Box display="flex" alignItems="center">
                      <FaHome />
                      <Text pt={1} ml={2}>
                        Home
                      </Text>
                    </Box>
                  </Button>
                </Link>
              </Box>
              <Box h="95%">
                <Center h="60vh">
                  <Image objectFit="cover" src={leftImg} />
                </Center>
              </Box>
            </Fade>
          </Box>
          <Box flex="39.1%" h="100%">
            <Box
              h="40%"
              bg="black"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Fade delay={3000}>
                <Image src={launch.links?.mission_patch_small} />
              </Fade>
            </Box>
            <Box h="15%" mr={10} textColor="white">
              <Flex>
              <MainDetails {...launch} />
              </Flex>
            </Box>

            <Fade delay={8000}>
              <Box h="40%" color="white">
                <Tabs position="relative" variant="unstyled">
                  <TabList>
                    <Tab>Rocket Details</Tab>
                    <Tab>Launch video</Tab>
                  </TabList>
                  <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg="blue.500"
                    borderRadius="1px"
                  />
                  <TabPanels>
                    <TabPanel h="100%">
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
                    </TabPanel>
                    <TabPanel h="100%">
                      <Flex h="35vh">
                        <Box h="90%">
                          <Fade>
                            <YoutubePlayer videoId={launch.links?.youtube_id} />
                          </Fade>
                        </Box>
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
              <Box
                h="5%"
                color="white"
                display="flex"
                alignItems="center"
                mr={4}
              >
                <IoLogoGithub />
                <a href="https://github.com/AdrianCabreraPhi" target="_blank">
                  <Text color="white" ml={1}>
                    AdrianCabreraPhi{" "}
                  </Text>
                </a>
              </Box>
            </Fade>
          </Box>
          {/* border red  */}
          <Box bg="#3181CD" flex="0.1%" h="100%"></Box>
        </Flex>
      </Fade>
    </>
  );
}
