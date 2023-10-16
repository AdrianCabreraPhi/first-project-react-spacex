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
import { MainDetails } from "./MainDetails";
import { RocketDetails } from "./RocketDetails";
import {Footer} from "./Footer";

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
            <Fade delay={1000}>
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
              <Fade delay={2000}>
                <Image src={launch.links?.mission_patch_small} />
              </Fade>
            </Box>
            <Box h="15%" mr={10} textColor="white">
              <Flex>
                <MainDetails {...launch} />
              </Flex>
            </Box>

            <Fade delay={7000}>
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
                      <RocketDetails {...rocket} />
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
            <Footer/>
            </Fade>
          </Box>
          {/* border red  */}
          <Box bg="#3181CD" flex="0.1%" h="100%"></Box>
        </Flex>
      </Fade>
    </>
  );
}
