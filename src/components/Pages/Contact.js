import React, { useState } from "react";
import { Typography, Container } from "@mui/material";

import useInput from "../../hooks/useInput";

import styles from "./Styles/Contact.module.css";

const Contact = () => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: fistNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const firstNameInputStyles = `${styles.formInput} ${
    firstNameInputHasError ? styles.invalid : ""
  }`;
  const lastNameInputStyles = `${styles.formInput} ${
    lastNameInputHasError ? styles.invalid : ""
  }`;
  const emailInputStyles = `${styles.formInput} ${
    emailInputHasError ? styles.invalid : ""
  }`;

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

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
              netlify-honeypot="bot-field"
              onSubmit={formSubmissionHandler}
            >
              <input type="hidden" name="form-name" value="contact v1" />
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  First Name:
                </label>
                <input
                  id="name"
                  required=""
                  placeholder="Enter your first name"
                  className={firstNameInputStyles}
                  type="text"
                  value={enteredFirstName}
                  onChange={firstNameChangedHandler}
                  onBlur={fistNameBlurHandler}
                />
                {firstNameInputHasError && (
                  <p className="error-text">First name must not be empty</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Last Name:
                </label>
                <input
                  id="name"
                  required=""
                  placeholder="Enter your last name"
                  className={lastNameInputStyles}
                  type="text"
                  value={enteredLastName}
                  onChange={lastNameChangedHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameInputHasError && (
                  <p className="error-text">Last name must not be empty</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email:
                </label>
                <input
                  required=""
                  placeholder="Enter your email"
                  className={emailInputStyles}
                  name="email"
                  id="email"
                  type="email"
                  value={enteredEmail}
                  onChange={emailChangedHandler}
                  onBlur={emailBlurHandler}
                />
                {emailInputHasError && (
                  <p className="error-text">Email must not be empty</p>
                )}
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
              <button
                className={styles.formButton}
                type="submit"
                disabled={!formIsValid}
              >
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
