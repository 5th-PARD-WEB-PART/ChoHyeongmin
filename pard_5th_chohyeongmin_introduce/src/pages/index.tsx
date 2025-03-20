import Image from "next/image";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* 왼쪽: 이미지 */}
        <div className={styles.imageContainer}>
          <Image 
            src="/3.webp" // 사용자가 업로드한 이미지로 변경 필요
            alt="Profile"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>
 
        {/* 오른쪽: 텍스트 */}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Mini`s Profile</h1>
          <p className={styles.description}>PARD-Y 5th :: Web</p>
        </div>
      </div>
    </div>
  );
}
