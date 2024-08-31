import { useLogoutMutation, useMeQuery } from "@/gql/generated/graphql";
import { useApolloClient } from "@apollo/client";
import { Link } from "@chakra-ui/next-js";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdForum, MdLogin, MdLogout, MdSettings } from "react-icons/md";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Navbar = () => {
  const { data } = useMeQuery();
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const c1 = useColorMode();
  const router = useRouter();

  return (
    <Container
      maxW="7xl"
      p={{ base: 5, md: 10 }}
      position={"sticky"}
      top={0}
      zIndex={1}
      bg={c1.colorMode === "light" ? "#ffffff" : "#1a202c"}
    >
      <Flex mb="30px" align="center">
        <HStack>
          <Box p="2">
            <motion.div whileHover={{ scale: 1.2 }}>
              <Heading
                as={Link}
                href="/"
                fontSize={{ base: "2xl", sm: "4xl" }}
                bgGradient="linear(to-l, #00f59a,#01f07b)"
                bgClip="text"
                _focus={{ boxShadow: "none", outline: "none" }}
              >
                CodeLink
              </Heading>
            </motion.div>
          </Box>
        </HStack>
        <Spacer />
        <Box>
          <HStack>
            <HStack display={["none", "none", "flex"]} spacing={4}>
              <motion.div whileHover={{ scale: 1.2 }}>
                <Button
                  leftIcon={<MdForum />}
                  bgGradient="linear(to-l, #7928CA,#FF0080)"
                  color="white"
                  variant="solid"
                  size="sm"
                  _hover={{ opacity: 0.9 }}
                  rounded="md"
                  py={6}
                  href={"/forum"}
                  as={Link}
                >
                  Forum
                </Button>
              </motion.div>
              {!data?.me ? (
                <>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Button
                      href="/login"
                      leftIcon={<MdLogin />}
                      bgGradient="linear(to-l, #7928CA,#FF0080)"
                      color="white"
                      variant="solid"
                      size="sm"
                      _hover={{ opacity: 0.9 }}
                      rounded="md"
                      py={6}
                      as={Link}
                    >
                      Login
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Button
                      href="/register"
                      leftIcon={<FaUser />}
                      bgGradient="linear(to-l, #7928CA,#FF0080)"
                      color="white"
                      variant="solid"
                      size="sm"
                      _hover={{ opacity: 0.9 }}
                      rounded="md"
                      py={6}
                      as={Link}
                    >
                      Register
                    </Button>
                  </motion.div>
                </>
              ) : (
                <>
                  <Avatar
                    name={data.me.name}
                    src={data.me.imageUri ? data.me.imageUri : undefined}
                  />
                  <Link href={"/settings/security"}>
                    {data.me.name}{" "}
                    {data.me.isAdmin ? (
                      <Button size={"sm"} colorScheme="red" mx={2}>
                        Admin
                      </Button>
                    ) : null}
                  </Link>
                  <Button
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    color="white"
                    variant="solid"
                    leftIcon={<MdLogout />}
                    size="sm"
                    _hover={{ opacity: 0.9 }}
                    rounded="md"
                    py={6}
                    onClick={async () => {
                      await logout();
                      await apolloClient.resetStore();
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
              <DarkModeSwitch />
            </HStack>
            <Box display={["block", "block", "none"]}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<GiHamburgerMenu />}
                  transition="all 0.2s"
                  size="md"
                  color="white"
                  variant="outline"
                  bg={useColorModeValue("gray.400", "gray.800")}
                  _hover={{ bg: "auto" }}
                  _focus={{ boxShadow: "outline" }}
                />
                <MenuList fontSize="sm" zIndex={5}>
                  <MenuItem
                    icon={<MdForum />}
                    onClick={() => router.push("/forum")}
                  >
                    <Link href="/forum">Forum (Coming Soon)</Link>
                  </MenuItem>
                  {!data?.me ? (
                    <>
                      <MenuItem>
                        <Link href="/login">Login</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link href="/register">Register</Link>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem
                        icon={<MdSettings />}
                        onClick={() => router.push("/settings/security")}
                      >
                        <Link href="/settings/security">Account Settings</Link>
                      </MenuItem>
                      <MenuItem>
                        <Text>
                          Logged in as {data.me.username}{" "}
                          {data.me.isAdmin ? <Button>Admin</Button> : null}
                        </Text>
                      </MenuItem>
                      <MenuItem>
                        <Text
                          onClick={async () => {
                            await logout();
                            await apolloClient.resetStore();
                          }}
                        >
                          Logout
                        </Text>
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </Menu>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
