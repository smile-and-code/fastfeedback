import React from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  Icon,
  Flex,
  Code
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { FacebookIcon, GoogleIcon, TwitterIcon } from '@/styles/icons';
import { useTheme } from '@/utils/useTheme';

const Feedback = ({ author, text, createdAt, provider, isLast, settings }) => {
  const colorMode = useTheme();
  
  const authorColor = {
    light: 'gray.900',
    dark: 'gray.200'
  };
  
  const textColor = {
    light: 'gray.800',
    dark: 'gray.300'
  };
  
  const dividerColor = {
    light: 'gray.200',
    dark: 'gray.700'
  };

  return (
    <Box borderRadius={4} maxWidth="700px" w="full">
      <Flex align="center">
        <Heading
          size="sm"
          as="h3"
          mb={0}
          color={authorColor[colorMode]}
          fontWeight="semibold"
        >
          {author}
        </Heading>
        {settings?.icons && (
          <Icon
            as={
              provider.includes('google')
                ? GoogleIcon
                : provider.includes('facebook')
                ? FacebookIcon
                : TwitterIcon
            }
            size="13px"
            ml="6px"
          />
        )}
      </Flex>
      {settings?.timestamp && (
        <Text color="gray.500" mb={4} fontSize="xs">
          {format(parseISO(createdAt), 'PPpp')}
        </Text>
      )}

      <Box color={textColor[colorMode]}>
        <Text as="p" mt={4} lineHeight="tall">
          {text}
        </Text>
      </Box>
      {!isLast && (
        <Divider borderColor={dividerColor[colorMode]} mt={6} mb={6} />
      )}
    </Box>
  );
};

export default Feedback;
