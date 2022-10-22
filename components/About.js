import React from "react";
import styles from "../styles/Page.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <h1>About</h1>
      <p className={styles.about__desc}>
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
      </p>
    </section>
  );
};
export default About;
