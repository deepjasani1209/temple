import React from "react";
import NavbarSign from "../checkoutform/NavbarSign";
import NavigationBar from "../checkoutform/NavigationBar";
import Footer from "../checkoutform/Footer";
import { Container } from "react-bootstrap";
import { Box, Grid, Typography,Button } from "@mui/material";
import HomeNavbar from "../checkoutform/HomeNavbar";
import Data from "./Aboutdata";
import Employee from "./../checkoutform/images/employee.png"
import employeeOk from "./../checkoutform/images/employeeOk.png"
import Update from "../checkoutform/Update";
function Aboutpage() {
    
  return (
    <>
      <NavbarSign />
      <NavigationBar />
      <HomeNavbar />

      <Container>
      <Grid container>
          <Grid item xs={12} display="flex">
            <Box mt={5}>
              <Grid container>
        {
            Data.map((index)=>{
                return (
                    <Grid item md={4} xs={12}>
                    <Grid container>
                      <Grid item md={3} xs={12} mt={4}>
                        {index.image}
                      </Grid>
                      <Grid item xs>
                        <Grid container>
                          <Grid item md={10} xs={12}>
                            <Typography
                              style={{ fontSize: "24px", fontWeight: "600" }}
                            >
                             {index.name}
                            </Typography>
                            <Typography
                              mt={2}
                              style={{
                                fontSize: "14px",
                                fontWeight: "400",
                                color: "#5E6D77",
                                textAlign:"start",
                                lineHeight:"25px"
                              }}
                            >
                              {index.description}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

        )
            })
        }
         
                
              </Grid>
            </Box>
          </Grid>
        </Grid>


       <Grid container mt={12}>
        <Grid item md={12} lg={12} sm={12} xs={12}>
            <Box>
            <Grid container>
                <Grid lg={7} md={12} sm={12} sx={{display:{xs:'none',sm:'flex',md:'flex'},justifyContent:{md:'center'}}} ><img src={Employee} style={{borderRadius:'20px'}} /></Grid>
                <Grid lg={5} md={12} sm={12}> 
                    <Grid sm={12}  fontSize="45px" fontWeight="600"  textAlign="start">About Us</Grid>
                    <Grid sm={12} mt={4}  fontSize="16px" color="#5E6D77" textAlign="start" lineHeight="27px">Welcome to [Company Name]! We're a team of passionate individuals who love providing our customers with high-quality products and excellent service. Our mission is to make your shopping experience as seamless and enjoyable as possible, so you can find exactly what you need without any hassle.</Grid>
                    <Grid sm={12} mt={3}  fontSize="16px" color="#5E6D77" textAlign="start" lineHeight="27px">At [Company Name], we believe in offering a wide selection of products that cater to every taste and budget. Whether you're looking for the latest fashion trends, high-tech gadgets, or home decor essentials, we've got you covered. We source our products from trusted suppliers to ensure that you receive only the best quality items.</Grid>
                    <Grid sm={12} mt={5}  display="flex" justifyContent="start"><Button style={{backgroundColor:"#5191FA",color:"#FFFFFF"}}>Explore Products</Button></Grid>
                </Grid>
                </Grid>
            </Box>
        </Grid>
        </Grid>

        


        <Grid item lg={12} md={12} sm={12}  sx={{mt:{md:8,xs:2},ml:{md:5}}}>
            <Box>
            <Grid container>
                <Grid lg={5}  md={12} sm={12} >
                    <Grid md={12}   sm={12} fontSize="45px" fontWeight="600"  textAlign="start">Quality is our top priority. Shop with confidence.</Grid>
                    <Grid md={12}   sm={12} mt={3} fontSize="16px" color="#5E6D77" textAlign="start" lineHeight="27px">At [Company Name], we're committed to providing our customers with the highest quality products on the market. We believe that when you buy from us, you should be able to trust that you're getting a product that will meet or exceed your expectations. That's why we go above and beyond to source only the best materials and work with trusted manufacturers who share our commitment to quality.</Grid>
                    <Grid md={12}   sm={12} mt={3} fontSize="16px" color="#5E6D77" textAlign="start" lineHeight="27px">We believe that quality is about more than just the materials used to make a product.</Grid>
                    <Grid md={12}   sm={12} mt={4} display="flex" justifyContent="start"><Button style={{backgroundColor:"#5191FA",color:"#FFFFFF"}}>Explore Products</Button></Grid>
                </Grid>
                <Grid lg={6} sm={12}  md={12}  sx={{mt:{md:2,xs:4},ml:{md:12},display:{xs:'none',sm:'flex'}}} ><img src={employeeOk} style={{borderRadius:'20px'}}/></Grid>
                </Grid>
            </Box>
        </Grid>
       

      
        
         
              
      </Container>

      <Update />

      <Footer />
    </>
  );
}

export default Aboutpage;
