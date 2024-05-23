// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Karan Hemraj Patil</h1>
        <p className={styles.description}>
        I am a Front-End Web Developer skilled in HTML, CSS, JavaScript, and React. Passionate about creating responsive and user-friendly web applications. Reach out if you would like to connect!
        </p>
        <a href="mailto:karanhemrajpatil1907@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile-pic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
