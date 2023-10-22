import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Works</h1>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/manga" className={styles.item}>
          <span className={styles.title}>Manga</span>
        </Link>
        <Link href="/portfolio/artworks" className={styles.item}>
          <span className={styles.title}>Artworks</span>
        </Link>
        <Link href="/portfolio/illustration" className={styles.item}>
          <span className={styles.title}>Illustration</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
