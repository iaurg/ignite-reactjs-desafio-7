import { Box, HStack, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/PageHeader";

export default function Continent(){
  return(
  <Box pb="12">
    <Header />
    <PageHeader title="Europa" bgImage="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
    <Box maxW="1200" mt="16" mx="auto" px="3">
      <HStack>
        <Text>
          A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente 
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o 
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Text>
          A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente 
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o 
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </HStack>
    </Box>
  </Box>
  )
}