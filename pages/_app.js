import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import Drawer from './common/Drawer'
import Footer from './common/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Drawer />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
