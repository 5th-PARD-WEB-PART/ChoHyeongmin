import { useState } from "react";
import styles from "../styles/About.module.css";

export default function About() {
  const [showIntro, setShowIntro] = useState(false);
  const [showTMI, setShowTMI] = useState(false);

  const handleImageClick = () => {
    setShowIntro(true);
    setShowTMI(false);
  };

  const handleIntroClick = () => {
    setShowTMI(true);
  };

  return (
    <div className={styles.container}>
      {/* 프로필 사진 */}
      <img
        src="/2.jpeg"
        alt="프로필 사진"
        className={styles.profileImage}
        onClick={handleImageClick}
      />

      {/* 자기소개 글 */}
      {showIntro && (
        <div className={styles.intro} onClick={handleIntroClick}>
          <p>안녕하세요! 제 이름은 [조형민]입니다. 👋<br /> PARD-Y 5기 [웹파트]를 담당하고 있습니다 <br />Sexy Web~ 😎</p>
        </div>
      )}

      {/* TMI 글 */}
      {showTMI && (
        <div className={styles.tmi}>
          <p>🧑🏻‍💻 전공: 전산전자공학부<br />💙 MBTI: INFJ<br /><span className={styles.inlineContainer}><img src="6.jpeg" alt="로고" className={styles.logo}/> h._.m1225</span></p>
        </div>
      )}
    </div>
  );
}

