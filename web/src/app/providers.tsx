// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloWrapper } from "./ApolloWrapper";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloWrapper>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </ApolloWrapper>
  );
}
