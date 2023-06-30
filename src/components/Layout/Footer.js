import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={styles.media}
      style={{
        backgroundColor: "rgb(33,37,41)",
        margin: "0",
        color: "#545454",
        paddingTop: "1rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>
        Copyright © {year} Dackos Construction Limited. All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
