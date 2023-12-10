import React from "react";

import PrivacyPolicy from "../Policies/PrivacyPolicy";

import styles from "./Footer.module.css";

import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import Terms from "../Policies/Terms";
import GDPR from "../Policies/GDPR";

const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={styles.media}
      style={{
        backgroundColor: "rgb(33,37,41)",
        margin: "0",
        color: "#8c9597",
        paddingTop: "1rem",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <div>
          <div className={styles.main}>
            <div className={styles.topFooter}>
              <PrivacyPolicy />
              <Terms />
              <GDPR />
            </div>
            <div className={styles.socials}>
              <h5>Check us out on our socials:</h5>
              <div className={styles.socialIcons}>
                <a href="" target="_blank" rel="noreferrer">
                  <InstagramIcon sx={{ mr: 2, color: "#8c9597" }} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100083291291337"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon sx={{ color: "#8c9597" }} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p>
              Copyright © {year} Dackos Construction Limited. All rights
              reserved.{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
