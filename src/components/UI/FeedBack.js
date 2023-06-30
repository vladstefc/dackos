import React, { useState } from "react";

import styles from "./FeedBack.module.css";

const FeedBack = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const closeHandler = () => {};
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your Name</label>
          <input type="text" id="email" name="email" required="" />
        </div>
        <div className={styles.formGroup}>
          <label for="textarea">How Can We Help You?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            cols="50"
            required=""
          >
            {" "}
          </textarea>
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.formSubmitBtn}
            type="submit"
            onClick={submitHandler}
          >
            Submit
          </button>
          <button
            className={styles.formSubmitBtn}
            type="button"
            onClick={closeHandler}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
