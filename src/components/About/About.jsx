// eslint-disable-next-line no-unused-vars
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/boy.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Passionate about crafting engaging and user-friendly web interfaces. Skilled in HTML, CSS, JavaScript, and React, with a focus on responsive design and performance optimization.
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graphic.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Graphic Designer</h3>
              <p>
              Creative and detail-oriented graphic designer skilled in using Canva and Figma to produce visually appealing and effective designs. Passionate about turning concepts into captivating visuals that enhance user experience and engagement.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ui.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              Innovative UI designer with expertise in creating user-friendly interfaces using tools like Figma. Passionate about crafting visually appealing and intuitive designs that enhance user interactions and overall experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
