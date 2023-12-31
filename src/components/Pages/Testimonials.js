import React, { useState } from "react";

import { Typography, Grid, Container } from "@mui/material";
import Card from "@mui/material/Card";

import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

import { styled } from "@mui/material/styles";

const content = [
  {
    name: "Sophie",
    rating: 5,
    text: '"Dackos Construction Limited exceeded our expectations with their professionalism, attention to detail, and flawless execution. Their skilled craftsmen delivered exceptional work within the agreed timeframe and budget. We highly recommend them for their outstanding service and ability to bring our vision to life."',
  },
  {
    name: "David",
    rating: 4.5,
    text: '"Dackos Construction Limited surpassed my expectations. Their professionalism, expertise, and meticulousness were outstanding. From the initial consultation to the final outcome, their exceptional project management skills ensured a seamless process. The craftsmanship by skilled workers was of the utmost quality, delivering excellent results on schedule and within budget. Highly recommended!"',
  },
  {
    name: "John",
    rating: 5,
    text: '"I was truly impressed with Dackos Construction Limited. Their team showcased remarkable professionalism and attention to detail. The project was completed flawlessly within the agreed timeline and budget. I highly recommend them for their outstanding work and commitment to customer satisfaction. Thank you, Dackos Construction Limited!"',
  },
];

const Testimonials = (props) => {
  const TestimonialCard = styled(Card)(({ theme }) => ({
    backgroundColor: "#f9f9f9",
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
    },
    height: "100%",
  }));

  return (
    <section
      style={{
        backgroundColor: "#f5f5f5",
        marginBottom: "1.2rem",
        paddingBottom: "1.2rem",
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{
            color: "#333333",
            padding: "2rem 0 2rem 0",
          }}
        >
          Testimonials
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          marginBottom="1.2rem"
        >
          {content.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TestimonialCard>
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.image}
                  sx={{ width: 80, height: 80, marginBottom: 2 }}
                />
                <Typography
                  variant="h6"
                  color="#212529"
                  sx={{ marginTop: 2, fontWeight: 600 }}
                >
                  {testimonial.name}
                </Typography>
                <Rating
                  value={testimonial.rating}
                  precision={0.5}
                  readOnly
                  size="large"
                  sx={{ marginBottom: 2 }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                >
                  {testimonial.text}
                </Typography>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Testimonials;
