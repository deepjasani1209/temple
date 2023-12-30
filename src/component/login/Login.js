import React, { useState ,useEffect} from 'react'
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// import { styled } from '@mui/material/styles';
import Dialog from "@mui/material/Dialog";
import FacebookIcon from "@mui/icons-material/Facebook";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Link } from 'react-router-dom';
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
import FormControl  from "@mui/material/FormControl";

function Login() {
    const [emailpa, setEmailpa] = useState("");
    const [password, setPassword] = useState("");
    const login = async (e) => {

    
        try {
          // console.log("hii");
          e.preventDefault();
          const res = await axios.get("https://jsonplaceholder.typicode.com/users");
          const data=res.data
    
          // const username=data.map((data)=>data.email)
          // const passwrd=data.map((data)=>data.username)
    
          // console.log(username);
          // console.log(passwrd);
     
          // const result_email=data.find(({email})=>email===emailpa) 
          const result_email=data.find((ele)=>{
            if(ele.email === emailpa && ele.username === password && emailpa.length>0 && password.length>0){
              return true;
            }
            
          }) 
          // console.log("====>",result_email)
    
          if(result_email===undefined)
          {
           alert("Please correct password or username......")
          }
          else{
            alert("Succes ")
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

      useEffect(() => {
        login()
      }, [])
  return (
    <>
       <div>
        {/* <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            // onClose={handleClose}
            sx={{ fontSize: { md: "20px", xs: "15px" } }}
          >
            LOGIN
          </BootstrapDialogTitle>
          <DialogContent dividers> */}
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
                        //   onClick={handleClickOpenSign}
                        >
                          Sign Up
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          {/* </DialogContent>
        // </BootstrapDialog> */}
      </div>
    </>
  )
}

export default Login
