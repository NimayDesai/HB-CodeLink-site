"use client";

import { InputField } from "@/components/InputField";
import Navbar from "@/components/NavBar";
import { VerifyModal } from "@/components/VerifyModal";
import { useCreatePostMutation, useMeQuery } from "@/gql/generated/graphql";
import { useIsAuth } from "@/utils/useIsAuth";
import { Link } from "@chakra-ui/next-js";
import {
  Alert,
  AlertIcon,
  Button,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  useIsAuth();

  const [createPost, { loading }] = useCreatePostMutation();
  const router = useRouter();
  const [verifiedError, setVerifiedError] = useState(false);
  const { data } = useMeQuery();

  return (
    <>
      <Navbar />
      <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <VerifyModal />
        <Heading size="xl" mb="4" textAlign="center">
          Create Post
        </Heading>
        <Formik
          initialValues={{ title: "", content: "" }}
          onSubmit={async (values) => {
            if (!data!.me!.verified) {
              setVerifiedError(true);
            }
            const response = await createPost({
              variables: { input: values },
              update: (cache) => {
                cache.evict({ fieldName: "posts:{}" });
              },
            });
            if (!response.errors) {
              router.push("/forum/general/1");
            }
          }}
        >
          {() => (
            <Form>
              <Flex
                justifyContent="start"
                alignItems="start"
                flexDirection={"column"}
              >
                {verifiedError ? (
                  <Alert status="error" mb={4}>
                    <AlertIcon /> Your account is not verified. Please verify
                    your account{" "}
                    <Link ml={1} color={"lightblue"} href={"/verify-user"}>
                      here
                    </Link>
                  </Alert>
                ) : null}
                <InputField
                  name="title"
                  label="Title"
                  placeholder="title"
                  headingSize="lg"
                />
                <InputField
                  name="content"
                  type="text"
                  label="Content"
                  headingSize="lg"
                  textarea
                  placeholder="Add your content here..."
                />
                <Button mt={8} type="submit" isLoading={loading}>
                  Create Post
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};

export default CreatePost;
