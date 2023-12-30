import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Update() {
  return (
    <>
     
     <Grid container style={{backgroundColor:'#F5F5F5'}} sx={{mt:{md:15,xs:10}}}>
      {/* <Container> */}
  <Grid item md={6} xs={12} sx={{p:{md:7,xs:5}}} >
    <Typography fontSize="26px">Get Updates & More</Typography>
    <Typography style={{color:'#5E6D77'}}>Thoughtful thoughts to your inbox</Typography>
  </Grid>
  <Grid item md={6} xs={12} sx={{p:{md:9},pl:{sm:25},pb:{sm:4},pl:{xs:3},pb:{xs:4}}} >
    <Grid container>
        <Grid item md={7} xs={7} sx={{pl:{sm:15,md:0}}}>
        <TextField placeholder="Your Email" size="small" fullWidth />
        </Grid>
        <Grid item  md={3} xs={3} sx={{pl:{xs:2}}}>
        <Button style={{backgroundColor:'#5191FA',color:'#ffffff'}} >Subcribe</Button>
        </Grid>
    </Grid>
  </Grid>

 
</Grid>
    </>
  )
}

export default Update
