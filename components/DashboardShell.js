import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Flex, Link, Avatar, Icon } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
// import Footer from './Footer';
import logo from '../public/logo.png';

const DashboardShell = ({ children }) => {
  const { user } = useAuth();

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
                {/* <Icon name="logo" size="24px" mr={8} /> */}
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
            <NextLink href="/account" passHref>
              <Link>
                <Avatar size="sm" src={user?.photoUrl} />
              </Link>
            </NextLink>
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
