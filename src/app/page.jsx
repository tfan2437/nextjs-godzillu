import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/dave-arcade-exploded-diagram-1.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better illustration design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global art & design industry.
        </p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          width={700}
          height={700}
          alt=""
          className={styles.img}
        />
      </div>
    </div>
  );
}
