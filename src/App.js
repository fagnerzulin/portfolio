import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import palette from './constants/palette';
import MainContainer from './components/MainContainer/MainContainer';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        boxSizing: 'border-box',
        bg: palette.white,
        fontFamily: '"Noto Sans", sans-serif',
        color: 'white',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainContainer />
    </ChakraProvider>
  );
}

export default App;
