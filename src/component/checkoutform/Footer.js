import React from 'react'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Footer() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <>
       <Box
      component="footer"
      sx={{
        backgroundColor:"white"
      }}
      mt={10}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3} sx={{textAlign:{sm:"start"}}}>
          <Typography variant="h6" color="text.primary" gutterBottom>
          NEED HELP?
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={2}>
            Call Us
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}>
            + 00 222 44 5678
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={3}>
            Email for Us
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}>
            hello@yoursite.com
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={3} pb={1}>
            Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit" >
              <Facebook/>
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
              pt={1}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" pt={1}> 
              <Twitter />
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} sx={{textAlign:{sm:"start"}}}>
            <Typography variant="h6" color="text.primary" gutterBottom>
            COMPANY
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={2}>
            About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}>
            Community Blog
            </Typography>
            <Typography variant="body2" color="text.secondary"  pt={1}>
            Rewards
            </Typography>
            <Typography variant="body2" color="text.secondary"  pt={1} >
            Work with Us
            </Typography>
            <Typography variant="body2" color="text.secondary"  pt={1}>
            Meet the Team
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} sx={{textAlign:{sm:"start"}}}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            COMPANY
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={2}>
            About Us
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}>
            Community Blog
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}> 
            Rewards
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}>
            Work with Us
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={1}>
            Meet the Team
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} sx={{textAlign:{sm:"start"}}}>
            <Typography variant="h6" color="text.primary" gutterBottom>
            SETTINGS
            </Typography>
            <Typography variant="body2" color="text.secondary" pt={2}>
            Currencies
            </Typography>
            <Box sx={{ minWidth: 120 }} pt={1}>
      <FormControl fullWidth size="small">
        {/* <InputLabel id="demo-simple-select-label">Currencies</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
        //   label="Currencies"
          onChange={handleChange}
        >
              <MenuItem value={30}>INDIA</MenuItem>
          <MenuItem value={10}>USA</MenuItem>
          <MenuItem value={20}>UK</MenuItem>
        
        </Select>
      </FormControl>
    </Box>
          </Grid>
        </Grid>


        <Box mt={5} borderTop="1px solid #EAEEF3" >
          <Typography variant="body2" color="text.secondary" align="center" p={4}>
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
           
          </Typography>
          

        </Box>
      </Container>
    </Box>
    </>
  )
}

export default Footer
