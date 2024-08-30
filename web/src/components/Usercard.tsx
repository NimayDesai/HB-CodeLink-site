import {
  Avatar,
  Box,
  chakra,
  Divider,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";

interface UsercardProps {
  name: string;
  position: string;
  decription: string;
  insta: string;
  github?: string;
  image_uri?: string;
}

export const Usercard: React.FC<UsercardProps> = (props) => {
  return (
    <>
      <motion.div whileHover={{ scale: 1.2 }}>
        <Stack
          w="17rem"
          spacing={2}
          p={4}
          border="1px solid"
          borderColor={useColorModeValue("gray.400", "gray.600")}
          rounded="md"
          margin="0 auto"
          _hover={{
            boxShadow: useColorModeValue(
              "0 4px 6px rgba(160, 174, 192, 0.6)",
              "0 4px 6px rgba(9, 17, 28, 0.4)"
            ),
          }}
        >
          <HStack justifyContent="space-between" alignItems="baseline">
            <Box pos="relative">
              <Avatar
                src={props.image_uri}
                name={props.name}
                size="xl"
                borderRadius="md"
              />
            </Box>
            <HStack spacing={2}>
              <Link href={props.insta}>
                <Icon as={AiFillInstagram} w={6} h={6} />
              </Link>
              {props.github ? (
                <Link href={props.github}>
                  <Icon as={AiFillGithub} w={6} h={6} />
                </Link>
              ) : null}
            </HStack>
          </HStack>
          <chakra.h1 fontSize="xl" fontWeight="bold">
            {props.name}
          </chakra.h1>
          <Text fontSize="md" color="gray.500">
            {props.position}
          </Text>
          <Divider />
          <Text fontSize="md" color="gray.500">
            {props.decription}
          </Text>
        </Stack>
      </motion.div>
    </>
  );
};
