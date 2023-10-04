import { useParams } from "react-router-dom";
import * as API from "../services/launches";
import { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Button,
  Center,
  Img,
  Container,
  Spacer,
  Stack,
  Card,
  Heading,
  CardFooter,
  CardBody,
  Image,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import leftImg from "../assets/spacex.png";
import { FaRocket, FaHashtag } from "react-icons/fa";
import { MdFlight } from "react-icons/md";

export function LaunchDetails() {
  const [launch, setLaunch] = useState({});
  const { launchId } = useParams();

  // <FaRocket size={25} />

  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.log);
  }, [launchId]);
  return (
    <>
      <Fade>
        <Flex>
          <Box flex="60%">
            <Image h="100vh" objectFit="cover" src={leftImg} />
          </Box>
          <Box bg="black" flex="30%">
            <Box h="10%" bg="yellow">
              das
            </Box>
            <Box h="40%" bg="red" display="flex" alignItems="center" justifyContent="center">
                <Image src={launch?.links.mission_patch_small} />
            </Box>
            <Box h="50%" bg="blue"></Box>
          </Box>
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
