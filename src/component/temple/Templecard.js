import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Temple from "./tmpData";
import hotal from "./../checkoutform/images/Link.png";

function Templecard({ menuData }) {
  return (
    <>
      {/* <Container> */}
      <Grid container>
        <Grid item xs={9} mt={-75} ml={50}>
          <Grid container display="flex" justifyContent={"space-around"}>
            {menuData.map((index) => {
              return (
                <Grid
                  item
                  lg={3.6}
                  md={6}
                  sm={5.2}
                  xs={9}
                  align="start"
                  border="1px solid #DFDFDF"
                  borderRadius="8px"
                  mt={4}
                >
                  <img src={hotal} />
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
                    {index.location}
                  </Typography>

                  <Grid container>
                    <Grid item xs={12} mt={1} pl={2} mb={3}>
                      <Typography>{index.review}</Typography>
                    </Grid>
                    <Grid item xs={12} mt={1} pl={2} mb={3}>
                      <Typography>{index.price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
}

export default Templecard;
