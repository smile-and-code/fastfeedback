import { Button, Flex } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';
import { FacebookIcon, GoogleIcon, TwitterIcon } from '@/styles/icons';

const LoginButtons = () => {
  const auth = useAuth();

  return (
    <Flex direction={['column', 'row']}>
      <Button
        onClick={() => auth.signinWithGoogle()}
        backgroundColor="white"
        color="gray.900"
        variant="outline"
        fontWeight="semibold"
        leftIcon={<GoogleIcon />}
        mt={4}
        mr={2}
        _active={{
          transform: 'scale(0.95)'
        }}
      >
        Continue with Google
      </Button>

      <Button
        onClick={() => auth.signinWithFacebook()}
        colorScheme="facebook"
        fontWeight="semibold"
        leftIcon={<FacebookIcon w="5" h="5" />}
        mt={4}
        mr={2}
        _active={{
          transform: 'scale(0.95)'
        }}
      >
        Continue with Facebook
      </Button>

      <Button
        onClick={() => auth.signinWithTwitter()}
        colorScheme="twitter"
        fontWeight="semibold"
        leftIcon={<TwitterIcon w="5" h="5" />}
        mt={4}
        _active={{
          transform: 'scale(0.95)'
        }}
      >
        Continue with Twitter
      </Button>
    </Flex>
  );
};

export default LoginButtons;
