"use client";

import { InputField } from "@/components/InputField";
import SimpleSidebar from "@/components/SettingsSidebar";
import { VerifyModal } from "@/components/VerifyModal";
import { useChangeInfoMutation } from "@/gql/generated/graphql";
import { toErrorMap } from "@/utils/toErrorMap";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";

const AccountSettings = () => {
  const [changeInfo, { loading }] = useChangeInfoMutation();
  return (
    <Box>
      <SimpleSidebar>
        <VerifyModal />
        <Box m="auto" maxW="4xl">
          <Heading size={"2xl"} mt={4}>
            Security
          </Heading>
          <Heading size="xl" mt={16} mb="4">
            Change Info
          </Heading>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              newPassword: "",
              name: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              const response = await changeInfo({
                variables: values,
              });
              if (response.data?.changeInfo.errors) {
                setErrors(toErrorMap(response.data.changeInfo.errors));
              }
            }}
          >
            {() => (
              <Form>
                <VStack spacing={4}>
                  <InputField
                    name="username"
                    label="Username"
                    placeholder="username"
                  />

                  <InputField
                    name="name"
                    label="Display Name"
                    placeholder="display name"
                  />

                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="email"
                  />
                  <InputField
                    name="newPassword"
                    type="password"
                    label="New Password"
                    placeholder="new password"
                  />
                  <InputField
                    name="password"
                    type="password"
                    required
                    label="Current Password *"
                    placeholder="password"
                  />
                  <Button mt={8} type="submit" isLoading={loading}>
                    Change Info
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </SimpleSidebar>
    </Box>
  );
};

export default AccountSettings;
