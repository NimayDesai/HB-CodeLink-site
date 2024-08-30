"use client";
import NavBar from "@/components/NavBar";
import {
  useMeQuery,
  useSendVerifyEmailMutation,
} from "@/gql/generated/graphql";
import { useIsAuth } from "@/utils/useIsAuth";
import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const VerifyUser = () => {
  useIsAuth();
  const { data } = useMeQuery();
  const [complete, setComplete] = useState(false);
  const [sendVerifyEmail] = useSendVerifyEmailMutation();
  const verify = async () => {
    if (data?.me) {
      await sendVerifyEmail({
        variables: {
          email: data?.me.email,
        },
      });
      setComplete(true);
    }
  };
  useEffect(() => {
    verify();
  }, [data?.me?.email]);

  return (
    <>
      <NavBar />
      <Box maxW="4xl" m="auto">
        {complete ? (
          <Alert status="info">
            <AlertIcon />
            Verification email sucessfully sent
          </Alert>
        ) : (
          <Box>Sending...</Box>
        )}
      </Box>
    </>
  );
};

export default VerifyUser;
