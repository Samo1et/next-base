import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


function HomePage() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Next base
          </Typography>
          <nav>

          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Typography>
      </Container>
     
    </React.Fragment>
  );
}

export default function rootPage() {
  return <HomePage />;
}