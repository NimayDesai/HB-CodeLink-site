"use client";
import { InputField } from "@/components/InputField";
import Navbar from "@/components/NavBar";
import {
  useCommentsQuery,
  useCreateCommentMutation,
  useDeleteCommentAdminMutation,
  useMeQuery,
  usePostSuspenseQuery,
} from "@/gql/generated/graphql";
import { calculateDateDifference } from "@/utils/calcDifference";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  HStack,
  IconButton,
  InputGroup,
  Link,
  Spinner,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Suspense, useMemo } from "react";

function Post({ params: p }: { params: { id: string } }) {
  const textColor = useColorModeValue("gray.500", "gray.200");

  const { data: meData } = useMeQuery();
  const { data } = usePostSuspenseQuery({
    variables: {
      id: parseInt(p.id),
    },
  });
  const {
    data: commentsData,
    fetchMore,
    refetch,
  } = useCommentsQuery({
    variables: {
      limit: 10,
      postId: parseInt(p.id),
    },
  });
  refetch();
  const [createComment] = useCreateCommentMutation();
  const [deleteCommentAdmin] = useDeleteCommentAdminMutation();

  const timeAgo = useMemo(
    () => calculateDateDifference(data.post?.createdAt),
    [data.post?.createdAt]
  );
  const timeUpdatedAgo = useMemo(
    () => calculateDateDifference(data.post?.updatedAt),
    [data.post?.updatedAt]
  );
  const c1 = useColorModeValue("white", "gray.800");
  const c2 = useColorModeValue("gray.100", "gray.700");
  const c3 = useColorModeValue("gray.600", "gray.300");
  const c4 = useColorModeValue("gray.100", "gray.700");
  const c5 = useColorModeValue("white", "gray.800");
  const c6 = useColorModeValue("white", "gray.800");
  const c7 = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Navbar />
      <Box m="auto" maxW="4xl">
        <Suspense fallback={<Spinner size={"xl"} />}>
          {data.post ? (
            <Box>
              <Box
                p={4}
                bg={c1}
                rounded="xl"
                borderWidth="1px"
                borderColor={c2}
                textAlign={"left"}
                _hover={{ shadow: "lg" }}
              >
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
                      ? timeAgo.minutes + " minutes"
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
                  <Text fontSize={"md"} color={c3}>
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
                        bg={c6}
                        rounded="xl"
                        borderWidth="1px"
                        borderColor={c4}
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
                          bg={c5}
                          rounded="xl"
                          borderWidth="1px"
                          borderColor={c7}
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
                          {meData?.me?.isAdmin ? (
                            <IconButton
                              onClick={() => {
                                deleteCommentAdmin({
                                  variables: {
                                    deletePostAdminId: c.id,
                                    postId: parseInt(p.id),
                                  },
                                  update: (cache) => {
                                    cache.evict({ id: "Comment:" + c.id });
                                  },
                                });
                              }}
                              icon={<DeleteIcon />}
                              aria-label="Delete Comment"
                              colorScheme="red"
                              ml="auto"
                            />
                          ) : null}
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
