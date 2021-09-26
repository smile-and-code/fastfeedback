import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Flex, Stack } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import Image from 'next/image';
import logo from '@/public/logo.png';

import { FacebookIcon, GoogleIcon, TwitterIcon } from '@/styles/icons';

const Home = () => {
  const router = useRouter();
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      margin="auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('bibleverses-auth')) {
                window.location.href = "/sites"
              }
            `
          }}
        />
      </Head>

      <Image src={logo} width={100} height={100} alt="Bibleverses logo" />

      {auth.user ? (
        <Button onClick={(e) => router.push('/sites')}>View Dashboard</Button>
      ) : (
        <Stack spacing={4}>
          <Button
            onClick={(e) => auth.signinWithGoogle()}
            leftIcon={<GoogleIcon />}
            size="lg"
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="semibold"
            _active={{
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Google
          </Button>

          <Button
            onClick={(e) => auth.signinWithFacebook()}
            leftIcon={<FacebookIcon w="5" h="5" />}
            size="lg"
            fontWeight="semibold"
            colorScheme="facebook"
            _active={{
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Facebook
          </Button>

          <Button
            onClick={(e) => auth.signinWithTwitter()}
            colorScheme="twitter"
            leftIcon={<TwitterIcon w="5" h="5" />}
            size="lg"
            fontWeight="semibold"
            _active={{
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Twitter
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Home;
