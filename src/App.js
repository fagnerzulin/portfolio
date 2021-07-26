import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import palette from './constants/palette';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        boxSizing: 'border-box',
        bg: palette.white,
        fontFamily: '"Noto Sans", sans-serif',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>Olá</div>
    </ChakraProvider>
  );
}

export default App;
