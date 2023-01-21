import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Page.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className={styles.about} id="about">
        <h1>About</h1>
        <div className={styles.about__container}>
          <div className={styles["about__content-wrapper"]}>
            <div data-content="2" className={styles["about__section"]}>
              <p>lorem ipsum and the ol second slide</p>
              <div>
                <Image
                  src="/bristol.jpg"
                  alt="location"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div data-content="3" className={styles["about__section"]}>
              <p>lorem ipsum</p>
              <div>
                <Image
                  src="/bristol.jpg"
                  alt="location"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla__container}>
            <div className={styles.embla__slide}>
              <div
                data-content="1"
                className={`${styles["about__section"]} ${styles["about__section--visible"]}`}
              >
                <div className={styles["about__section--desc"]}>
                  <h2>Myself</h2>
                  <p>
                    Hello! My name is Luke and I love creating things that live
                    on the internet. I&#39;m a full stack developer based in
                    Bristol. I&#39;ve always had a love for techincal
                    challenges.
                    <br></br>
                    <br></br>I worked in Civil Engineering for 4 years before
                    making a career change. I&#39;ve always had a love for
                    techincal challenges and strive to learn more everyday!
                    <br></br>
                  </p>
                </div>
                <div>
                  <Image
                    src="/bristol.jpg"
                    alt="location"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            <div className={styles.embla__slide}>
              <div
                data-content="1"
                className={`${styles["about__section"]} ${styles["about__section--visible"]}`}
              >
                <div className={styles["about__section--desc"]}>
                  <h2>Some Facts</h2>
                  <p>
                    - I&rsquo;m well versed in using PHP to build custom themes
                    for WordPress websites along with WebPack and Node for
                    backend shinanigans
                  </p>
                  <br></br>
                  <p>
                    - My favourite programming launguage to work with is React
                    due to its simplicity and ease of use.
                  </p>
                </div>
                <div>
                  <Image
                    src="/code.jpg"
                    alt="location"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
            {/* <div className={styles.embla__slide}>third</div> */}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
export default About;
