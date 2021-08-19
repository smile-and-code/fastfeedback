import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      html: {
        minWidth: '360px',
        scrollBehavior: 'smooth'
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }
    }
  },
  colors: {
    brand: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A'
    }
  },
  fonts: {
    body: `Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  }
});

export default theme;
