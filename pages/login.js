import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useToast
} from '@chakra-ui/react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useAuth } from '@/lib/auth';
import Page from '@/components/Page';
import logo from '@/public/logo.png';

const Login = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const { signinWithEmail } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();

  const onLogin = ({ email, pass }) => {
    setLoading(true);

    signinWithEmail(email, pass).catch((error) => {
      setLoading(false);
      toast({
        title: 'An error occurred.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    });
  };

  return (
    <Flex align="center" justify="center" h="100vh" backgroundColor="gray.100">
      <Stack
        as="form"
        backgroundColor="white"
        borderRadius={[0, 8]}
        errors={errors}
        maxWidth="400px"
        onSubmit={handleSubmit((data) => onLogin(data))}
        px={8}
        py={12}
        shadow={[null, 'md']}
        spacing={4}
        w="100%"
      >
        <Flex justify="center">
          <Box as="a" href="/" aria-label="Back to homepage">
            <Image src={logo} width={100} height={100} alt="Bibleverses logo" />
          </Box>
        </Flex>
        <FormControl
          isInvalid={errors.email && errors.email.message}
          id="email-label"
        >
          <FormLabel>Email Address</FormLabel>
          <Input
            autoFocus
            aria-label="Email Address"
            id="email"
            {...register('email', { required: 'Please enter your email.' })}
            placeholder="name@site.com"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={errors.pass && errors.pass.message}
          id="pass-label"
        >
          <FormLabel>Password</FormLabel>
          <Input
            aria-label="Password"
            id="password"
            type="password"
            {...register('pass', { required: 'Please enter a password.' })}
          />
          <FormErrorMessage>
            {errors.pass && errors.pass.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          id="login"
          type="submit"
          backgroundColor="gray.900"
          color="white"
          isLoading={loading}
          fontWeight="semibold"
          mt={4}
          h="50px"
          fontSize="lg"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          Login
        </Button>
      </Stack>
    </Flex>
  );
};

const LoginPage = () => (
  <Page name="Login" path="/login">
    <Login />
  </Page>
);

export default LoginPage;
