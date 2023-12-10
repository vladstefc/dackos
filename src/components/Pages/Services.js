import { Container } from "@mui/material";

import styles from "./Styles/Services.module.css";

const Services = () => {
  return (
    <section className={`${styles.main} sectionHeight`} id="About">
      <Container>
        <div className={styles.header}>
          <h2>Our Services</h2>
        </div>
        <p className={`${styles.paragraph} mobileContainer`}></p>
        <div className={styles.description}>
          <ul className={styles.list}>
            <li>Mechanical</li>
            <li>Tiling</li>
            <li>Roofing</li>
            <li>Painting & Decorating</li>
          </ul>
          <ul className={styles.list}>
            <li>Brickwork and blockwork</li>
            <li>Carpentry and joinery</li>
            <li>Building maintenance.</li>
            <li>Plastering, rendering and screeding</li>
          </ul>
          <ul className={styles.list}>
            <li>Electrical works</li>
            <li>Hard and soft flooring</li>
            <li>Dry lining and ceilings</li>
            <li>Plumbing and heating</li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Services;
