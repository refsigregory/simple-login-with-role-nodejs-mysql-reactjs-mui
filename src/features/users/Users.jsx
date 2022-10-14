import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import {
  retrieveUsers,

} from './usersSlice';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';

import { Copyright } from '../../componets/Copyrights';
import { DashboardComponent } from '../../componets/DashboardComponent';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'username',
    headerName: 'Username',
    width: 200
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 250
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 100,
  },
];


function Users(props) {
  const { users } = props;

  useEffect(() => {
    props.retrieveUsers();
  }, []);

  console.log(users);
  return <DashboardComponent 
          title="Users"
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
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  }/>;
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { retrieveUsers })(Users);
