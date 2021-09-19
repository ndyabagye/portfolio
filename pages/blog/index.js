import { Typography, Grid } from '@material-ui/core';
import React from 'react';

function blog() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          Blog Page
          <Typography variant="h5">Welcome to the blog page</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default blog;
