import React, { useState } from "react";

import styles from "./FeedBack.module.css";

const FeedBack = (props) => {
  const [text, setText] = useState("Your message here");

  const textChange = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Your Name</label>
          <input type="text" id="email" name="email" required="" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            cols="50"
            required=""
            onChange={textChange}
          ></textarea>
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
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedBack;
