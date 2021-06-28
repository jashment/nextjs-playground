import { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"

const MainDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
    <IconButton ref={btnRef} colorScheme="blue" onClick={onOpen} icon={<HamburgerIcon />}/>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>

          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MainDrawer;