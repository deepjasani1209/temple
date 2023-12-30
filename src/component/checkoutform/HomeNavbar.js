import React from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router-dom";

function HomeNavbar() {
  const location = useLocation();
  console.log(location);

  const array = location.pathname.split("/");
  return (
    <>
      <Grid
        container
        sx={{
          borderBottom: 1,
          borderColor: "grey.500",
          lineHeight: { xs: 4 },
          pt: { xs: 0, md: 20, sm: 18 },
          fontSize: { xs: 12, sm: 16, md: 18 },
        }}
      >
        <Grid
          item
          md
          alignItems="center"
          justifyContent="center"
          display="flex"
          xs={2}
        >
          Home
        </Grid>
        <Grid
          item
          md={8}
          style={{ display: "flex", alignItems: "center" }}
          mr={10}
          xs={7}
        >
          {array[1]}
        </Grid>
      </Grid>
    </>
  );
}

export default HomeNavbar;
