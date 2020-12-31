import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";

const MobileMenu = ({ pages }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box visibility={{ base: "visible", md: "hidden" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <MdMenu />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Flex
                as="ul"
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
              >
                {pages.map((page) => {
                  return (
                    <Box
                      as="li"
                      mx={2}
                      p={2}
                      key={page.name}
                      style={{
                        listStyle: "none",
                        textTransform: "capitalize",
                      }}
                    >
                      <Link onClick={onClose} href={`/${page.name}`}>
                        {page.name}
                      </Link>
                    </Box>
                  );
                })}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileMenu;