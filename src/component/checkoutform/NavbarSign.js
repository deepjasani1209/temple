import React, { useEffect, useState } from "react";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import { styled } from '@mui/material/styles';
import Dialog from "@mui/material/Dialog";
import FacebookIcon from "@mui/icons-material/Facebook";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Link } from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Radio, RadioGroup } from "@mui/material";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
// import { wait } from "@testing-library/user-event/dist/utils";
// import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// export interface DialogTitleProps {
//   id: string;
//   children?: React.ReactNode;
//   onClose: () => void;
// }

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function NavbarSign() {
  const [emailpa, setEmailpa] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setOpenSign(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openSign, setOpenSign] = React.useState(false);

  const handleClickOpenSign = () => {
    setOpenSign(true);
    setOpen(false);
  };

  const handleCloseSign = () => {
    setOpenSign(false);
  };

  // console.log(emailpa)

  const login = async (e) => {
    try {
      // console.log("hii");
      e.preventDefault();
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const data = res.data;

      // const username=data.map((data)=>data.email)
      // const passwrd=data.map((data)=>data.username)

      // console.log(username);
      // console.log(passwrd);

      // const result_email=data.find(({email})=>email===emailpa)
      const result_email = data.find((ele) => {
        if (
          ele.email === emailpa &&
          ele.username === password &&
          emailpa.length > 0 &&
          password.length > 0
        ) {
          return true;
        }
      });
      // console.log("====>",result_email)

      if (result_email === undefined) {
        alert("Please correct password or username......");
      } else {
        alert("Succes ");
      }

      // if(){
      //   alert("yes");
      // }
      // else{
      //   alert("no")
      // }
      // const result_pass=data.find(({username})=>username===password)
      // console.log(result_email);
      // console.log(result_pass);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const login =() =>{
  //   axios.post('https://jsonplaceholder.typicode.com/users',{
  //     email:emailpa,
  //     username:password
  //   }).then(result=>{
  //     console.log(result.data)
  //     alert('success')
  //   }).catch(error=>{
  //     alert('service error')
  //   })
  // }

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        sx={{ p: 2, fontSize: { xs: 11, sm: 14, md: 15 } }}
        position="fixed"
        zIndex="1"
        style={{ backgroundColor: "#1A2B48", color: "#FFFFFF" }}
      >
        <Grid item md={6} sm={6} xs={2}>
          <Grid container>
            <Grid item md={3} sm={4} xs={12}>
              <Grid container sx={{ justifyContent: "flex-end" }}>
                <Grid item md={3} sm={4} xs={4}>
                  <i class="fa-brands fa-facebook-f"></i>
                </Grid>
                <Grid item md={2} sm={4} xs={4}>
                  <i class="fa-brands fa-linkedin-in"></i>
                </Grid>
                <Grid item md={3} sm={4} xs={4}>
                  <i class="fa-brands fa-youtube"></i>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              md={4}
              pl={2}
              sm={8}
              sx={{ display: { xs: "none", sm: "flex" } }}
              style={{ borderLeft: "1px solid #ffffff33" }}
            >
              yourmail@gmail.com
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sm={6} xs={10}>
          <Grid item md={12} xs={{ ml: 30 }}>
            <Grid
              container
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Grid
                item
                md={4}
                sm={5}
                xs={7}
                style={{ borderRight: "1px solid #ffffff33" }}
              >
                (000) 999 - 656 -888
              </Grid>
              <Grid
                item
                md={2}
                sm={3}
                xs={2}
                style={{
                  borderRight: "1px solid #ffffff33",
                  cursor: "pointer",
                }}
                onClick={handleClickOpen}
                handleClickOpen={handleClickOpen}
              >
                {/* <Link to="/login">Login</Link> */}
                Login
              </Grid>
              <Grid
                item
                md={2}
                sm={3}
                xs={3}
                style={{ cursor: "pointer" }}
                onClick={handleClickOpenSign}
              >
                Sign Up
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            sx={{ fontSize: { md: "20px", xs: "15px" } }}
          >
            LOGIN
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box component="form" noValidate onSubmit={login}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    size="small"
                    autoComplete="email"
                    autoFocus
                    value={emailpa}
                    onChange={(e) => setEmailpa(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    size="small"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, p: 1 }}
                    login={login}
                  >
                    LOG IN
                  </Button>

                  <Grid container>
                    <Grid item xs>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                    <Grid item pt={1}>
                      <Link
                        href="#"
                        variant="body2"
                        style={{ textDecoration: "none" }}
                      >
                        Forgot Password?
                      </Link>
                    </Grid>
                  </Grid>

                  <Grid container textAlign="center">
                    <Grid item xs mt={2}>
                      <Typography>or continue with</Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container columnSpacing={{ md: 2, xs: 2 }} mt={2}>
                        <Grid item xs={4} sm={4}>
                          <Button
                            variant="contained"
                            sx={{ fontSize: { sm: "12px", xs: "9px" } }}
                            style={{
                              backgroundColor: "#39569c",
                              color: "#ffffff",
                            }}
                          >
                            <i
                              class="fa-brands fa-facebook-f"
                              style={{ paddingRight: "5px" }}
                            ></i>
                            Facebook
                          </Button>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                          <Button
                            sx={{
                              fontSize: { sm: "12px", xs: "9px" },
                              marginLeft: "10px",
                            }}
                            style={{
                              backgroundColor: "#DB4437",
                              color: "#ffffff",
                            }}
                          >
                            <i
                              class="fa-brands fa-google"
                              style={{ paddingRight: "10px" }}
                            ></i>
                            Google
                          </Button>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                          <Button
                            variant="contained"
                            sx={{ fontSize: { sm: "12px", xs: "9px" } }}
                            style={{
                              backgroundColor: "#1DA1F2",
                              color: "#ffffff",
                            }}
                          >
                            <i
                              class="fa-brands fa-twitter"
                              style={{ paddingRight: "5px" }}
                            ></i>
                            Twitter
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container textAlign="center" mt={3} mb={2}>
                    <Grid item xs>
                      <Typography>
                        Do not have an account?{" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={handleClickOpenSign}
                        >
                          Sign Up
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </DialogContent>
        </BootstrapDialog>
      </div>

      {/* sign up */}
      <div>
        <BootstrapDialog
          onClose={handleCloseSign}
          aria-labelledby="customized-dialog-title"
          open={openSign}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleCloseSign}
            sx={{ fontSize: { md: "20px", xs: "15px" } }}
          >
            SIGN UP
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Container component="main" maxWidth="xs">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box component="form" noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Username"
                    label="Username"
                    name="Username"
                    size="small"
                    autoComplete="Username"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Full Name"
                    label="Full Name"
                    name="Full Name"
                    size="small"
                    autoComplete="Full Name"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    size="small"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    size="small"
                    autoComplete="current-password"
                  />

                  <Grid container>
                    <Grid item xs mt={3}>
                      <Typography fontSize="18px">Select User Type</Typography>
                    </Grid>
                  </Grid>
                  <Grid container mt={0}>
                    <Grid item xs={6} style={{ fontSize: "10px" }}>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Normale User"
                        />
                      </RadioGroup>
                    </Grid>

                    <Grid item xs={6}>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Partner User"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  <Grid container mt={3}>
                    <Grid item xs>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="I have read and accept the Terms and Privacy Policy"
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2, p: 1 }}
                  >
                    SIGN UP
                  </Button>

                  <Grid container textAlign="center">
                    <Grid item xs mt={2}>
                      <Typography>or continue with</Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={12}>
                      <Grid container columnSpacing={{ md: 2, xs: 2 }} mt={2}>
                        <Grid item xs={4} sm={4}>
                          <Button
                            variant="contained"
                            sx={{ fontSize: { sm: "12px", xs: "9px" } }}
                            style={{
                              backgroundColor: "#39569c",
                              color: "#ffffff",
                            }}
                          >
                            <i
                              class="fa-brands fa-facebook-f"
                              style={{ paddingRight: "5px" }}
                            ></i>
                            Facebook
                          </Button>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                          <Button
                            sx={{
                              fontSize: { sm: "12px", xs: "9px" },
                              marginLeft: "10px",
                            }}
                            style={{
                              backgroundColor: "#DB4437",
                              color: "#ffffff",
                            }}
                          >
                            <i
                              class="fa-brands fa-google"
                              style={{ paddingRight: "10px" }}
                            ></i>
                            Google
                          </Button>
                        </Grid>
                        <Grid item xs={4} sm={4}>
                          <Button
                            variant="contained"
                            sx={{ fontSize: { sm: "12px", xs: "9px" } }}
                            style={{
                              backgroundColor: "#1DA1F2",
                              color: "#ffffff",
                            }}
                          >
                            <i
                              class="fa-brands fa-twitter"
                              style={{ paddingRight: "5px" }}
                            ></i>
                            Twitter
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container textAlign="center" mt={3} mb={1}>
                    <Grid item xs>
                      <Typography>
                        Already have an account?{" "}
                        <Link
                          style={{ textDecoration: "none" }}
                          onClick={handleClickOpen}
                        >
                          Log In
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </>
  );
}

export default NavbarSign;
