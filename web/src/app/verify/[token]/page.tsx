"use client";

import NavBar from "@/components/NavBar";
import { useMeQuery, useVerifyUserMutation } from "@/gql/generated/graphql";
import { toErrorMap } from "@/utils/toErrorMap";
import { Link } from "@chakra-ui/next-js";
import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Verify({ params: p }: { params: { token: string } }) {
  const { data } = useMeQuery();
  const [verifyUser] = useVerifyUserMutation();
  const [verified, setVerified] = useState(false);
  const [tokenError, setTokenError] = useState("");

  const verify = async () => {
    const response = await verifyUser({
      variables: {
        token: p.token,
      },
    });
    if (response.data?.vefifyUser.errors) {
      const errorMap = toErrorMap(response.data.vefifyUser.errors);
      if ("token" in errorMap) {
        setTokenError(errorMap.token);
      }
    } else if (response.data?.vefifyUser.user) {
      setVerified(true);
    }
  };

  if (data?.me) {
    verify();
  }

  return (
    <>
      <NavBar />
      <Box maxW="4xl" m="auto">
        {verified ? (
          <Alert status="success">
            <AlertIcon />
            You have sucessfully verified, your account is now verified
          </Alert>
        ) : tokenError ? (
          <Alert status="error">
            <AlertIcon />
            Invalid URL. Please <Link href={"/verify-user"}>try again</Link>
          </Alert>
        ) : (
          <Box>Verifying user...</Box>
        )}
      </Box>
    </>
  );
}
