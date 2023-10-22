import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Godzillu Contact Information",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/dave-arcade-exploded-diagram-2.png"
          width={600}
          height={600}
          alt=""
          className={styles.image}
        />

        <div className={styles.divcontainer}>
          <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
          <form className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="email" className={styles.input} />
            <textarea
              className={styles.textArea}
              placeholder="message"
              cols="30"
              rows="10"
            ></textarea>
            <div className={styles.btn}>
              <Button url="#" text="Send" className={styles.btn} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
