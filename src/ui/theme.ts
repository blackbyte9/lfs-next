'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

  const theme = createTheme({
    cssVariables: true,
    palette: {
      mode: 'dark',
      primary: {
        main: '#456747',
      },
      secondary: {
        main: '#f50057',
      },
      background: {
        default: '#2d2d2d',
      },
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: {
            variants: [
              {
                props: { severity: 'info' },
                style: {
                  backgroundColor: '#60a5fa',
                },
              },
            ],
          },
        },
      },
    },
  });

export default theme;
