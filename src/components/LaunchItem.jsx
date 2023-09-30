import { HiCalendar } from "react-icons/hi";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Spacer,
  Tag,
  Button,
  Icon,
  Center,
  Img,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/es";
import Fade from "react-reveal/Fade";

export function LaunchItem(launch) {
  console.log(launch);

  return (
    <SimpleGrid my={40} columns={2}>
      <Fade>
        <Center>
          <Img src={launch.links.mission_patch_small} boxSize="300px" />
        </Center>
      </Fade>

      <Fade delay={1000}>
        <Box>
          <Flex>
            <Center>
              <Text fontSize="4xl" display="inline-block">
                Mission <strong>{launch.mission_name}</strong>(
                {launch.launch_year})
              </Text>
            </Center>
          </Flex>
          <Fade delay={1500}>
            <Flex>
              <Center w={400} mt={10}>
                <Text ml={10} textAlign="justify">
                  {launch.details}
                </Text>
              </Center>
            </Flex>
          </Fade>
          {/* <Flex display="flex">
            <Text fontSize="2x1"></Text>
            <Spacer />
            <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
              {launch.launch_success ? "Success" : "Failure"}
            </Tag>
          </Flex>
          <Flex align="center">
            <Icon as={HiCalendar} color="gray.500" />
            <Text fontSize="sm" ml={1} color="gray.500">
              {dayjs(launch.launch_date_local)
                .locale("en")
                .format("D,MMMM,YYYY")}
            </Text>
          </Flex>
          <Button colorScheme="purple">More Details</Button> */}
        </Box>
      </Fade>
    </SimpleGrid>
    //  <Box bg="gray.100" borderRadius="lg" p={4} m={4} >
    //      <Flex display="flex">
    //          <Text fontSize="2x1" >
    //              Mission <strong>{launch.mission_name}</strong>
    //              ({launch.launch_year})
    //          </Text>
    //          <Spacer />
    //          <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
    //              {launch.launch_success ? "Success" : "Failure"}
    //          </Tag>
    //      </Flex>
    //      <Flex align="center">
    //          <Icon as={HiCalendar} color="gray.500" />
    //          <Text fontSize='sm' ml={1} color="gray.500">
    //              {dayjs(launch.launch_date_local).locale('es').format("D,MMMM,YYYY")}
    //          </Text>
    //      </Flex>
    //      <Button colorScheme="purple">More Details</Button>
    //  </Box>
  );
}
