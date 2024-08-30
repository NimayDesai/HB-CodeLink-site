"use client";
import { VerifyModal } from "@/components/VerifyModal";
import { usePostsSuspenseQuery } from "@/gql/generated/graphql";
import {
  Button,
  chakra,
  Container,
  HStack,
  Link,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Heading,
} from "@chakra-ui/react";
import * as React from "react";

const Forum = () => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const { data, fetchMore } = usePostsSuspenseQuery({
    variables: {
      limit: 10,
      cursor: null,
    },
  });

  return (
    <>
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <VerifyModal />
        <Stack spacing={4}>
          {data.posts.posts.map((p) => (
            <chakra.div onClick={toggleOpen} key={p.id}>
              <HStack
                p={4}
                bg={useColorModeValue("white", "gray.800")}
                rounded="xl"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.100", "gray.700")}
                w="100%"
                h="100%"
                textAlign="left"
                align="start"
                spacing={4}
                cursor="pointer"
                _hover={{ shadow: "lg" }}
              >
                <Image
                  src={p.author.imageUri ? p.author.imageUri : undefined}
                  width={33}
                  height={33}
                  rounded="md"
                  objectFit="cover"
                  alt="cover image"
                  fallbackSrc="https://via.placeholder.com/150"
                />
                <VStack align="start" justifyContent="flex-start">
                  <VStack spacing={0} align="start">
                    <HStack mb={2}>
                      <Heading
                        as={Link}
                        fontWeight="bold"
                        fontSize="2xl"
                        noOfLines={1}
                        onClick={(e) => e.stopPropagation()}
                        isExternal
                      >
                        {p.title}
                      </Heading>
                    </HStack>

                    {!isOpen && (
                      <Text
                        fontSize="sm"
                        color={textColor}
                        noOfLines={{ base: 2 }}
                      >
                        {p.content}
                      </Text>
                    )}

                    {isOpen && (
                      <Text fontSize="sm" color={textColor}>
                        {p.content}
                      </Text>
                    )}
                  </VStack>
                </VStack>
              </HStack>
            </chakra.div>
          ))}
          {data && data.posts.hasMore ? (
            <Button
              m="auto"
              onClick={() => {
                fetchMore({
                  variables: {
                    limit: 10,
                    cursor: data.posts.posts[data.posts.posts.length - 1].id,
                  },
                });
              }}
              mt={2}
              p={8}
            >
              Load More
            </Button>
          ) : null}
        </Stack>
      </Container>
    </>
  );
};

const Page = () => {
  return <Forum />;
};

export default Page;
