import { useParams, Link } from "react-router-dom";
import * as API from "../services/launches";
import { useState, useEffect } from "react";

import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Button,
  Center,
  Spacer,
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
import { FaHashtag, FaHome } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { BsRocketTakeoff } from "react-icons/bs";

import YoutubePlayer from "../services/YoutubePlayer.jsx";

import RocketGif from "../assets/rocket_details.gif";

import { IoLogoGithub } from "react-icons/io";

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
              console.log(rocketData);
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
                      <Text pt={1} ml={2}>Home</Text>
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
                <Fade top delay={4000}>
                  <Box p="4">
                    <SimpleGrid columns={1} spacing={8}>
                      <Box fontSize="5xl" height="50px">
                        <FaHashtag />
                      </Box>
                      <Box height="50px">
                        <Text textAlign="center">{launch.flight_number}</Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Fade>
                <Spacer />
                <Fade top delay={5000}>
                  <Box p="4">
                    <SimpleGrid columns={1} spacing={8}>
                      <Box fontSize="5xl" height="50px">
                        <FcCalendar />
                      </Box>
                      <Box height="50px">
                        <Text textAlign="center">{launch.launch_year}</Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Fade>
                <Spacer />
                <Fade top delay={6000}>
                  <Box p="4">
                    <SimpleGrid columns={1} spacing={8}>
                      <Box color="gray" fontSize="5xl" height="50px">
                        <Center>
                          <PiMapPinLineDuotone />
                        </Center>
                      </Box>
                      <Box height="50px">
                        <Text textAlign="center">
                          {launch.launch_site?.site_name}
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Fade>
                <Spacer />
                <Fade top delay={7000}>
                  <Box p="4">
                    <SimpleGrid columns={1} spacing={8}>
                      <Box fontSize="5xl" height="50px">
                        <Center>
                          <BsRocketTakeoff />
                        </Center>
                      </Box>
                      <Box height="50px">
                        <Text textAlign="center">
                          {launch.rocket?.rocket_name}
                        </Text>
                      </Box>
                    </SimpleGrid>
                  </Box>
                </Fade>
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
                <IoLogoGithub />{" "}
                <Text ml={1}>AdrianCabreraPhi {launch?.youtube_id} </Text>
              </Box>
            </Fade>
          </Box>
          {/* border red  */}
          <Box bg="#F44436" flex="0.1%" h="100%"></Box>
        </Flex>
      </Fade>
    </>
  );
}

{
  /* <Center h='100vh'>
<Card
direction={{ base: 'column', sm: 'row' }}
overflow='hidden'
variant='outline'
>
<Image
objectFit='cover'
maxW={{ base: '100%', sm: '200px' }}
src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
alt='Caffe Latte'
/>

<Stack>
<CardBody>
<Heading size='md'>The perfect latte</Heading>

<Text py='2'>
  Caffè latte is a coffee beverage of Italian origin made with espresso
  and steamed milk.
</Text>
</CardBody>

<CardFooter>
<Button variant='solid' colorScheme='blue'>
  Buy Latte
</Button>
</CardFooter>
</Stack>
</Card>
</Center> */
}
