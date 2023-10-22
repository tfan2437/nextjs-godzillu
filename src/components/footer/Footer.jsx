import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Godzillu. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/icon-facebook.jpg"
          width={15}
          height={15}
          className={styles.icon}
          alt="Godzillu Illustration Design"
        />
        <Image
          src="/icon-instagram.jpg"
          width={15}
          height={15}
          className={styles.icon}
          alt="Godzillu Illustration Design"
        />
        <Image
          src="/icon-twitter.jpg"
          width={15}
          height={15}
          className={styles.icon}
          alt="Godzillu Illustration Design"
        />
        <Image
          src="/icon-youtube.jpg"
          width={15}
          height={15}
          className={styles.icon}
          alt="Godzillu Illustration Design"
        />
      </div>
    </div>
  );
};

export default Footer;
