import React from "react";
import map from "./../checkoutform/images/Ico_maps.png";
import fram from "./../checkoutform/images/Frame.png";
import svg from "./../checkoutform/images/SVG.png";
import imgSilder from "./../checkoutform/images/img_slider.png";
import imgSilder2 from "./../checkoutform/images/img_silder_1.png";
import imgSilder3 from "./../checkoutform/images/img_silder_3.jpg";
import NavbarSign from "../checkoutform/NavbarSign";
import NavigationBar from "../checkoutform/NavigationBar";
import { Typography, Grid, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import HomeNavbar from "../checkoutform/HomeNavbar";
import Data from "./templedata";
import hotal from "./../checkoutform/images/Link.png";
import Rating from "@mui/material/Rating";
import Room from "./roomdata";
import Update from "../checkoutform/Update";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../checkoutform/Footer";
import SilderContent from "./SilderContent";
import Slider from "react-slick";
import "./silderstyle.css";
import Sildertemple from "./Sildertemple";

// import Typography from '@mui/material/Typography';

function Homepage() {
  return (
    <>
      <NavbarSign />
      <NavigationBar />
      <HomeNavbar />

      <Typography
        textAlign="start"
        sx={{ ml: { md: 5 } }}
        fontSize={"28.36px"}
        fontWeight={"600"}
        mt={8}
      >
        Explore Gujarat
      </Typography>
      <Typography
        textAlign="start"
        sx={{ ml: { md: 5 } }}
        fontSize={"17.73px"}
        color={"#474747"}
      >
        These popular destinations have a lot to offer
      </Typography>
      <Sildertemple />

      {/* <Carousel zIndex="1">
        <Carousel.Item>
          <img className="d-block w-100" src={imgSilder} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgSilder2}
            alt="Second slide"
            style={{ height: "476px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgSilder3}
            alt="Third slide"
            style={{ height: "476px" }}
          />
        </Carousel.Item>
      </Carousel>

      <SilderContent /> */}

      <Container>
        <Typography fontSize="28px" fontWeight="600" mt={3}>
          Top Destinations
        </Typography>

        <Grid container>
          <Grid item xs={12} display="flex">
            <Box>
              <Grid container>
                {Data.map((index) => {
                  return (
                    <Grid item lg={4} md={6} sm={12} xs={12} zIndex={-1} mt={5}>
                      <img
                        src={index.image}
                        style={{
                          height: "370px",
                          width: "417.33px",
                          borderRadius: "8px",
                        }}
                      />
                      <Grid
                        style={{ width: "250px" }}
                        fontWeight="800"
                        mt={-15}
                        sx={{ ml: { md: 12, sm: 28, xs: 10 } }}
                        color="#ffff"
                      >
                        <Typography fontSize="34px">{index.name}</Typography>
                        <Typography>
                          {index.activities} Activities • {index.car} Cars •{" "}
                          {index.hotels} Hotels
                        </Typography>
                        <Typography>
                          {index.rental} Rentals • {index.tours} Tours
                        </Typography>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} mt={10}>
            <Grid container display="flex" justifyContent="space-around">
              {Room.map((index) => {
                return (
                  <Grid
                    item
                    lg={2.8}
                    md={3.9}
                    sm={5.2}
                    xs={9}
                    align="start"
                    border="1px solid #DFDFDF"
                    borderRadius="8px"
                    mt={4}
                  >
                    <img src={hotal} width="302px" />
                    <Typography
                      align="start"
                      fontSize="18px"
                      fontWeight={600}
                      mt={3}
                      pl={2}
                    >
                      {index.name}
                    </Typography>
                    <Typography color="#5E6D77" pl={2}>
                      <img src={map} /> {index.loaction}
                    </Typography>
                    <Rating
                      name="half-rating"
                      style={{ paddingLeft: "12px", marginTop: "30px" }}
                    />
                    <Grid container>
                      <Grid item xs={12} mt={1} pl={2} mb={3}>
                        <Grid container>
                          <Grid item xs={4} color="#5E6D77">
                            <img src={svg} /> {index.time}
                          </Grid>
                          <Grid item xs={8} pl={6}>
                            <img src={fram} />
                            <span style={{ color: "5E6D77" }}> from </span>
                            <span color="#1A2B48" style={{ fontWeight: "600" }}>
                              {index.price}
                            </span>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Update />
      <Footer />
    </>
  );
}

export default Homepage;
