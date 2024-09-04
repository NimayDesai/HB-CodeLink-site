"use client";
import { Box, Spinner, Text } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box>
      <Spinner size={"xl"} />
      <Text>Loading...</Text>
    </Box>
  );
}
