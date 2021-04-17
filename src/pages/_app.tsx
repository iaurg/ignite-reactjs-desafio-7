import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      yellow: "#FFBA08",
      darkgray: "#47585B",
      gray: "#DADADA",
      lightgray: "#F5F8FA",
    },
  },  
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp