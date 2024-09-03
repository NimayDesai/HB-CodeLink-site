"use client";
import { InputField } from "@/components/InputField";
import { MeDocument, MeQuery, useLoginMutation } from "@/gql/generated/graphql";
import { toErrorMap } from "@/utils/toErrorMap";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { Link } from "@chakra-ui/next-js";
import { useSearchParams, useRouter } from "next/navigation";

const Login = () => {
  const colors = useColorModeValue("white", "gray.700");
  const [login] = useLoginMutation();
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get("next");
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
            initialValues={{ usernameOrEmail: "", password: "" }}
            onSubmit={async (values, { setErrors }) => {
              const response = await login({
                variables: values,
                update: (cache, { data }) => {
                  cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      me: data?.login.user,
                    },
                  });
                  cache.evict({ fieldName: "posts:{}" });
                },
              });
              if (response.data?.login.errors) {
                setErrors(toErrorMap(response.data.login.errors));
              } else if (response.data?.login.user) {
                if (typeof search === "string") {
                  router.push(search);
                } else {
                  router.push("/");
                }
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
                      name="usernameOrEmail"
                      placeholder="username or email"
                      label="Username or Email"
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
                      <Link
                        fontSize={{ base: "md", sm: "md" }}
                        href="/forgot-password"
                      >
                        Forgot password?
                      </Link>
                      <Link fontSize={{ base: "md", sm: "md" }} href="register">
                        Create Account
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
                      Login
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

export default Login;
