import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Image src="/Vector.png" alt="Instagram 로고" width={120} height={40} /> 
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <img src="Home.png" alt="홈" />
          <span>홈</span>
        </li>
        <li className={styles.menuItem}>
          <img src="/Navigation Icons.png" alt="검색" />
          <span>검색</span>
        </li>
        <li className={styles.menuItem}>
          <img src="/lelay.png" alt="릴스" />
          <span>릴스</span>
        </li>
        <li className={styles.menuItem}>
          <img src="/Union.png" alt="메시지" />
          <span>메시지</span>
        </li>
        <li className={styles.menuItem}>
          <img src="/Heart.png" alt="알림" />
          <span>알림</span>
        </li>
        <li className={styles.menuItem}>
          <img src="/create.png" alt="만들기" />
          <span>만들기</span>
        </li>
        <li>
          <Link href="/mypage" className={styles.menuItem}>
            <img src="/Avatar.png" alt="프로필" />
            <span>프로필</span>
          </Link>
        </li>
      </ul>

      <div className={`${styles.menuItem} ${styles.more}`}>
        <img src="/3line.png" alt="더 보기" />
        <span>더 보기</span>
      </div>
    </div>
  );
}
