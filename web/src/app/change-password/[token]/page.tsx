"use client";
import { InputField } from "@/components/InputField";
import NavBar from "@/components/NavBar";
import { useChangePasswordMutation } from "@/gql/generated/graphql";
import { toErrorMap } from "@/utils/toErrorMap";
import { Alert, AlertIcon, Box, Button, Heading } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "@chakra-ui/next-js";

export default function ChangePassword({
  params: p,
}: {
  params: { token: string };
}) {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const [tokenError, setTokenError] = useState("");
  return (
    <>
      <NavBar />
      <Box maxW="xl" mt={24} m="auto">
        <Formik
          initialValues={{ newPassword: "" }}
          onSubmit={async (values, { setErrors }) => {
            const response = await changePassword({
              variables: { newPassword: values.newPassword, token: p.token },
            });
            if (response.data?.changePassword.errors) {
              const errorMap = toErrorMap(response.data.changePassword.errors);
              if ("token" in errorMap) {
                setTokenError(errorMap.token);
              }
              setErrors(errorMap);
            } else if (response.data?.changePassword.user) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Heading mb={4} size={"xl"}>
                Change Password
              </Heading>

              {tokenError ? (
                <Alert status="error">
                  <AlertIcon />
                  <Box>{tokenError}</Box>
                  <Link href="/forget-password">
                    Click here to get a new token
                  </Link>
                </Alert>
              ) : null}
              <InputField
                name="newPassword"
                label="New Password"
                placeholder="new password"
                type="password"
              />
              <Button mt={4} type="submit" colorScheme="green">
                Change Password
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
}
