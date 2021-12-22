import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../components/layout/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

// GQL
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const UsersQuery = gql`
  query UsersQuery($username: String) {
    users {
      id
      name
      username
      email
      address {
        street
        geo {
          lat
        }

      }
    }
    user(username: $username) {
      id
      username
      email
    }

    addUser(name: "New User", email: "email") {
      user {
        name
        email
      }
    }
  }
`

// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "password" : "Sincere@april.biz",
// "address": {
//   "street": "Kulas Light",
//   "suite": "Apt. 556",
//   "city": "Gwenborough",
//   "zipcode": "92998-3874",
//   "geo": {
//     "lat": "-37.3159",
//     "lng": "81.1496"
//   }
// },


function HomePage() {
  const { data } = useQuery(UsersQuery, {
    variables: {
      username: 'Bret'
    }
  })
  console.log(data)

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
          Next baseline
        </Typography>
      </Container>
     
    </React.Fragment>
  );
}

export default function rootPage() {
  return <HomePage />;
}