"use client";
import NavBar from "@/components/NavBar";
import { PaginationButton } from "@/components/PaginationButton";
import { VerifyModal } from "@/components/VerifyModal";
import { usePostCountQuery, usePostsQuery } from "@/gql/generated/graphql";
import { Link } from "@chakra-ui/next-js";
import {
  Avatar,
  Box,
  Button,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Forum = ({ params: p }: { params: { page: string } }) => {
  const textColor = useColorModeValue("gray.500", "gray.200");
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const { data } = usePostsQuery({
    variables: {
      limit: 10,
      offset: (parseInt(p.page) - 1) * 10,
    },
  });
  const router = useRouter();
  const { data: postCountData } = usePostCountQuery();

  return (
    <>
      <NavBar />
      <Container maxW="6xl" p={{ base: 5, md: 10 }}>
        <HStack>
          <Heading textAlign={"center"}>General Forum</Heading>
          <Flex ml="auto" alignItems={"right"}>
            <Button as={Link} href={"/create-post"} textAlign={"right"}>
              Create Post
            </Button>
          </Flex>
        </HStack>
        <VerifyModal />
        {data?.posts ? (
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
                  <Avatar
                    src={p.author.imageUri ? p.author.imageUri : undefined}
                    name={p.author.name}
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
                          href={`/post/${p.id}`}
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
            {data && postCountData?.postCount ? (
              <Flex
                as="nav"
                aria-label="Pagination"
                w="full"
                justifyContent="center"
                alignItems="center"
                mt={{ base: 3, md: 0 }}
              >
                <PaginationButton
                  onClick={() => {
                    parseInt(p.page) > 1
                      ? router.push(`/forum/general/${parseInt(p.page) - 1}`)
                      : undefined;
                  }}
                  borderTopLeftRadius="md"
                  borderBottomLeftRadius="md"
                >
                  Previous
                </PaginationButton>
                {parseInt(p.page) ==
                Math.ceil(postCountData!.postCount / 10) ? (
                  <PaginationButton>{parseInt(p.page) - 2}</PaginationButton>
                ) : null}
                {parseInt(p.page) > 1 ? (
                  <PaginationButton>{parseInt(p.page) - 1}</PaginationButton>
                ) : null}
                <PaginationButton isActive>{p.page}</PaginationButton>
                {parseInt(p.page) < Math.ceil(postCountData!.postCount / 10) ? (
                  <PaginationButton>{parseInt(p.page) + 1}</PaginationButton>
                ) : null}
                {parseInt(p.page) == 1 ? (
                  <PaginationButton>{parseInt(p.page) + 2}</PaginationButton>
                ) : null}
                <PaginationButton
                  onClick={() => {
                    parseInt(p.page) < Math.ceil(postCountData!.postCount / 10)
                      ? router.push(`/forum/general/${parseInt(p.page) + 1}`)
                      : undefined;
                  }}
                  borderTopLeftRadius="md"
                  borderBottomLeftRadius="md"
                >
                  Next
                </PaginationButton>
              </Flex>
            ) : (
              <Box>bob</Box>
            )}
          </Stack>
        ) : null}
      </Container>
    </>
  );
};

export default Forum;
