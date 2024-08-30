"use client";

import Navbar from "@/components/NavBar";
import { Usercard } from "@/components/Usercard";
import { VerifyModal } from "@/components/VerifyModal";
import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  ScaleFade,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import {
  FaChalkboardTeacher,
  FaCode,
  FaInstagram,
  FaTrophy,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { useInViewport } from "react-in-viewport";

interface IFeature {
  heading: string;
  content: string;
  icon: React.ReactNode;
}

const features: IFeature[] = [
  {
    heading: "Weekly Meetings",
    content:
      "CodeLink will offer weekly meetings teaching new concepts of programming in a structured, yet entertaining way",
    icon: <Icon as={FaChalkboardTeacher} w={9} h={9} />,
  },
  {
    heading: "Competitions",
    content:
      "Compete with other programmers to earn prizes to show off to your friends and family",
    icon: <Icon as={FaTrophy} w={9} h={9} />,
  },
  {
    heading: "Collaborations",
    content:
      "HB CodeLink will feature collaborations with other clubs to provide interesting experiences for students",
    icon: <Icon as={FaPeopleGroup} w={9} h={9} />,
  },
];

const Home = () => {
  const ref = React.useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );
  const c1 = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Navbar />
      <VerifyModal />
      <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
        >
          <Stack
            direction="column"
            spacing={6}
            justifyContent="center"
            maxW="480px"
          >
            <Heading fontSize="5xl" lineHeight={1} fontWeight="bold">
              HB CodeLink is
              <chakra.span color={"lightgreen"}> back</chakra.span>
            </Heading>
            <Text
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
              color="gray.500"
            >
              HB CodeLink is back for the new school year with all new events,
              compeitions and prizes while learning programming at the same
              time!
            </Text>
            <Stack
              mt={4}
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 0, sm: 2 }}
              mb={{ base: "3rem !important", sm: 0 }}
              flexWrap="wrap"
            >
              <ScaleFade
                initialScale={0.9}
                in={inViewport}
                whileHover={{ scale: 1.2 }}
              >
                <Box ref={ref}>
                  <Button
                    w={{ base: "100%", sm: "auto" }}
                    h={12}
                    px={4}
                    mr={4}
                    color="white"
                    size="lg"
                    rounded="md"
                    mb={{ base: 2, sm: 0 }}
                    zIndex={5}
                    lineHeight={1}
                    bgGradient="linear(to-l, #00f59a,#01f07b)"
                    _hover={{
                      opacity: 0.9,
                    }}
                  >
                    <chakra.span> Sign Up now </chakra.span>
                    <Icon as={FaCode} h={4} w={4} ml={1} />
                  </Button>
                </Box>
              </ScaleFade>
              <ScaleFade
                initialScale={0.9}
                in={inViewport}
                whileHover={{ scale: 1.2 }}
              >
                <Box ref={ref}>
                  <Button
                    w={{ base: "100%", sm: "auto" }}
                    p={4}
                    px={6}
                    h={12}
                    color="white"
                    size={"lg"}
                    lineHeight={1}
                    rounded="md"
                    boxShadow="md"
                    mb={{ base: 2, sm: 0 }}
                    bgGradient={"linear(to-l, #7928CA,#FF0080)"}
                    zIndex={5}
                    _hover={{
                      opacity: 0.9,
                    }}
                  >
                    Instagram
                    <Icon as={FaInstagram} h={4} w={4} ml={1} />
                  </Button>
                </Box>
              </ScaleFade>
            </Stack>
          </Stack>
          <Box ml={{ base: 0, md: 5 }} pos="relative">
            <Image
              width={"100%"}
              height="100%"
              alt="Coding Logo"
              minW={{ base: "auto", md: "30rem" }}
              objectFit="cover"
              src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&q=80&
            fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80`}
              rounded="md"
              fallback={<Skeleton />}
            />
          </Box>
        </Stack>
        <chakra.h3
          fontSize="4xl"
          fontWeight="bold"
          mt={60}
          mb={20}
          textAlign="center"
        >
          Enlightening Harold M. Brathwaite with code, one line at a time
        </chakra.h3>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          placeItems="center"
          spacing={10}
          mb={40}
        >
          {features.map((feature, index) => (
            <motion.div whileHover={{ scale: 1.2 }} key={index}>
              <Box bg={c1} p={6} rounded="lg" textAlign="center" pos="relative">
                <Flex
                  p={2}
                  w="max-content"
                  color="white"
                  bgGradient="linear(to-br, #228be6, #15aabf)"
                  rounded="md"
                  marginInline="auto"
                  pos="absolute"
                  left={0}
                  right={0}
                  top="-1.5rem"
                  boxShadow="lg"
                >
                  {feature.icon}
                </Flex>
                <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                  {feature.heading}
                </chakra.h3>
                <Text fontSize="md" mt={4}>
                  {feature.content}
                </Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
        <Heading textAlign={"center"} mb={20}>
          Meet our Executive team
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={20}
          mt={20}
          maxW="1000px"
          m="auto"
        >
          <Usercard
            name="Edward Lin"
            decription="To be filled by edward"
            position="Co-President"
            insta="https://instagram.com/edyi_01"
            github="https://github.com/TheNobleCoder"
          />
          <Usercard
            name="Nimay Desai"
            decription="Full Stack Developer 👨‍💻 Math Enjoyer 📘 History Buff 🌍 Loves Computers 💻"
            position="Co-President"
            insta="https://instagram.com/paladinaoe2"
            github="https://github.com/NimayDesai"
          />
          <Usercard
            name="Sachkeerat Brar"
            decription="Full-Stack Dev 👨‍💻 Gaming Addict 🪖 Gym Enjoyer 🏋️‍♂️ Guitarist 🎸"
            position="VP of Marketing"
            insta="https://instagram.com/sachkeeratb"
            image_uri="https://avatars.githubusercontent.com/u/61165141?v=4"
            github="https://github.com/sachkeeratb"
          />
          <Usercard
            name="Shihan Salgadoe"
            decription="To be filled by shihan"
            position="VP of Development"
            insta="https://instagram.com/ShihanSalgadoe"
            github="https://github.com/ShihanSalgadoe"
          />

          <Usercard
            name="Manav Vasa"
            decription="Full-Stack Dev 👨‍💻 Gaming Addict 🪖 Gym Enjoyer 🏋️‍♂️ Guitarist 🎸"
            position="VP of Marketing"
            insta="https://instagram.com/sachkeeratb"
            image_uri="https://avatars.githubusercontent.com/u/61165141?v=4"
            github="https://github.com/sachkeeratb"
          />
          <Usercard
            name="Kushi Kallam"
            decription="Full-Stack Dev 👨‍💻 Gaming Addict 🪖 Gym Enjoyer 🏋️‍♂️ Guitarist 🎸"
            position="VP of Marketing"
            insta="https://instagram.com/sachkeeratb"
            image_uri="https://avatars.githubusercontent.com/u/61165141?v=4"
            github="https://github.com/sachkeeratb"
          />
          <Usercard
            name="Pradyuman Uppal"
            decription="Full-Stack Dev 👨‍💻 Gaming Addict 🪖 Gym Enjoyer 🏋️‍♂️ Guitarist 🎸"
            position="VP of Marketing"
            insta="https://instagram.com/sachkeeratb"
            image_uri="https://avatars.githubusercontent.com/u/61165141?v=4"
            github="https://github.com/sachkeeratb"
          />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
