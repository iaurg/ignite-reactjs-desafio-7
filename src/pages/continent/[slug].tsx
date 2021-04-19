import { Avatar, Box, Flex, Image, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/PageHeader";
import { CityCard } from "../../components/CityCard";

export default function Continent(){
  return(
  <Box pb="12">
    <Header />
    <PageHeader title="Europa" bgImage="https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" />
    <Box maxW="1200" mt="16" mx="auto" px="3">
      <Stack direction={["column", "row"]} spacing="24px">
        <Text w={["100%", "50%"]}>
          A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente 
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o 
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex w={["100%", "50%"]} justifyContent="space-around">
          <Stack alignItems="center">
              <Text fontWeight="bold" color="brand.yellow" fontSize="4xl">50</Text>
              <Text fontWeight="bold">Paises</Text>
          </Stack>
          <Stack alignItems="center">
              <Text fontWeight="bold" color="brand.yellow" fontSize="4xl">50</Text>
              <Text fontWeight="bold">línguas</Text>
          </Stack>
          <Stack alignItems="center">
              <Text fontWeight="bold" color="brand.yellow" fontSize="4xl">50</Text>
              <Text fontWeight="bold">
                cidades +100 {' '}
                <Tooltip label="Com base em pesquisas" aria-label="A tooltip" >
                  <InfoOutlineIcon />
                </Tooltip>
              </Text>
          </Stack>
        </Flex>
      </Stack>

      <Text color="brand.darkgray" fontWeight="medium" mx="auto"
      textAlign="left" fontSize="2xl" my="8" lineHeight="tall">
        Cidades 100+
      </Text>

      <SimpleGrid columns={4} spacing={10}>
        <CityCard city="Londres" country="Reino Unido" image="https://source.unsplash.com/random" />
      </SimpleGrid>
    </Box>
  </Box>
  )
}