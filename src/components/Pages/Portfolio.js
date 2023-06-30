import ImageCarouse from "../UI/ImageCarousel";
import styles from "./Styles/Portfolio.module.css";

const Portfolio = () => {
  return (
    <section className={styles.main}>
      <h3 className={styles.header}>Portfolio</h3>
      <p className={styles.paragraph}>You will love our work. Check it out!</p>
      <div className={styles.carousel}>
        <ImageCarouse />
      </div>
      <div className={styles.button}>
        <button className={styles.btn}>More here</button>
      </div>
    </section>
  );
};

export default Portfolio;
