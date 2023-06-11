import ImageCarouse from "../UI/ImageCarousel";
import styles from "./Styles/Portfolio.module.css";

const Portfolio = () => {
  return (
    <>
      <h3 className={styles.header}>Portfolio</h3>
      <p className={styles.paragraph}>You will love our work. Check it out!</p>
      <ImageCarouse />
    </>
  );
};

export default Portfolio;
