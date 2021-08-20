import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button, Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import Image from 'next/image';
import logo from '../public/logo.png';

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
        <title>Bibleverses Admin</title>
      </Head>

      <Image src={logo} width={100} height={100} alt="Bibleverses logo" />

      {auth.user ? (
        // <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        <Button onClick={(e) => router.push('/dashboard')}>
          View Dashboard
        </Button>
      ) : (
        <Button size="sm" onClick={(e) => auth.signinWithGoogle()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
