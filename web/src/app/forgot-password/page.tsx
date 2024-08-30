"use client";
import { InputField } from "@/components/InputField";
import NavBar from "@/components/NavBar";
import { useForgotPasswordMutation } from "@/gql/generated/graphql";
import { Alert, AlertIcon, Box, Button, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";

const ForgotPassword: React.FC<{}> = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const [complete, setComplete] = useState(false);
  return (
    <>
      <NavBar />
      <Box maxW="xl" mt={24} m="auto">
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async (values) => {
            console.log("bo");
            await forgotPassword({ variables: values });
            setComplete(true);
          }}
        >
          {() =>
            complete ? (
              <Alert status="info">
                <AlertIcon />
                If the email links to an existing account, the email has been
                checked. If you can not find it please check the spam folder
              </Alert>
            ) : (
              <Form>
                <Heading mb={4} size={"xl"}>
                  Change Password
                </Heading>

                <InputField
                  name="email"
                  label="Email"
                  placeholder="email"
                  type="email"
                />
                <Button mt={4} type="submit" colorScheme="green">
                  Forgot Password
                </Button>
              </Form>
            )
          }
        </Formik>
      </Box>
    </>
  );
};

export default ForgotPassword;
