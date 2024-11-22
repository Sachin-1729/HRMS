import React, { useState } from "react";
import Headers from "../components/Header";
import { Box, TextField, Button, FormControl, FormHelperText, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

function Dashboard() {
  return (
    <div>

        <Box>
        <Headers title="Dashboard"></Headers>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <Typography variant="h6"> Todays Presents </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography variant="h6"> Todays Presents </Typography>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Box>
            <Typography variant="h6"> Open Projects </Typography>
            </Box>
           <Box>
            </Box>

          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <Typography variant="h6"> Open Tasks </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>

        </Box>
   
   
    </div>
  )
}

export default Dashboard





