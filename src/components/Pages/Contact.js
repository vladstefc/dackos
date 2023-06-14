import React, { useState } from "react";
import { Typography, TextField, Button, Grid, Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContactSection = styled("section")(({ theme }) => ({
  backgroundColor: "#f9f9f9",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
}));

const ContactForm = styled("form")(({ theme }) => ({
  maxWidth: "100%",
  margin: "0 auto",
  padding: theme.spacing(2),
  backgroundColor: "#ffffff",
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
}));

const ContactButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your form submission logic here
    // For this example, we'll just display a snackbar
    setOpenSnackbar(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ContactSection>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ paddingBottom: "2rem" }}
      >
        Contact Us
      </Typography>
      <ContactForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="outlined"
              required
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <ContactButton type="submit" variant="contained" color="primary">
              Submit
            </ContactButton>
          </Grid>
        </Grid>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          message="Form submitted successfully!"
        />
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
