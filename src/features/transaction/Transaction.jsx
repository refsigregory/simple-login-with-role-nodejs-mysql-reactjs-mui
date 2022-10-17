import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { Copyright } from '../../componets/Copyrights';
import { DashboardComponent } from '../../componets/DashboardComponent';
import { useNavigate } from 'react-router-dom';

export default function Transaction() {
  const replace = useNavigate();
  const [authData] = useState(
    JSON.parse(localStorage.getItem('authData')) || false
  );

  useEffect(() => {
    /**
     * Check Authentication
     */
    if (authData) {
      /**
       * Set Role Access
       */
      if (!authData.roles.includes('ROLE_ADMIN') && !authData.roles.includes('ROLE_USER')) {
        replace('/access-denied');
      }
    } else {
      replace('/login');
    }
  });

  return <DashboardComponent 
            title="Transaction"
            component={
    <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  }/>;
}