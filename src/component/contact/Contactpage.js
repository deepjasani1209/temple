import React from 'react'
import NavbarSign from '../checkoutform/NavbarSign'
import NavigationBar from '../checkoutform/NavigationBar'
import HomeNavbar from '../checkoutform/HomeNavbar'
import { Container } from "react-bootstrap";
import { Box, Grid, Typography,Button,TextField, Hidden } from "@mui/material";
import map from "./../checkoutform/images/map.png"
import laptop from "./../checkoutform/images/laptop.png"
import Update from "../checkoutform/Update";
import Footer from '../checkoutform/Footer';


function Contactpage() {
  return (
    <>
      <NavbarSign />
      <NavigationBar />
      <HomeNavbar />

<Container>
      <Grid container mt={12}>
        <Grid item md={12} sm={12} xs={12}>
            <Box>
            <Grid container >
                <Grid md={5} sm={12} >
                <Grid sm={12}  fontSize="45px" fontWeight="600"  textAlign="start">Stay Connected with ease: Contact us today!</Grid>
                    <Grid sm={12} mt={4}  fontSize="16px" color="#5E6D77" textAlign="start" lineHeight="27px">At [Company Name], we value your feedback and strive to continuously improve our products and services to better meet your needs. So please don't hesitate to contact us with any questions, comments, or concerns - we're always here to listen and help in any way we can.</Grid>
                    <Grid sm={12} mt={3}  fontSize="16px" color="#5E6D77" textAlign="start" lineHeight="27px">We love hearing from our visitors and customers! If you have any questions, comments, or feedback, please don't hesitate to get in touch with us. Our team is dedicated to providing you with the best possible service and support, and we're always here to help. Whether you're looking for help with a product, need more information about our company, or just want to say hello, we would love to hear from you. Feel free to use any of the contact methods below to get in touch with us - we look forward to hearing from you!</Grid>
                  
                </Grid>
                <Grid md={5} sm={12} sx={{ml:{md:15}}}> 
                    <Grid sm={12}  fontSize="45px" fontWeight="600"  textAlign="start">Let's get in touch</Grid>
                    <Grid sm={12} mt={10} backgroundColor="#EEEEEE">
                    <TextField
                        placeholder="Enter Your Name"
                        size="small"
                        fullWidth
                        mt={3}
                       
                      />
                      
                      
                      
                    </Grid>
                    <Grid sm={12} mt={3}  backgroundColor="#EEEEEE">
                    <TextField
                        placeholder="Enter Your Email"
                        size="small"
                        fullWidth
                       
                      />
                    </Grid>
                    <Grid sm={12} mt={3} backgroundColor="#EEEEEE" >
                    <TextField
                        placeholder="Enter Your Message"
                        size="small"
                        fullWidth
                        multiline
                        rows={5}
                        
                       
                      />
                    </Grid>
                    <Grid sm={12} mt={5}  display="flex" justifyContent="start"><Button style={{backgroundColor:"#5191FA",color:"#FFFFFF"}}>Send Message</Button></Grid>
                </Grid>
                </Grid>
            </Box>
        </Grid>
        </Grid>

        <Grid container mt={12}>
        <Grid item md={12} lg={12} sm={12} xs={12}>
            <Box sx={{ width: "100%"}}>
            <Grid container>
                
                <Grid lg={5} md={12} sm={12}> 
                    <Grid lg={5}  md={12} sx={{display:{xs:'none',sm:'flex',md:'flex'},justifyContent:{sm:'center'},ml:{lg:10}}}><img src={laptop} style={{borderRadius:'20px'}} /></Grid>
                    <Grid sm={12} mt={8}  fontSize="16px" lineHeight="27px" sx={{textAlign:{sm:'center',md:'center',lg:'start'},mt:{xs:0,sm:8}}}>
                        <Typography fontSize="22px" fontWeight="600">Mail Address</Typography>
                        <Typography color="#5E6D77">(webmail@gmail.com) (infoweb@gmail.com)</Typography>
                    </Grid>
                    <Grid sm={12} mt={5}  fontSize="16px" textAlign="start" lineHeight="27px"  sx={{textAlign:{sm:'center',md:'center',lg:'start'}}}>
                    <Typography fontSize="22px" fontWeight="600">Phone Number</Typography>
                        <Typography color="#5E6D77">(+000 - 000 - 0000) (+000 - 000 - 0000)</Typography>
                    </Grid>
                    <Grid sm={12} mt={5}  fontSize="16px"  textAlign="start" lineHeight="27px"  sx={{textAlign:{sm:'center',md:'center',lg:'start'}}}>
                    <Typography fontSize="22px" fontWeight="600">Address line</Typography>
                        <Typography color="#5E6D77">Lorem Ipsum is simply dummy text of the printing and</Typography>
                    </Grid>
                </Grid>
                <Grid lg={7} md={12} sm={12} sx={{display:{xs:'none',md:'flex'},justifyContent:{md:'center'},mt:{md:15,lg:0}}} ><img src={map} style={{borderRadius:'20px'}} /></Grid>
                </Grid>
            </Box>
        </Grid>
        </Grid>

        
        </Container>

        <Update />
        <Footer />
    </>
  )
}

export default Contactpage
