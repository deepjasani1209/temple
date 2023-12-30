import { Grid, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";

function SilderContent() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={4}
          textAlign="start"
          ml={20}
          mt={-35}
          position="relative"
          color="#FFFFFF"
        >
          <Typography fontSize="51px" fontWeight={500}>
            Hi There!
          </Typography>
          <Typography fontSize={"18px"} fontWeight={500}>
            Where would you like to go?
          </Typography>
        </Grid>
        {/* <Grid container>
          <Grid item xs={6}>
            <Button>Temple</Button>
            <Button>Temple</Button>
          </Grid>
        </Grid> */}
      </Grid>
    </>
  );
}

export default SilderContent;
