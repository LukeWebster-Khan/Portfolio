import React, { useState, useRef } from "react";
import styles from "../styles/Page.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -1000 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id="skills" className={styles.skills}>
        <h1>Skills</h1>
        <div className={styles.skills__container}>
          <div className={styles["skills__desc-container"]}>
            <p className={styles.skills__desc}>
              Over the past year I have picked up a number of skills that I have
              applied to a varied world of projects. I have worked with a number
              of different technologies and frameworks, and I am always looking
              to learn more.
            </p>
            <p className={styles.skills__desc}>
              I utilise a number of different front-end technologies, including
              React, Next.js, and Tailwind CSS. I have also worked with a number
              of back-end technologies, including Node.js, Express, and MongoDB.
            </p>
          </div>
          <div className={styles.skills__wrapper}>
            <div className={styles.skills__item}>
              <span className={styles.rotating}>
                <Image
                  className={styles.skills__image}
                  src="/html5.png"
                  alt="html"
                  layout="fill"
                />
              </span>
            </div>
            <div className={styles.skills__item}>
              <span className={styles.rotating}>
                <Image src="/SASS.png" alt="sass" layout="fill" />
              </span>
            </div>
            <div className={styles.skills__item}>
              <span className={styles.rotating}>
                <Image src="/react.png" alt="react" layout="fill" />
              </span>
            </div>
            <div className={styles.skills__item}>
              <span className={styles.rotating}>
                <Image src="/typescript.png" alt="typescript" layout="fill" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Skills;
