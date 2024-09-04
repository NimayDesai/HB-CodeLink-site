"use client";
import Navbar from "@/components/NavBar";
import { Button, Flex, Heading, Link, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FaBook,
  FaComments,
  FaDiscord,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Forms: React.FC<{}> = ({}) => {
  return (
    <>
      <Navbar />
      <Flex maxW="4xl" direction={"column"} m="auto">
        <Heading m="auto" mb={8}>
          Links
        </Heading>
        <VStack spacing={8}>
          <Button
            mt={8}
            size={"lg"}
            as={Link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSd56YcOxcRlXC8RSp17_sP77BAseRRZDH30cwWizMjYQmEyPA/viewform?usp=sf_link"
            isExternal
            colorScheme="blue"
            rightIcon={<FiUser />}
            m="auto"
          >
            General Member applications
          </Button>
          <Button
            mt={8}
            size={"lg"}
            as={Link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfI2Y8wWER7hlnXWGvy8TwHm-rGVp8e4ekrlUa0c-1ZQJ3wGQ/viewform?usp=sf_link"
            isExternal
            rightIcon={<FaUser />}
            colorScheme="green"
            m="auto"
          >
            Executive Member applications
          </Button>
          <Button
            mt={8}
            size={"lg"}
            as={Link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSflilkdlD7UGg3PHMlUrWmczUoOoNowaMtyyvzFmNiqm8lkOg/viewform?usp=sf_link"
            isExternal
            colorScheme="red"
            rightIcon={<FaComments />}
            m="auto"
          >
            Suggestions
          </Button>
          <Button
            mt={8}
            size={"lg"}
            as={Link}
            href="https://docs.hbcodelink.tech"
            isExternal
            colorScheme="teal"
            rightIcon={<FaBook />}
            m="auto"
          >
            Study guide
          </Button>
          <Button
            mb={8}
            size={"lg"}
            as={Link}
            href="https://instagram.com/hb_codelink"
            isExternal
            colorScheme="pink"
            rightIcon={<FaInstagram />}
            m="auto"
          >
            Instagram
          </Button>
          <Button
            mb={8}
            size={"lg"}
            as={Link}
            href="https://discord.gg/Xjx2gnjb"
            isExternal
            colorScheme="blue"
            rightIcon={<FaDiscord />}
            m="auto"
          >
            Discord
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default Forms;
