"use client";
import { InputField } from "@/components/InputField";
import Navbar from "@/components/NavBar";
import {
  useCommentsQuery,
  useCreateCommentMutation,
  useMeQuery,
  usePostSuspenseQuery,
} from "@/gql/generated/graphql";
import { calculateDateDifference } from "@/utils/calcDifference";
import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  Image,
  InputGroup,
  Link,
  Spinner,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Suspense } from "react";

function Post({ params: p }: { params: { id: string } }) {
  const textColor = useColorModeValue("gray.500", "gray.200");

  const { data: meData } = useMeQuery();
  const { data } = usePostSuspenseQuery({
    variables: {
      id: parseInt(p.id),
    },
  });
  const { data: commentsData, fetchMore } = useCommentsQuery({
    variables: {
      limit: 10,
      postId: parseInt(p.id),
    },
  });
  const [createComment] = useCreateCommentMutation();
  const timeAgo = calculateDateDifference(data.post?.createdAt);
  const timeUpdatedAgo = calculateDateDifference(data.post?.updatedAt);

  return (
    <>
      <Navbar />
      <Box m="auto" maxW="4xl">
        <Suspense fallback={<Spinner size={"xl"} />}>
          {data.post ? (
            <Box>
              <Box
                p={4}
                bg={useColorModeValue("white", "gray.800")}
                rounded="xl"
                borderWidth="1px"
                borderColor={useColorModeValue("gray.100", "gray.700")}
                textAlign={"left"}
                _hover={{ shadow: "lg" }}
              >
                {/* <Image
                  src={
                    data.post?.author.imageUri
                      ? data.post.author.imageUri
                      : undefined
                  }
                  width={33}
                  height={33}
                  rounded="md"
                  objectFit="cover"
                  alt="cover image"
                  fallbackSrc="https://via.placeholder.com/150"
                /> */}
                <Box mb={2} mr="auto" textAlign={"left"}>
                  <Box ml="auto" position={"absolute"} right={0}></Box>
                  <Heading fontWeight="bold" size={"xl"}>
                    Title: {data.post?.title}
                  </Heading>
                  <Text mt={2}>
                    Created:{" "}
                    {timeAgo.years
                      ? timeAgo.years + " years"
                      : timeAgo.months
                      ? timeAgo.months + " months"
                      : timeAgo.days
                      ? timeAgo.days + " days"
                      : timeAgo.hours
                      ? timeAgo.hours + " hours"
                      : timeAgo.minutes
                      ? timeAgo.minutes + "minutes"
                      : timeAgo.seconds
                      ? timeAgo.seconds + " seconds"
                      : "0 seconds"}{" "}
                    ago
                  </Text>
                  <Text mt={2}>
                    Updated:{" "}
                    {timeUpdatedAgo.days
                      ? timeUpdatedAgo.days + " days"
                      : timeUpdatedAgo.hours
                      ? timeUpdatedAgo.hours + " hours"
                      : timeUpdatedAgo.minutes
                      ? timeUpdatedAgo.minutes + "minutes"
                      : timeUpdatedAgo.seconds
                      ? timeUpdatedAgo.seconds + " seconds"
                      : "0 seconds"}{" "}
                    ago
                  </Text>
                  <Text
                    fontSize="lg"
                    mt={8}
                    fontWeight={"bold"}
                    color={textColor}
                  >
                    Content:
                  </Text>
                  <Text
                    fontSize={"md"}
                    color={useColorModeValue("gray.600", "gray.300")}
                  >
                    {data.post?.content}
                  </Text>
                </Box>
              </Box>
              <Box>
                <Heading mt={8} size="lg" ml={2} mb={4}>
                  Comments
                </Heading>
                <Formik
                  initialValues={{
                    content: "",
                  }}
                  onSubmit={async (values) => {
                    await createComment({
                      variables: { postId: data!.post!.id, ...values },
                      update: (cache) => {
                        cache.evict({ fieldName: "comments:{}" });
                      },
                    });
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <HStack
                        direction={{ base: "column", md: "row" }}
                        m="auto"
                        bg={useColorModeValue("white", "gray.800")}
                        rounded="xl"
                        borderWidth="1px"
                        borderColor={useColorModeValue("gray.100", "gray.700")}
                        w="100%"
                        h="100%"
                        textAlign="left"
                        p={2}
                        align="start"
                        spacing={4}
                        cursor="pointer"
                        _hover={{ shadow: "lg" }}
                      >
                        <Avatar
                          ml={2}
                          size="sm"
                          mt={3}
                          src={
                            meData?.me?.imageUri
                              ? meData.me.imageUri
                              : undefined
                          }
                          name={meData?.me?.name}
                        />
                        <InputGroup size={"md"} mr={2}>
                          <InputField
                            type="text"
                            name="content"
                            label=""
                            placeholder="enter your comment here"
                          />
                        </InputGroup>
                        <Flex m="auto" display={{ base: "none", md: "flex" }}>
                          <Button
                            type="submit"
                            m="auto"
                            mt={1}
                            isLoading={isSubmitting}
                            size={{ base: "md", md: "lg" }}
                          >
                            Comment
                          </Button>
                        </Flex>
                      </HStack>
                      <Flex m="auto" display={{ base: "flex", md: "none" }}>
                        <Button
                          type="submit"
                          m="auto"
                          mt={4}
                          isLoading={isSubmitting}
                          size={{ base: "md", md: "lg" }}
                        >
                          Comment
                        </Button>
                      </Flex>
                    </Form>
                  )}
                </Formik>
                {commentsData ? (
                  <Box>
                    {commentsData.comments.comments.map((c) => (
                      <chakra.div key={c.id}>
                        <HStack
                          p={4}
                          mt={8}
                          bg={useColorModeValue("white", "gray.800")}
                          rounded="xl"
                          borderWidth="1px"
                          borderColor={useColorModeValue(
                            "gray.100",
                            "gray.700"
                          )}
                          w="100%"
                          h="100%"
                          textAlign="left"
                          align="start"
                          spacing={4}
                          cursor="pointer"
                          _hover={{ shadow: "lg" }}
                        >
                          <Avatar
                            name={c.commenter.name}
                            src={
                              c.commenter.imageUri
                                ? c.commenter.imageUri
                                : undefined
                            }
                            width={33}
                            height={33}
                            objectFit="cover"
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
                                  {c.content}
                                </Heading>
                              </HStack>
                            </VStack>
                          </VStack>
                        </HStack>
                      </chakra.div>
                    ))}
                    {commentsData && commentsData.comments.hasMore ? (
                      <Button
                        m="auto"
                        onClick={() => {
                          fetchMore({
                            variables: {
                              limit: 10,
                              cursor:
                                commentsData.comments.comments[
                                  commentsData.comments.comments.length - 1
                                ].id,
                            },
                          });
                        }}
                        mt={2}
                        p={8}
                      >
                        Load More
                      </Button>
                    ) : null}
                  </Box>
                ) : null}
              </Box>
            </Box>
          ) : (
            <div>Failed to Get data. Post may be deleted by user or admin</div>
          )}
        </Suspense>
      </Box>
    </>
  );
}

export default Post;
