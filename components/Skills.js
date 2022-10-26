import React, { useState, useRef } from "react";
import styles from "../styles/Page.module.scss";
import Image from "next/image";
const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>Skills</h1>
      <div className={styles.skills__container}>
        <p className={styles.skills__desc}>
          These are a list of the skills I have
        </p>
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
