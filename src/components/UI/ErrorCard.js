import styles from "./ErrorCard.module.css";

const ErrorCard = (props) => {
  return (
    <div className={styles.notificationsContainer}>
      <div className={styles.errorAlert}>
        <div className={styles.flex}>
          <div className={styles.flexShrink0}>
            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.errorSvg}
            >
              <path
                clipRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={styles.errorPromptContainer}>
            <p className={styles.errorPromptHeading}>
              Your message could not be sent.
            </p>
            <div className={styles.errorPromptWrap}>
              <p
                className={styles.errorPromptPrompt}
                style={{ textAlign: "left" }}
              >
                We apologize for the inconvenience, but it seems that there was
                an error processing your form submission. We are currently
                unable to proceed with your request. <br />
                Please ensure that all required fields are properly filled out
                and try submitting the form again. If the problem persists, you
                can email us at <a>mail@mail.com</a>.
                <br /> We appreciate your patience and understanding. Once
                again, we apologize for any inconvenience caused. <br />
                Thank you for your understanding!
              </p>
              <p style={{ textAlign: "left" }}>
                Best regards, <br />
                Dackos Construction LTD
              </p>
            </div>
            <div className={styles.errorButtonContainer}>
              <button type="button" className={styles.errorButtonSecondary}>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorCard;
