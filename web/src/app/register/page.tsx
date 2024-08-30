"use client";
import { InputField } from "@/components/InputField";
import {
  MeDocument,
  MeQuery,
  useRegisterMutation,
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

const Register = () => {
  const colors = useColorModeValue("white", "gray.700");
  const [register] = useRegisterMutation();
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
            initialValues={{ username: "", name: "", email: "", password: "" }}
            onSubmit={async (values, { setErrors }) => {
              const response = await register({
                variables: values,
                update: (cache, { data }) => {
                  cache.writeQuery<MeQuery>({
                    query: MeDocument,
                    data: {
                      __typename: "Query",
                      me: data?.register.user,
                    },
                  });
                },
              });
              if (response.data?.register.errors) {
                setErrors(toErrorMap(response.data.register.errors));
              } else if (response.data?.register.user) {
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

export default Register;
