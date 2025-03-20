import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  // 현재 날짜 및 시간 상태
  const [currentTime, setCurrentTime] = useState("");

  // 요일 한글 변환
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const month = now.getMonth() + 1;
      const date = now.getDate();
      const day = weekDays[now.getDay()];
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");

      setCurrentTime(`${month}월 ${date}일 (${day}) ${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // 초 단위 업데이트

    return () => clearInterval(interval);
  }, []);

  const pageNames: { [key: string]: string } = {
    "/": "홈",
    "/about": "자기소개",
    "/goals": "목표",
    "/favorites": "좋아하는 것",
  };

  return (
    <> 
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/5.webp" alt="로고" className={styles.logo} />
          <span className={styles.currentPage}>
            {pageNames[router.pathname] || ""}
          </span>
        </div>
        <nav className={styles.nav}>
          <Link href="/" className={router.pathname === "/" ? styles.active : ""}>
            홈
          </Link>
          <Link href="/about" className={router.pathname === "/about" ? styles.active : ""}>
            자기소개
          </Link>
          <Link href="/goals" className={router.pathname === "/goals" ? styles.active : ""}>
            목표
          </Link>
          <Link href="/favorites" className={router.pathname === "/favorites" ? styles.active : ""}>
            좋아하는 것
          </Link>
        </nav>
        <div className={styles.time}>{currentTime}</div> {/* 날짜 및 시간 표시 */}
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
}
