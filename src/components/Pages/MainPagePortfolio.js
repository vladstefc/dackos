import { Container } from "@mui/material";
import ImageCarouse from "../UI/ImageCarousel";
import styles from "./Styles/MainPortfolio.module.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const openPortfolioHandler = () => {};

  return (
    <section className={styles.main} id="Portfolio">
      <Container>
        <h3 className={styles.header}>Portfolio</h3>
        <p className={styles.paragraph}>
          You will love our work. Check it out!
        </p>
        <div className={styles.carousel}>
          <ImageCarouse />
        </div>
        <div className={styles.button}>
          <button className={styles.btn} onClick={openPortfolioHandler}>
            More here
          </button>
          {/* <Link to="portfolio" className={styles.btn}>
            More here
          </Link> */}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
