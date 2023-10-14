import { IoLogoGithub } from "react-icons/io";
import {
    Box,
    Text,
  } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box h="5%" color="white" display="flex" alignItems="center" mr={4}>
      <IoLogoGithub />
      <a href="https://github.com/AdrianCabreraPhi" target="_blank">
        <Text color="white" ml={1}>
          AdrianCabreraPhi{" "}
        </Text>
      </a>
    </Box>
  );
}
