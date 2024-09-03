"use client";

import NavBar from "@/components/NavBar";
import { VerifyModal } from "@/components/VerifyModal";
import {
  usePostAnnouncementCountQuery,
  usePostGeneralCountQuery,
} from "@/gql/generated/graphql";
import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Table, Text, Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";

const ForumHub: React.FC<{}> = ({}) => {
  const { data, refetch } = usePostGeneralCountQuery();
  const { data: announcementData, refetch: refetch2 } =
    usePostAnnouncementCountQuery();
  refetch();
  refetch2();
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
                  <Link href={"/forum/announcements/1"}>Announcements</Link>
                </Heading>
                <Text mb={2}>
                  This category is for important announcements and updates.
                </Text>
              </Td>
              <Td textAlign="center">
                <Text fontSize="2xl">
                  {announcementData?.postAnnouncementCount}
                </Text>
                <Text>
                  {announcementData?.postAnnouncementCount != 1
                    ? "Posts"
                    : "Post"}
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Heading as="h2" size="lg" mb={4}>
                  <Link href={"/forum/general/1"}>
                    General Discussion and Questions
                  </Link>
                </Heading>
                <Text mb={2}>
                  This category is for general discussions, conversations and
                  questions.
                </Text>
              </Td>
              <Td textAlign="center">
                <Text fontSize="2xl">{data?.postGeneralCount}</Text>
                <Text>{data?.postGeneralCount != 1 ? "Posts" : "Post"}</Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default ForumHub;
