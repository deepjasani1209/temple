import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Infromation() {
    const params = useParams();
    const { name,lname,email,phone,address,add,city,state,code,country,reqi } = params;
  return (
    <>
    <Container>
      <Box mt={10} ml={10} sx={{ml:{xs:2,sm:10}}}>
        <Box>
          <Grid container columnSpacing={3}>
            <Grid item md={8} xs={12} sm={10}>
              <Grid container>
                <Grid item md>
                  <Typography fontSize="24px" textAlign='start'>Your Information</Typography>
                </Grid>
              </Grid>
              <Grid container border='1px solid #D7DCE3' borderRadius='8px' mt={2}>
                <Grid item md={10} ml={10} xs={12} sx={{ml:{sm:5,xs:0}}}>
                <Box>
              <TableContainer >
      <Table >
          <TableBody>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >First Name</TableCell>
            <TableCell style={{textAlign:'start'}} >{name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >Last name</TableCell>
            <TableCell style={{textAlign:'start'}} >{lname}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >Email</TableCell>
            <TableCell style={{textAlign:'start'}} >{email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >Address Line 1</TableCell>
            <TableCell style={{textAlign:'start'}} >{address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >Address Line 2</TableCell>
            <TableCell style={{textAlign:'start'}} >{add}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >City</TableCell>
            <TableCell style={{textAlign:'start'}} >{city}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >State/Province/Region</TableCell>
            <TableCell style={{textAlign:'start'}} >{state}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >ZIP code/Postal code</TableCell>
            <TableCell style={{textAlign:'start'}} >{code}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >Country</TableCell>
            <TableCell style={{textAlign:'start'}} >{country}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{textAlign:'start'}} >Special Requirements</TableCell>
            <TableCell style={{textAlign:'start'}} >{reqi}</TableCell>
          </TableRow>
          </TableBody>
       
       
      </Table>
    </TableContainer>
              </Box>
                </Grid>
              </Grid>
              
            </Grid>
            <Grid item md={4} sm={10} xs={12} sx={{mt:{xs:5,md:0}}}>
            <Grid container>
              <Grid
                item
                md={12}
                xs={12}
                display="flex"
                alignItems="start"
                fontWeight="500"
                // fontSize="28.36px"
                fontSize='24px'
              >
                Your Booking
              </Grid>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              style={{ border: "1px solid #adb5bd", borderRadius: "10px" }}
              mt={2}
            >
              <Grid container>
                <Grid
                  item
                  md={12}
                  xs={12}
                  display="flex"
                  justifyContent="start"
                  pt={6}
                  pl={2}
                >
                  <Typography style={{ fontSize: "16px",fontWeight:'500' }}>
                    Hyatt Centric Times Square
                  </Typography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid
                  item
                  md={12}
                  xs={12}
                  display="flex"
                  justifyContent="start"
                  pl={2}
                  pb={6}
                  borderBottom="1px solid #adb5bd"
                >
                  <Typography style={{color:'#5E6D77'}}>
                    <i
                      class="fa-solid fa-location-dot"
                      style={{ paddingRight: "13px" }}
                    ></i>
                    Virginia,USA
                  </Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={3}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Email :</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}} fontSize='14px'>{email}</Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={2}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Phone :</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}} fontSize='14px'>{phone}</Typography>
                </Grid>
              </Grid>
              <Grid container pl={2} pt={2}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Room :</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}} fontSize='14px'>Double Room</Typography>
                </Grid>
              </Grid>
              <Grid container pl={2} pt={2}>
              <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Number of rooms</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}} fontSize='14px'>1</Typography>
                </Grid>
              </Grid>
              <Grid container pl={2} pt={2}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Check In :</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}} fontSize='14px'>06/04/2023</Typography>
                </Grid>
              </Grid>
              <Grid container pl={2} pt={2}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Check Out :</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}} fontSize='14px'>06/05/2023</Typography>
                </Grid>
              </Grid>
              <Grid container pl={2} pt={2}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Price :</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}} fontSize='14px'>$300,00</Typography>
                </Grid>
              </Grid>
              <Grid container pl={2} pt={2}>
                <Grid item md={12} xs={12} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Extra:</Typography>
                </Grid>
              </Grid>
              <Grid container pl={2} pt={2}>
                <Grid item md={12} xs={12} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Guest Name: {name}</Typography>
                </Grid>
              </Grid>

              
             

              
              <Grid
                container
                pl={2}
                pt={2}
                pb={5}
                borderBottom="1px solid #adb5bd"
              >
               
            
              </Grid>

              <Grid container pl={2} pt={4}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Discount</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="center">
                  <Typography fontSize='14px' style={{color:'#5E6D77'}}>50%</Typography>
                </Grid>
              </Grid>

              

              <Grid container pl={2} pt={1}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='14px'>Subtotal</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="center">
                  <Typography fontSize='14px' style={{color:'#5E6D77'}}>$150,00</Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={2} pb={4}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography fontSize='18px' style={{ fontSize: "20px"}}>
                    Pay Amount
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="center">
                  <Typography fontSize='18px' style={{ fontSize: "20px",color:'#5E6D77' }}>$346,50</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        </Box>
      </Box>
      </Container>
    </>
  );
}

export default Infromation;
