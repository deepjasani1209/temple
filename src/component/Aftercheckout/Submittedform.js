import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Container } from 'react-bootstrap'
import done from './../checkoutform/images/done.png'
import { Link, useParams } from "react-router-dom";

function Submittedform() {
  const params = useParams();
    const { name,email } = params;
  return (
    <>
    <Container>
      <Box>
        <Box>
            <Grid container mt={10}>
                <Grid item md={9} xs={12}> 
                    
                    <Grid container display='flex' alignItems='center' columnSpacing={4}>
                       <Grid item xs={0} md={2} textAlign='end' ml={5}><img src={done} /></Grid>
                       <Grid item xs textAlign='start'>
                        <Typography fontSize='24px' sx={{fontSize:{xs:'16px',md:'24px'}}}>{name}, your order was submitted successfully!</Typography>
                        <Typography sx={{fontSize:{xs:'14px'}}}>Booking details has been sent to: {email}</Typography>
                       </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} xs={10} sm={10} sx={{textAlign:{xs:'start'},ml:{sm:30,xs:5,md:0},mt:{xs:5,md:0}}} textAlign='start' borderLeft='3px solid #5191FA' pl={2}>
                <Typography pb={1}>Booking Number: 16388</Typography>
                <Typography pb={1}>Booking Date: 06/04/2023</Typography>
                <Typography pb={1}>Payment Method: Bank Transfer</Typography>
                <Typography>Status: Pending</Typography>
                </Grid>
            </Grid>
        </Box>
      </Box>
      </Container>
    </>
  )
}

export default Submittedform
