import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import background from "../../assets/images/logo-removedbg.png";
import styles from "./Styles/Main.module.css";

const Main = () => {
  return (
    <div className={styles.main} id="main">
      <div className={styles.overlay}>
        <img src={background} alt="Dackos Construction Limited" />
      </div>
    </div>
  );
};

export default Main;
