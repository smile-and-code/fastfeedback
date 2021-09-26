import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Button, Flex, Link } from '@chakra-ui/react';
import logo from '@/public/logo.png';

const Navbar = () => {
  return (
    <Flex backgroundColor="white" mb={4} w="full" borderTop="5px solid #3B82F6">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        pt={[4, 8]}
        pb={[4, 8]}
        maxW="950px"
        margin="0 auto"
        w="full"
        px={8}
        h="60px"
      >
        <Flex align="center">
          <NextLink href="/" passHref>
            <Link>
              <Image src={logo} width={45} height={45} alt="Bibleverses logo" />
            </Link>
          </NextLink>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <NextLink href="/sites" passHref>
            <Link mr={4} fontWeight="semibold">
              Sites
            </Link>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button
              backgroundColor="gray.900"
              color="white"
              h="32px"
              fontWeight="semibold"
              _hover={{ bg: 'gray.700' }}
              _active={{
                bg: 'gray.800',
                transform: 'scale(0.95)'
              }}
            >
              Login
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
