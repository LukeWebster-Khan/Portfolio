import React from "react";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";

const Navbar = (props) => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__wrapper}>
          <h1>Luke Webster-Khan</h1>
          <ul className={styles.nav__link_list}>
            <Link className={styles.nav__link} href="#home" scroll={false}>
              Home
            </Link>
            <Link className={styles.nav__link} href="#about" scroll={false}>
              About
            </Link>
            <Link className={styles.nav__link} href="#skills" scroll={false}>
              Skills
            </Link>
            <Link className={styles.nav__link} href="" scroll={false}>
              Projects
            </Link>
            <Link className={styles.nav__link} href="" scroll={false}>
              Contact
            </Link>
          </ul>

          <div className={styles.nav__burger_wrapper} onClick={props.handleNav}>
            <AiOutlineMenu size={25} className={styles.nav__burger} />
          </div>
        </div>

        <div className={props.nav ? styles.nav__mobile : styles.hidden}>
          <div
            className={
              props.nav
                ? styles.nav__mobile_wrapper
                : styles.nav__mobile_wrapper_hidden
            }
          >
            <div>
              <div className={styles.nav__mobile_top}>
                <h1>Luke Webster-Khan</h1>
                <div
                  className={styles.nav__mobile_close}
                  onClick={props.handleNav}
                >
                  <AiOutlineClose width={50} height={50} />
                </div>
              </div>
              <ul className={styles.nav__mobile_link_list}>
                <div>Take a look at these here menu options...</div>
                <hr></hr>
                <Link
                  className={styles.nav__link}
                  onClick={props.handleNav}
                  href="#home"
                  scroll={false}
                >
                  Home
                </Link>
                <Link
                  className={styles.nav__link}
                  onClick={props.handleNav}
                  href="#about"
                  scroll={false}
                >
                  About
                </Link>
                <Link className={styles.nav__link} href="skills" scroll={false}>
                  Skills
                </Link>
                <Link className={styles.nav__link} href="" scroll={false}>
                  Projects
                </Link>
                <Link className={styles.nav__link} href="" scroll={false}>
                  Contact
                </Link>
              </ul>
              <div className={styles.nav__mobile_bottom}>
                <hr></hr>
                <div>
                  <h1 className={styles.title}>Get in Touch!</h1>
                </div>
                <div className={styles.socials}>
                  <div className={styles.socials__wrapper}>
                    <Link href="https://github.com/LukeWebster-Khan">
                      <BsGithub className={styles.socials__icon} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/luke-webster-khan-624829213/">
                      <BsLinkedin className={styles.socials__icon} />
                    </Link>
                    <Link href="mailto:lukewebsterkhan@gmail.com">
                      <BsMailbox className={styles.socials__icon} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
