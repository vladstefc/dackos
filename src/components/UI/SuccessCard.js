import styles from "./SuccessCard.module.css";

const SuccessCard = (props) => {
  return (
    <div className={styles.notificationsContaine}>
      <div className={styles.success}>
        <div className={styles.flex}>
          <div className={styles.flexShrink0}>
            <svg
              className={styles.succesSvg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className={styles.successPromptWrap}>
            <p className={styles.successPromptHeading}>
              Your message was sent!
            </p>
            <div className={styles.successPromptPrompt}>
              <p style={{ textAlign: "left" }}>
                Thank you for submitting your form. We are pleased to inform you
                that your submission was successful. <br />
                Our team will review your information and process it
                accordingly. If you have provided contact details, we will be in
                touch with you shortly.
              </p>

              <p style={{ textAlign: "left" }}>
                Best regards, <br />
                Dackos Construction LTD
              </p>
            </div>
            <div className={styles.successButtonContainer}>
              <button type="button" className={styles.successButtonSecondary}>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
