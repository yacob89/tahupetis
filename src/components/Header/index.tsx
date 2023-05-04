import {
  Flex,
  Heading,
  Box,
  Spacer,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      backgroundColor="rgba(255, 255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
      w="100%"
      className="p-4 mb-8"
    >
      <Box p="2">
        <Heading size="md">Chakra App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
