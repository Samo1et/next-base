import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../components/layout/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec, reset } from '../store/slice/counterSlice';

function HomePage() {
  const counter = useSelector(store => store.counter)
  const dispatch = useDispatch();

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
            <Link
              variant="button"
              color="text.primary"
              href="/signin"
              sx={{ my: 1, mx: 1.5 }}
            >
              Sign In
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/signup"
              sx={{ my: 1, mx: 1.5 }}
            >
              Sign Up
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          <div>
            <Button onClick={() => dispatch(dec(2))} variant="outlined">-</Button>
            {'    '}{counter}{'    '}
            <Button  onClick={() => dispatch(inc(3))} variant="outlined">+</Button>
          </div>
          <Button onClick={() => dispatch(reset())} variant="contained" >Reset</Button>

        </Typography>
      </Container>
     
    </React.Fragment>
  );
}

export default function rootPage() {
  return <HomePage />;
}