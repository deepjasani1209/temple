import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
// import Button from '@mui/material/Button';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
// import Typography from '@mui/material/Typography';
import Popover from "@mui/material/Popover";
// import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Table from "react-bootstrap/Table";
// import Aftercheckoutfrom from "./Aftercheckoutfrom";
import { Link } from "react-router-dom";

function Booking() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const params = useParams();
  // const { name } = params;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [name,setName]=useState("");
  const [lname,setLname]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [add,setAdd]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [code,setCode]=useState("");
  const [country,setCountry]=useState("");
  const [reqi,setReqi]=useState("");
  return (
    
    <>
      <Container fixed>
        <Grid container columnSpacing={2}>
          <Grid item md={7} xs={12}>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ borderBottom: 1, borderColor: "grey.500" }}
            >
              <Grid container>
                <Grid
                  item
                  md={12}
                  xs={12}
                  p={2}
                  display="flex"
                  alignItems="start"
                  fontWeight="600"
                  // fontSize="28.36px"
                  sx={{fontSize:{md:'28.36px',sm:'25px'},mt:{xs:2}}}
                >
                  Booking Submission
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
              <Grid container mt={5}>
                <Grid
                  item
                  md={12}
                  xs={12}
                  display="flex"
                  alignItems="start"
                  fontWeight="600"
                  fontSize="28.36px"
                >
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    
                  >
                    <Grid item xs={6} display="flex" justifyContent="start" >
                      <Typography>First Name</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <Typography>Last Name</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField placeholder="First Name" size="small" fullWidth value={name} onChange={(e)=>setName(e.target.value)} />
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField placeholder="Last Name" size="small" fullWidth  value={lname} onChange={(e)=>setLname(e.target.value)}/>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>Email</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>Phone</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField
                        placeholder="email@domain.com"
                        size="small"
                        fullWidth
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField placeholder="Your Phone" size="small" fullWidth  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>Address Line 1</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>Address Line 2</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField
                        placeholder="Your Address Line 1"
                        size="small"
                        fullWidth
                        value={address} onChange={(e)=>setAddress(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField
                        placeholder="Your Address Line 2"
                        size="small"
                        fullWidth
                        value={add} onChange={(e)=>setAdd(e.target.value)}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>City</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>State/Province/Region</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField placeholder="Your City" size="small" fullWidth  value={city} onChange={(e)=>setCity(e.target.value)}/>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField
                        placeholder="State/Province/Region"
                        size="small"
                        fullWidth
                        value={state} onChange={(e)=>setState(e.target.value)}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>ZIP code/Postal code</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>Country</Typography>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField
                        placeholder="ZIP code/Postal code"
                        size="small"
                        fullWidth
                        value={code} onChange={(e)=>setCode(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="start">
                      <TextField placeholder="Country" size="small" fullWidth  value={country} onChange={(e)=>setCountry(e.target.value)}/>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                    >
                      <Typography>Special Requirements</Typography>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="start">
                      <TextField
                        placeholder="Special Requirements"
                        size="small"
                        fullWidth
                        multiline
                        rows={5}
                        value={reqi} onChange={(e)=>setReqi(e.target.value)}
                      />
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      mt={2}
                      display="flex"
                      justifyContent="start"
                     
                    >
                      <Typography>Select Payment Method</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      display="flex"
                      justifyContent="start"
                      ml={1}
                      
                    >
                      <FormControl>
                        <FormControlLabel
                          value="Bank Transfer"
                          control={<Radio />}
                          label="Bank Transfer"
                          onClick={handleClick}
                        />
                      </FormControl>
                    </Grid>
                    <div>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Typography p={2}>Bank Account Information:</Typography>
                        <Typography pl={2}>
                          Account Name:
                          <label>
                            <b>Nguyen Jack</b>
                          </label>
                        </Typography>
                        <Typography pl={2} pt={1}>
                          Account Number:
                          <label>
                            <b>0123456789</b>
                          </label>
                        </Typography>
                        <Typography pl={2} pr={43} pt={1}>
                          Bank Name:
                          <label>
                            <b>HSBC Private International Bank</b>
                          </label>
                        </Typography>
                        <Typography pl={2} pt={1}>
                          SWIFT Code:
                          <label>
                            <b>12312</b>
                          </label>
                        </Typography>
                        <Typography pl={2} pt={5} pb={3}>
                          <i>
                            Please contact the admin for payment
                            <br /> confimation!
                          </i>
                        </Typography>
                      </Popover>
                    </div>

                    <Grid item xs={12} display="flex" justifyContent="start"  zIndex='-1'>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                        
                      />
                      <Typography pt={1.2}>
                        I have read and accept the <a href="#" style={{textDecoration:'none'}}>terms and conditions</a> and <a href="#" style={{textDecoration:'none'}}>
                        Privacy Policy</a>
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      mt={2}
                      mb={2}
                      display="flex"
                      justifyContent="start"
                      // zIndex='-1'
                    >
                     <Link to={`/checkout/${name}/${lname}/${email}/${phone}/${address}/${add}/${city}/${state}/${code}/${country}/${reqi}/`}><Button size="large" style={{backgroundColor:'#5191FA',color:'#FFFFFF'}}>Submit</Button></Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={5} xs={12}>
            <Grid container>
              <Grid
                item
                md={12}
                xs={12}
                p={2}
                display="flex"
                alignItems="start"
                fontWeight="600"
                // fontSize="28.36px"
                sx={{fontSize:{md:'28.36px',sm:'25px'},mt:{xs:2}}}
              >
                Your Booking
              </Grid>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              style={{ border: "1px solid #adb5bd", borderRadius: "10px" }}
              
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
                  <Typography style={{ fontSize: "20px" }}>
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
                      style={{ paddingRight: "8px" }}
                    ></i>
                    Virginia,USA
                  </Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={3}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography>Room</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}}>Room Sheratan Hotel</Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={2}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography>Date</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}}>09/07/2021-12/07/2021</Typography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item md={12} xs={12} pt={3} pl={2} >
                  <Typography style={{ fontSize: "20px" }} mr={2}>
                    <Accordion >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        
                      >
                        <Typography sx={{pl:{lg:20,md:14,sm:24,xs:15}}}>Details</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Table style={{ fontSize: "14px" }} hover>
                          <thead>
                            <tr>
                              <td>Number Of Night</td>
                              <td style={{color:'#5E6D77'}}>1 Night</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Number Of Room</td>
                              <td style={{color:'#5E6D77'}}>1 Room</td>
                            </tr>
                            <tr>
                              <td>Number Of Adult</td>
                              <td style={{color:'#5E6D77'}}>1</td>
                            </tr>
                          </tbody>
                        </Table>
                      </AccordionDetails>
                    </Accordion>
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                pl={2}
                pt={2}
                mt={2}
                pb={4}
                borderBottom="1px solid #adb5bd"
              >
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography>Deposit percent</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{color:'#5E6D77'}}>99 %</Typography>
                </Grid>
              </Grid>

              <Grid container>
                <Grid
                  item
                  md={12}
                  xs={12}
                  display="flex"
                  justifyContent="start"
                  pt={3}
                  pl={2}
                >
                  <Typography style={{ fontSize: "20px" }}>
                    Coupon Code
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                pl={2}
                pt={2}
                pb={5}
                borderBottom="1px solid #adb5bd"
              >
                <Grid item md={9} xs={9} display="flex" justifyContent="start">
                  <TextField size="small" fullWidth />
                </Grid>
                <Grid
                  item
                  md={3}
                //   sx={{pl:{sm:3}}}
                  xs={3}
                //   sx={{pl:{md:2}}}
                  display="flex"
                  justifyContent="start"
                  sx={{pl:{xs:1,sm:3}}}
                  // zIndex='-1'
                >
                  <Button size="large" style={{backgroundColor:'#5191FA',color:'#FFFFFF'}} >Apply</Button>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={4}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography>Subtotal</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="center">
                  <Typography style={{color:'#5E6D77'}}>$350,00</Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={1}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography>Total</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="center">
                  <Typography style={{color:'#5E6D77'}}>$350,00</Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={1}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography>Deposit</Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="center">
                  <Typography style={{color:'#5E6D77'}}>$346,50</Typography>
                </Grid>
              </Grid>

              <Grid container pl={2} pt={2} pb={4}>
                <Grid item md={6} xs={6} display="flex" justifyContent="start">
                  <Typography style={{ fontSize: "20px"}}>
                    Pay Amount
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6} display="flex" justifyContent="center">
                  <Typography style={{ fontSize: "20px",color:'#5E6D77' }}>$346,50</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
{
  /* <Typography>First Name</Typography>
<TextField label="Outlined" size="small"/>   */
}

export default Booking;
