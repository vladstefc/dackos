import React, { useState } from "react";
import { Typography, Container } from "@mui/material";

import styles from "./Styles/Contact.module.css";

const Contact = () => {
  return (
    <div id="Contact" className={styles.main}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ paddingBottom: "2rem" }}
        >
          Contact Us
        </Typography>
        <div className={styles.sectionContainer}>
          <div className={styles.left}>
            <h4>dummy text</h4>
            <p>dummy text 2</p>
          </div>
          <div className={styles.center}></div>
          <div className={styles.right}>
            <form
              className={styles.colorfulForm}
              name="contact v1"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact v1" />
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  required=""
                  placeholder="Enter your name"
                  className={styles.formInput}
                  type="text"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email:
                </label>
                <input
                  required=""
                  placeholder="Enter your email"
                  className={styles.formInput}
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">
                  Message:
                </label>
                <textarea
                  required=""
                  placeholder="Enter your message"
                  className={styles.formInput}
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button className={styles.formButton} type="submit">
                Send message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
{
  /* <ContactSection style={{ backgroundColor: "white" }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ paddingBottom: "2rem" }}
          >
            Contact Us
          </Typography>
          <div className={styles.container}>
            <div className={styles.left}>
              <h4>dummy text</h4>
              <p>dummy text 2</p>
            </div>
            <div className={styles.center}></div>
            <div className={styles.right}>
              <ContactForm
                onSubmit={handleSubmit}
                name="contact-v1"
                method="POST"
                data-netlify="true"
              >
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
                    <ContactButton
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ backgroundColor: "#212529" }}
                    >
                      Submit
                    </ContactButton>
                  </Grid>
                </Grid>
              </ContactForm>
            </div>
          </div>
        </ContactSection> */
}
