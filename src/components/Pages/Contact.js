import React, { useState } from "react";
import { Container, Backdrop } from "@mui/material";

import useInput from "../../hooks/useInput";

import styles from "./Styles/Contact.module.css";
import SuccessCard from "../UI/SuccessCard";
import ErrorCard from "../UI/ErrorCard";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(true);

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

  const {
    value: enteredText,
    isValid: enteredTextIsValid,
    hasError: textInputHasError,
    valueChangeHandler: textChangedHandler,
    inputBlurHandler: textBlurHandler,
    reset: resetTextInput,
  } = useInput((value) => value.length > 0);

  const firstNameInputStyles = `${styles.formInput} ${
    firstNameInputHasError ? styles.invalid : ""
  }`;
  const lastNameInputStyles = `${styles.formInput} ${
    lastNameInputHasError ? styles.invalid : ""
  }`;
  const emailInputStyles = `${styles.formInput} ${
    emailInputHasError ? styles.invalid : ""
  }`;
  const textareaStyles = `${styles.formInput} ${
    textInputHasError ? styles.invalid : ""
  }`;

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid &&
    enteredTextIsValid
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
      .then(() => setIsSubmitted(true))
      .catch((error) => {
        return <ErrorCard />;
      });

    console.log(formData);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetTextInput();
    setIsSubmitted(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submittedMessage = (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <SuccessCard />
    </Backdrop>
  );

  return (
    <div id="Contact" className={styles.main}>
      <Container>
        <div className={styles.sectionContainer}>
          <div className={styles.left}>
            <div className={styles.contact}>
              <h2>Contact Us</h2>
              <p>E-mail: gabriel@dackos.co.uk</p>
              <p>Phone: +44 7748 414243</p>
            </div>
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
                <label className={styles.formLabel} htmlFor="firstName">
                  First Name:
                </label>
                <input
                  id="firstName"
                  name="firtName"
                  required=""
                  placeholder="Enter your first name"
                  className={firstNameInputStyles}
                  type="text"
                  value={enteredFirstName}
                  onChange={firstNameChangedHandler}
                  onBlur={fistNameBlurHandler}
                />
                {firstNameInputHasError && (
                  <p className={styles.errorText}>
                    First name must not be empty
                  </p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="lastName">
                  Last Name:
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required=""
                  placeholder="Enter your last name"
                  className={lastNameInputStyles}
                  type="text"
                  value={enteredLastName}
                  onChange={lastNameChangedHandler}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameInputHasError && (
                  <p className={styles.errorText}>
                    Last name must not be empty
                  </p>
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
                  <p className={styles.errorText}>Email must be valid</p>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">
                  Message:
                </label>
                <textarea
                  required=""
                  placeholder="Enter your message"
                  className={textareaStyles}
                  name="message"
                  id="message"
                  onChange={textChangedHandler}
                  onBlur={textBlurHandler}
                  minLength={1}
                  value={enteredText}
                ></textarea>
                {textInputHasError && (
                  <p className={styles.errorText}>
                    Message field must not be empty
                  </p>
                )}
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
        {isSubmitted ? submittedMessage : ""}
      </Container>
    </div>
  );
};

export default Contact;
