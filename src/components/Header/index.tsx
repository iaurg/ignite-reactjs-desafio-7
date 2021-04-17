import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return(
    <Flex 
      as="header"
      mx="auto"
      justifyContent="center"
      py="6"
    >
      <Image height={["8", "10", "14"]} src="images/logo.svg" />
    </Flex>
  )
}