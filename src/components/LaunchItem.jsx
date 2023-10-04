import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Button,
  Center,
  Img,
  Tag,
  Spacer
} from "@chakra-ui/react";
import "dayjs/locale/es";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import { RiChatDeleteLine, RiChatCheckLine } from "react-icons/ri";

export function LaunchItem(launch) {
  console.log(launch);

  function LaunchImage({ linkImage }) {
    return (
      <Center>
        <Img src={linkImage} boxSize="300px" />
      </Center>
    );
  }


  function LaunchInformation({ props }) {
    return (
      <Box>
        <Flex>
          <Center>
            <Text fontSize="4xl" display="inline-block">
              Mission <strong>{props.mission_name}</strong>({props.launch_year})
              <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? (
                  <RiChatCheckLine />
                ) : (
                  <RiChatDeleteLine />
                )}
              </Tag>
            </Text>
          </Center>
        </Flex>
        <Fade delay={1500}>
          <Flex>
            <Center w={400} mt={10}>
              <Text ml={10} textAlign="justify">
                {props.details}
              </Text>
            </Center>
          </Flex>
          <Link to={`/launch/${launch.flight_number}`}>
            <Button mt={4} ml={10} colorScheme="blue">
              More Details
            </Button>
          </Link>
        </Fade>
      </Box>
    );
  }

  return (
    <SimpleGrid my={40} columns={2}>
      {launch.position % 2 === 0 && (
        <>
          <Fade>
            <LaunchImage linkImage={launch?.links.mission_patch_small} />
          </Fade>
          <Fade delay={1000}>
            <LaunchInformation props={launch} />
          </Fade>
        </>
      )}

      {launch.position % 2 != 0 && (
        <>
          <Fade delay={1000}>
            <LaunchInformation props={launch} />
          </Fade>
          <Fade>
            <LaunchImage linkImage={launch.links.mission_patch_small} />
          </Fade>
        </>
      )}
    </SimpleGrid>
  );
}
