import styles from "./Styles/About.module.css";

const About = () => {
  const yearsOfExperience = () => {};

  return (
    <section className={styles.main}>
      <h2 className={styles.header}>About us</h2>
      <p className={styles.paragraph}>
        Welcome to <b>Dackos Construction Limited</b>, your trusted construction
        partner. With <b>[number]</b> years of experience, we deliver
        exceptional construction solutions tailored to your needs. Our team of
        skilled professionals is committed to quality craftsmanship, attention
        to detail, and timely project completion. We prioritize customer
        satisfaction by understanding your goals and delivering results that
        exceed your expectations. Safety is our top priority, and we embrace
        innovation to optimize project outcomes. From residential to commercial
        projects, trust <b>Dackos Construction Limited</b> for your construction
        needs.
      </p>
    </section>
  );
};

export default About;
