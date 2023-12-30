import React from "react";
import Grid from "@mui/material/Grid";
import logo from "././images/logo.png";
import store from "./images/store.png";
import search from "./images/search.png";
import { Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Link } from "react-router-dom";

// import MenuIcon from '@mui/icons-material/Menu';

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement;
//   },
//   ref: React.Ref<unknown>,
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

function NavigationBar() {
  const [openApp, setOpenApp] = React.useState(false);

  const handleClickOpenApp = () => {
    setOpenApp(true);
  };

  const handleCloseAppBar = () => {
    setOpenApp(false);
  };
  return (
    <>
      <Grid
        container
        position="fixed"
        zIndex="1"
        marginTop="50px"
        style={{ backgroundColor: "#333333", color: "#FFFFFF" }}
        sx={{
          display: { xs: "none", sm: "flex" },
          fontSize: { xs: 10, sm: 14, md: 15 },
        }}
      >
        <Grid item xs p={3}>
          <img src={logo} />
        </Grid>
        <Grid item md={6} sm={6}>
          <Grid item md={12} sm={12}>
            <Grid
              container
              style={{ display: "flex", justifyContent: "center" }}
              my={4}
            >
              <Grid
                item
                md={2}
                sm={2}
                sx={{ "&:hover": { color: "#5191FA" }, cursor: "pointer" }}
              >
                <Link to="/home" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </Grid>
              <Grid
                item
                md={2}
                sm={2}
                sx={{ "&:hover": { color: "#5191FA" }, cursor: "pointer" }}
              >
                <Link to="/temple" style={{ textDecoration: "none" }}>
                  Temple
                </Link>
              </Grid>
              <Grid
                item
                md={2}
                sm={2}
                sx={{ "&:hover": { color: "#5191FA" }, cursor: "pointer" }}
              >
                Rooms
              </Grid>
              <Grid item md={2} sm={3}>
                <Link
                  to="/about"
                  style={{ textDecoration: "none" }}
                  sx={{ "&:hover": { color: "#5191FA" }, cursor: "pointer" }}
                >
                  <span style={{ color: "white" }} className="hover_about">
                    About Us
                  </span>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={3} xs={3}>
          <Grid item md={12} sm={12}>
            <Grid container mr={15}>
              <Grid item md={2} my={4} sm={3}>
                <img src={store} />
              </Grid>

              <Grid
                item
                md={4}
                sm={6}
                my={3}
                sx={{ fontSize: { md: 13 } }}
                style={{
                  backgroundColor: "#FA5636",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                p={1.3}
              >
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <span style={{ color: "white" }}>Contact Us</span>{" "}
                </Link>
              </Grid>

              <Grid item md={2} sm={3} my={4}>
                <img src={search} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* <div> */}
      {/* <Button variant="outlined" onClick={handleClickOpen} sx={{display:{xs:"flex",sm:'none'}}}>
        Open full-screen dialog
      </Button> */}
      <Grid
        container
        style={{ backgroundColor: "#333333" }}
        sx={{
          display: { xs: "flex", sm: "none" },
          pt: { xs: 6 },
          fontSize: { xs: "13px" },
        }}
      >
        <Grid
          item
          xs={8}
          style={{ display: "flex", justifyContent: "start" }}
          ml={2}
          p={2}
        >
          <i
            className="fa-solid fa-bars"
            onClick={handleClickOpenApp}
            style={{ cursor: "pointer", fontSize: "20px", color: "white" }}
          ></i>
        </Grid>
        <Grid item xs style={{ color: "white" }} my={2}>
          Login
        </Grid>
      </Grid>
      <Dialog
        fullScreen
        open={openApp}
        onClose={handleCloseAppBar}
        // TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseAppBar}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Nav
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseAppBar}>
              save
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
      {/* </div> */}
    </>
  );
}

export default NavigationBar;
// sx={{display:{xs:"none",sm:'flex'}}}
