"use client";

import NavBar from "@/components/NavBar";
import { VerifyModal } from "@/components/VerifyModal";
import { usePostCountQuery } from "@/gql/generated/graphql";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Table, Text, Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";

const ForumHub: React.FC<{}> = ({}) => {
  const { data } = usePostCountQuery();
  return (
    <>
      <NavBar />
      <VerifyModal />
      <Box mt={8} mx="auto" maxW="6xl">
        <Table>
          <Tbody>
            <Tr>
              <Td>
                <Heading as="h2" size="lg" mb={4}>
                  <Link href={"/forum/announcements"}>Announcements</Link>
                </Heading>
                <Text mb={2}>
                  This category is for important announcements and updates.
                </Text>
              </Td>
              <Td textAlign="center">
                <Text fontSize="2xl">{1}</Text>
                <Text>Post</Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Heading as="h2" size="lg" mb={4}>
                  <Link href={"/forum/general"}>General Discussion</Link>
                </Heading>
                <Text mb={2}>
                  This category is for general discussions and conversations.
                </Text>
              </Td>
              <Td textAlign="center">
                <Text fontSize="2xl">{data?.postCount}</Text>
                <Text>{data?.postCount != 1 ? "Posts" : "Post"}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default ForumHub;
