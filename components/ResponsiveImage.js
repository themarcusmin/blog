import Image from "next/image";
import styles from "../styles/ResponsiveImage.module.css";

export default function ResponsiveImage(props) {
  return (
    <Image
      alt={props.alt}
      className={styles.responsiveImage}
      layout="responsive"
      placeholder="blur"
      blurDataURL={props.src}
      {...props}
    />
  );
}
