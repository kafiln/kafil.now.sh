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
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { MdMenu } from 'react-icons/md';
import { HomeButton } from '../common';

const MobileMenu = ({ pages }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        variant="outline"
        colorScheme="black"
        ref={btnRef}
        onClick={onOpen}
        display={{ md: 'none' }}
      >
        <MdMenu />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <HomeButton onClick={onClose} />
            </DrawerHeader>
            <DrawerBody>
              <Flex
                as="ul"
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
              >
                {pages.map(page => {
                  return (
                    <Box
                      as="li"
                      mx={2}
                      p={2}
                      key={page.name}
                      style={{
                        listStyle: 'none',
                        textTransform: 'capitalize',
                      }}
                    >
                      <Link href={`/${page.name}`}>
                        <a onClick={onClose}>{page.name}</a>
                      </Link>
                    </Box>
                  );
                })}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default MobileMenu;
