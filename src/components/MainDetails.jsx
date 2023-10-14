import {
  Box,
  SimpleGrid,
  Text,
  Button,
  Center,
  Spacer,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import * as APILocation from "../services/location";
import Fade from "react-reveal/Fade";
import { IoLogoGithub } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { BsRocketTakeoff } from "react-icons/bs";
import Map from "./Map";
export function MainDetails(launch) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [location, setLocation] = useState({});


   useEffect(() => {
     console.log("MainDetailsComponent")
     console.log(launch)
     APILocation.getLocation(launch?.launch_site?.site_id)
     .then((locationData) => {
       setLocation(locationData[0]);
     })
     .catch(console.log);
   },[launch]);



  return (
    <>
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
              <Button
                onClick={onOpen}
                size="xs"
                textAlign="center"
                colorScheme="blue"
              >
                {launch.launch_site?.site_name}
              </Button>
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
              <Text textAlign="center">{launch.rocket?.rocket_name}</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Fade>
      <Drawer
        bg="black"
        size={"lg"}
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white">{location?.name}</DrawerHeader>
          <DrawerBody>{location && <Map {...location} />}</DrawerBody>

          <DrawerFooter display="flex" justifyContent="flex-start">
            <IoLogoGithub color="white" />
            <a href="https://github.com/AdrianCabreraPhi" target="_blank">
              <Text color="white" pt={1} ml={1}>
                AdrianCabreraPhi{" "}
              </Text>
            </a>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
