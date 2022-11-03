import React, { useState, useRef } from "react";
import styles from "../styles/Page.module.scss";
import data from "../public/about.json";
import { motion } from "framer-motion";
import { SwitchTransition, CSSTransition } from "react-transition-group";
const About = () => {
  const [active, setActive] = useState(0);
  const [state, setState] = useState(false);
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = state ? goodbyeRef : helloRef;
  const onChange = (e) => {
    setActive(e.target.getAttribute("data-index"));
  };
  return (
    <section className={styles.about} id="about">
      <h1>About</h1>
      <div className={styles.about__container}>
        <div className={styles.about__buttons}>
          <button
            onClick={onChange}
            className={styles.about__button}
            data-index="0"
          >
            Born
          </button>
          <button
            onClick={onChange}
            data-index="1"
            className={styles.about__button}
          >
            Growing Up
          </button>
          <button
            onClick={onChange}
            data-index="2"
            className={styles.about__button}
          >
            School
          </button>
          <button
            onClick={onChange}
            data-index="3"
            className={styles.about__button}
          >
            Engineering
          </button>
          <button
            onClick={onChange}
            data-index="4"
            className={styles.about__button}
          >
            Intro to Programming
          </button>
          <button
            onClick={onChange}
            data-index="5"
            className={styles.about__button}
          >
            AccessPoint
          </button>
        </div>
        <motion.div
          className={styles.about__content}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
        >
          <motion.div
            className={styles.about__content}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <p className={styles.about__desc}>{data[active].desc}</p>
            <p>{data[active].date}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
