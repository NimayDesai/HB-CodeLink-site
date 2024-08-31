"use client";
import { InputField } from "@/components/InputField";
import {
  MeDocument,
  MeQuery,
  useRegisterAdminMutation,
} from "@/gql/generated/graphql";
import { toErrorMap } from "@/utils/toErrorMap";
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";

const RegisterAdmin = () => {
  const colors = useColorModeValue("white", "gray.700");
  const [registerAdmin] = useRegisterAdminMutation();
  const router = useRouter();
  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://bit.ly/2k1H1t6"
        />
      </Flex>

      <Flex p={8} flex={1} align="center" justifyContent="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="5xl">Sign in to your account</Heading>
          </Stack>
          <Formik
            initialValues={{
              username: "",
              name: "",
              email: "",
              password: "",
              adminPass: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              const response = await registerAdmin({
                variables: {
                  adminPass: values.adminPass,
                  options: {
                    username: values.username,
                    email: values.email,
                    name: values.name,
                    password: values.password,
                  },
                },
                update: (cache, { data }) => {
                  cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      me: data?.registerAdmin.user,
                    },
                  });
                },
              });
              if (response.data?.registerAdmin.errors) {
                setErrors(toErrorMap(response.data.registerAdmin.errors));
              } else if (response.data?.registerAdmin.user) {
                router.push("/");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <VStack
                  spacing={8}
                  boxSize={{ base: "xs", sm: "sm", md: "md" }}
                  h="max-content !important"
                  bg={colors}
                  rounded="lg"
                  boxShadow="lg"
                  p={{ base: 5, sm: 10 }}
                >
                  <VStack spacing={4} w="100%">
                    <InputField
                      name="username"
                      placeholder="username"
                      label="Username"
                    />
                    <InputField
                      name="name"
                      placeholder="enter your display name"
                      label=" Display Name"
                    />
                    <InputField
                      name="email"
                      placeholder="email"
                      label="Email"
                    />
                    <InputField
                      name="adminPass"
                      placeholder="Admin password"
                      label="Admin Password"
                      type="password"
                    />
                    <InputField
                      name="password"
                      placeholder="password"
                      label="Password"
                      type="password"
                    />
                  </VStack>
                  <VStack w="100%">
                    <Stack
                      direction="row-reverse"
                      justifyContent="space-between"
                      w="100%"
                    >
                      <Link fontSize={{ base: "md", sm: "md" }}>
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      mt="8"
                      bg="green.300"
                      color="white"
                      _hover={{
                        bg: "green.500",
                      }}
                      rounded="md"
                      w="100%"
                      isLoading={isSubmitting}
                      type="submit"
                    >
                      Register
                    </Button>
                  </VStack>
                </VStack>
              </Form>
            )}
          </Formik>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default RegisterAdmin;
