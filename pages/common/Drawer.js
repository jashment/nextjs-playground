import { useRef } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IconButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import styles from '../../styles/Home.module.css'

const MainDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
    <IconButton ref={btnRef} className={styles.menuBtn} onClick={onOpen} icon={<HamburgerIcon />}/>
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
            <a href="/"><p className={styles.card}>Home</p></a>
            <a href="/about"><p className={styles.card}>About</p></a>
            <a href="/funWithApis"><p className={styles.card}>Fun With APIs</p></a>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MainDrawer;