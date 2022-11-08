import React, { useState, useRef } from "react";
import styles from "../styles/Page.module.scss";
import Image from "next/image";
const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.skills__container}>
        <div className={styles["skills__desc-container"]}>
          <p className={styles.skills__desc}>
            Over the past year I have picked up a number of skills that I have
            applied to a varied world of projects. I have worked with a number
            of different technologies and frameworks, and I am always looking to
            learn more.
          </p>
          <p className={styles.skills__desc}>
            I utilise a number of different front-end technologies, including
            React, Next.js, and Tailwind CSS. I have also worked with a number
            of back-end technologies, including Node.js, Express, and MongoDB.
          </p>
        </div>
        <div className={styles.skills__wrapper}>
          <div className={styles.skills__item}>
            <Image
              src="/html5.png"
              alt="html"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className={styles.skills__item}>
            <Image
              src="/SASS.png"
              alt="sass"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className={styles.skills__item}>
            <Image
              src="/react.png"
              alt="react"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className={styles.skills__item}>
            <Image
              src="/typescript.png"
              alt="typescript"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
