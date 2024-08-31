import { useMeQuery } from "@/gql/generated/graphql";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export const VerifyModal: React.FC<{}> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useMeQuery();
  React.useEffect(() => {
    if (data?.me && !data.me.verified) {
      onOpen();
    }
  }, [data?.me, onOpen]);

  const router = useRouter();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please verify account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          CodeLink has detected that you have not verified your account yet. You
          will need to verify your account to access most features
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              router.push("/verify-user");
            }}
          >
            Verify Account
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
