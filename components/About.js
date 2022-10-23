import React from "react";
import styles from "../styles/Page.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h1>About</h1>

      <div className={styles.about__container}>
        <div className={styles.about__buttons}>
          <button className={styles.about__button}>Born</button>
          <button className={styles.about__button}>Growing Up</button>
          <button className={styles.about__button}>School</button>
          <button className={styles.about__button}>Engineering</button>
          <button className={styles.about__button}>Intro to Programming</button>
          <button className={styles.about__button}>AccessPoint</button>
        </div>
        <div className={styles.about__content}>
          <p className={styles.about__desc}>
            After finishing secondary school at <a>Clifton College</a> I pursued
            a career in Civil Engineering, believing it to be an avenue I could
            thrive in. After 4 years im the industry I was proven wrong.
            However, soon enough I caught a glimpse of the world of software
            development and I was hooked. As a proactive self starter I began
            learing HTML, CSS and JavaScript. I particularly have an affinity
            for both the creative styalistic expression through SCSS and the
            logical problem solving of JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

{
  /* <p className={styles.about__desc}>
        Hi! I&apos;m Luke Webster-Khan. I&apos;m currently working in a Junior
        Dev Role at AccessPoint Technologies. It took a while for me to find my
        true passion of software development. I was born and raised in Bristol,
        England as the youngest of 3. I&apos;ve always found joy in problem
        solving and technical challenges but didn&apos;t know about the wonders
        of programming.
      </p>
      <p className={styles.about__desc}>
        After finishing secondary school at <a>Clifton College</a> I pursued a
        career in Civil Engineering, believing it to be an avenue I could thrive
        in. After 4 years im the industry I was proven wrong. However, soon
        enough I caught a glimpse of the world of software development and I was
        hooked. As a proactive self starter I began learing HTML, CSS and
        JavaScript. I particularly have an affinity for both the creative
        styalistic expression through SCSS and the logical problem solving of
        JavaScript.
      </p> */
}