import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";
import Link from "next/link";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { motion } from "framer-motion";

export default function Home(props) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <Navbar nav={nav} handleNav={handleNav} />
      <div className={styles.container}>
        <Head>
          <title>Luke Webster-Khan Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.container}>
          <div className={styles.hero} id="home">
            <motion.section
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className={styles.hero__left_container}
            >
              <h1 className={styles.title}>Hi! I&apos;m Luke Webster-Khan</h1>

              <h3 className={styles.description}>
                I&apos;m a software Developer with a{" "}
                <div className={styles.hero__span}>
                  {!nav ? <span id="canvas">burning</span> : ""}
                </div>{" "}
                passion for creating and building things. I&apos;m always
                looking to try new things but I love working with NextJS!
              </h3>
              <div className={styles.socials}>
                <div className={styles.socials__wrapper}>
                  <Link href="https://github.com/LukeWebster-Khan">
                    <a>
                      <BsGithub className={styles.socials__icon} />
                    </a>
                  </Link>
                  <Link href="https://www.linkedin.com/in/luke-webster-khan-624829213/">
                    <a>
                      <BsLinkedin className={styles.socials__icon} />
                    </a>
                  </Link>
                  <Link href="mailto:lukewebsterkhan@gmail.com">
                    <a>
                      <BsMailbox className={styles.socials__icon} />
                    </a>
                  </Link>
                </div>
              </div>
            </motion.section>

            <motion.div
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className={styles.hero__image_wrapper}
            >
              {!nav ? (
                <Image
                  src="/luke_color.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className={styles.image}
                />
              ) : (
                ""
              )}
            </motion.div>
          </div>
          <About />
          <div className={styles["under-construction"]}>
            <h1>Under Construction</h1>
          </div>
        </main>

        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
