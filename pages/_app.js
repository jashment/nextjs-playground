import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Drawer from './common/Drawer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Drawer />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
