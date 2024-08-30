"use client";

import SimpleSidebar from "@/components/SettingsSidebar";
import { VerifyModal } from "@/components/VerifyModal";
import { useMeQuery, useUploadImgMutation } from "@/gql/generated/graphql";
import { deleteImg } from "@/utils/deleteImg";
import { UploadDropzone } from "@/utils/uploadthing";
import { useIsAuth } from "@/utils/useIsAuth";
import { Avatar, Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
const ProfileSettings: React.FC<{}> = ({}) => {
  const [uploadImg] = useUploadImgMutation();
  useIsAuth();
  const { data } = useMeQuery();

  return (
    <SimpleSidebar>
      <Flex>
        <VerifyModal />
        <Box maxW="4xl" m="auto" alignItems={"center"}>
          <Heading mt={16} textAlign={"center"}>
            Profile Picture
          </Heading>
          <Stack
            alignItems={"center"}
            direction={{ base: "column", md: "row" }}
            mt={16}
          >
            <Avatar
              size={"xl"}
              src={
                data?.me?.imageUri ? (data.me.imageUri as string) : undefined
              }
              name={data?.me?.name}
              mr={4}
            />

            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={async (res) => {
                const uri = res[0].url;
                const oldUri = data?.me?.imageUri;

                await uploadImg({
                  variables: {
                    imageUri: uri,
                  },
                });
                if (oldUri) {
                  await deleteImg(oldUri.slice(18, oldUri.length));
                }
              }}
            />
          </Stack>
        </Box>
      </Flex>
    </SimpleSidebar>
  );
};

export default ProfileSettings;
