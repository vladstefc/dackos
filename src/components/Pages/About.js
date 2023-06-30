import { useState } from "react";
import styles from "./Styles/About.module.css";

const About = () => {
  const startingYear = 2000;

  const yearsOfExperience = new Date().getFullYear() - startingYear;

  return (
    <section className={styles.main}>
      <h2 className={styles.header}>About us</h2>
      <p className={`${styles.paragraph} mobileContainer`}>
        Welcome to <b>Dackos Construction Limited</b>, your trusted construction
        partner. With <b>{yearsOfExperience}</b> years of experience, we deliver
        exceptional construction solutions tailored to your needs. Our team of
        skilled professionals is committed to quality craftsmanship, attention
        to detail, and timely project completion. We prioritize customer
        satisfaction by understanding your goals and delivering results that
        exceed your expectations. Safety is our top priority, and we embrace
        innovation to optimize project outcomes. From residential to commercial
        projects, trust <b>Dackos Construction Limited</b> for your construction
        needs.
        <br />
        At Dackos Construction Limited, we understand that successful
        construction projects go beyond just erecting structures; they involve
        building relationships based on trust and collaboration. Our dedicated
        team of professionals works closely with clients, architects, and
        suppliers to ensure seamless project execution from start to finish. We
        listen attentively to your vision, offering valuable insights and
        innovative ideas to bring your dreams to life. Your satisfaction is our
        ultimate goal, and we go the extra mile to surpass your expectations by
        delivering exceptional results that stand the test of time.
      </p>
    </section>
  );
};

export default About;
