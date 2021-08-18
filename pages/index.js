import Head from 'next/head';
import { Button, Code, Heading, Text } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Bibleverses Admin</title>
      </Head>

      <main>
        <Heading>Bibleverses Admin</Heading>

        <Text>
          Current user: <Code>{auth.user?.email}</Code>
        </Text>

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGoogle()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
