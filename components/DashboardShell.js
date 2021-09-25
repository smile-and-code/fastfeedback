import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Box,
  Flex,
  Link,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  Heading
} from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
// import Footer from './Footer';
import logo from '../public/logo.png';

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #3B82F6"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          py={4}
          px={8}
          maxW="1250px"
          margin="0 auto"
          w="full"
          h="60px"
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src={logo}
                  width={45}
                  height={45}
                  alt="Bibleverses logo"
                />
              </Link>
            </NextLink>
            <NextLink href="/sites" passHref>
              <Link mx={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            <Menu isLazy id="account-menu">
              <MenuButton>
                <Avatar size="sm" src={user?.photoUrl} />
              </MenuButton>
              <MenuList>
                <Flex direction="column" align={'center'}>
                  <Avatar size="md" src={user?.photoUrl} mb={2} />
                  <Heading letterSpacing="-1px" size="md">
                    {user?.name}
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    {user?.email}
                  </Text>
                </Flex>

                <MenuDivider />
                <MenuItem onClick={() => signout()}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
      {/* <Footer /> */}
    </Box>
  );
};

export default DashboardShell;
