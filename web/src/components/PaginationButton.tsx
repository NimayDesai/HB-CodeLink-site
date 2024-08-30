import { useColorModeValue, Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PaginationButtonProps extends FlexProps {
  children: ReactNode;
  isActive?: boolean;
  isDisabled?: boolean;
}

export const PaginationButton = ({
  children,
  isDisabled,
  isActive,
  ...props
}: PaginationButtonProps) => {
  const activeStyle = {
    bg: useColorModeValue("gray.300", "gray.700"),
  };
  const borderCol = useColorModeValue("gray.300", "gray.700");

  return (
    <Flex
      p={3}
      px={4}
      fontSize="md"
      fontWeight="500"
      lineHeight={0.8}
      opacity={(isDisabled && 0.7) as number}
      _hover={(!isDisabled && activeStyle) as { bg: string }}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      border="1px solid"
      mr="-1px"
      borderColor={borderCol}
      {...(isActive && activeStyle)}
      {...props}
    >
      {children}
    </Flex>
  );
};
