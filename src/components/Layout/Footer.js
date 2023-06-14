import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={styles.media}
      style={{
        backgroundColor: "rgb(33,37,41)",
        margin: "0",
        // outline: "dashed",
        color: "#545454",
        paddingTop: "1rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Copyright © 2023 Dackos Construction Limited. All rights reserved. </p>
    </footer>
  );
};

export default Footer;
