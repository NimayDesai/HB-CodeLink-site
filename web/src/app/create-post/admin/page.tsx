"use client";

import { InputField } from "@/components/InputField";
import Navbar from "@/components/NavBar";
import {
  useCreateAnnouncementMutation,
  useMeQuery,
} from "@/gql/generated/graphql";
import { useIsAuth } from "@/utils/useIsAuth";
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

  const [createAnnouncement, { loading }] = useCreateAnnouncementMutation();
  const router = useRouter();
  const [adminError, setAdminError] = useState(false);
  const { data } = useMeQuery();

  return (
    <>
      <Navbar />
      <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <Heading size="xl" mb="4" textAlign="center">
          Create Announcement
        </Heading>
        <Formik
          initialValues={{ title: "", content: "" }}
          onSubmit={async (values) => {
            if (!data!.me!.isAdmin) {
              setAdminError(true);
            }
            const response = await createAnnouncement({
              variables: { input: values },
              update: (cache) => {
                cache.evict({ fieldName: "posts:{}" });
              },
            });
            if (!response.errors) {
              router.push("/forum");
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
                {adminError ? (
                  <Alert status="error" mb={4}>
                    <AlertIcon /> Your account is not an admin accout. You must
                    be an exec
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
