import { Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from "@mui/material/Rating";
import Table from "react-bootstrap/Table";
import React from "react";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import User from "./../checkoutform/images/user.png";
import check from "./../checkoutform/images/check.png";
import location from "./../checkoutform/images/location.png";
import { Link } from "react-router-dom";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const addedReview = [];

const checkBoxData = [
  {
    id: 1,
    star: "5 Reviews",
  },
  {
    id: 2,
    star: "4 Reviews",
  },
  {
    id: 3,
    star: "3 Reviews",
  },
  {
    id: 4,
    star: "2 Reviews",
  },
  {
    id: 5,
    star: "1 Reviews",
  },
];

function Sidebar(props) {
  return (
    <>
      <Container>
        <Grid container>
          <Grid
            item
            md={3}
            border={"1px solid #DFDFDF"}
            borderRadius={"8px"}
            mt={5}
          >
            <Grid container>
              <Grid item xs={12} border={"1px solid #DFDFDF"}>
                <Typography p={3} fontSize={"20px"} fontWeight={"500"}>
                  Search Temple
                </Typography>
              </Grid>
            </Grid>
            <Grid container border={"1px solid #DFDFDF"}>
              <Grid item xs={2}>
                <Typography mt={4}>
                  <img src={location} />
                </Typography>
              </Grid>
              <Grid item xs textAlign="start" p={3}>
                <Typography color={"#5E6D77"}>Destination</Typography>
                <Typography>
                  <Link style={{ textDecoration: "none" }}>
                    Where are you going?
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container border={"1px solid #DFDFDF"}>
              <Grid item xs={2}>
                <Typography mt={4}>
                  {" "}
                  <img src={check} />
                </Typography>
              </Grid>
              <Grid item xs textAlign="start" p={3}>
                <Typography color={"#5E6D77"}>Check In - Out</Typography>
                <Typography>
                  <Link style={{ textDecoration: "none" }}>
                    mm/dd/yyyy-mm/dd/yyyy
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid container border={"1px solid #DFDFDF"}>
              <Grid item xs={2}>
                <Typography mt={4}>
                  {" "}
                  <img src={User} />
                </Typography>
              </Grid>
              <Grid item xs textAlign="start" p={3}>
                <Typography color={"#5E6D77"}>Guests</Typography>
                <Typography>
                  <Link style={{ textDecoration: "none" }}>
                    1 Adult-0 Children
                  </Link>
                </Typography>
              </Grid>
              <Grid container border={"1px solid #DFDFDF"}>
                <Grid item xs={12}>
                  <Typography ml={18} p={2}>
                    <Link style={{ textDecoration: "none" }}>
                      More option ▼
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs pb={2}>
                  <Button variant="contained" size="large" fullWidth>
                    Large
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={3} mt={4} border={"1px solid #DFDFDF"}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography textAlign={"start"}>Filter Price</Typography>
              </AccordionSummary>
              {/* <AccordionDetails>
                <Typography textAlign={"start"}>
                  <Checkbox
                    {...label}
                    onClick={() => handleSelect("5 Reviews")}
                  />
                  <Rating name="size-medium" defaultValue={5} readOnly />
                </Typography>
                <Typography textAlign={"start"}>
                  <Checkbox
                    {...label}
                    onClick={() => handleSelect("4 Reviews")}
                  />
                  <Rating
                    name="size-medium"
                    defaultValue={4}
                    readOnly
                    max={4}
                  />
                </Typography>
                <Typography textAlign={"start"}>
                  <Checkbox
                    {...label}
                    onClick={() => handleSelect("3 Reviews")}
                  />
                  <Rating
                    name="size-medium"
                    defaultValue={3}
                    readOnly
                    max={3}
                  />
                </Typography>
                <Typography textAlign={"start"}>
                  <Checkbox
                    {...label}
                    onClick={() => handleSelect("2 Reviews")}
                  />
                  <Rating
                    name="size-medium"
                    defaultValue={2}
                    readOnly
                    max={2}
                  />
                </Typography>
                <Typography textAlign={"start"}>
                  <Checkbox
                    {...label}
                    onClick={() => handleSelect("1 Reviews")}
                  />
                  <Rating
                    name="size-medium"
                    defaultValue={1}
                    readOnly
                    max={1}
                  />
                </Typography>
              </AccordionDetails> */}
              <AccordionDetails>
                {checkBoxData.map((item) => {
                  return (
                    <Typography textAlign={"start"}>
                      <Checkbox
                        // {...label}
                        value={item.star}
                        onChange={(event) => {
                          if (event.target.checked === true) {
                            addedReview.push(event.target.value);
                            const filterData = props?.Temple.filter((e) => {
                              return addedReview.includes(e.review);
                            });
                            props.setMenuData(filterData);
                          } else {
                            addedReview.pop();
                          }
                        }}
                      />
                      {item.star}
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Sidebar;
