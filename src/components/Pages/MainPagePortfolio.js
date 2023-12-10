import { Container } from "@mui/material";
import styles from "./Styles/MainPortfolio.module.css";
import SpringImgCarousel from "../UI/SpringImgCarousel";

const Portfolio = () => {
  return (
    <section className={styles.main} id="Portfolio">
      <Container>
        <h3 className={styles.header}>Portfolio</h3>
        <p className={styles.paragraph}>
          You will love our work. Check it out!
        </p>
        <div className={styles.carousel}>
          <SpringImgCarousel />
        </div>
        <div className={styles.button}>
          <a
            href="https://www.facebook.com/profile.php?id=100083291291337"
            target="_blank"
            rel="noreferrer"
            className={styles.btn}
          >
            More here
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
