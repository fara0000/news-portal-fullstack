import React from 'react';
import { theme } from '../theme';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import 'macro-css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
  )
}

export default MyApp
