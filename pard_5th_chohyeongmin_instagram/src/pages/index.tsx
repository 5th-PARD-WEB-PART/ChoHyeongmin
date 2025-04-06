import Link from "next/link";
import { useState } from 'react';
import styles from "../styles/registerPage.module.css";

import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <Image
            src="/vector.png"
            alt="Instagram Logo"
            width={175}
            height={49}
          />
        </div>
        <p className={styles.description}>친구들의 사진과 동영상을 보려면 가입하세요.</p>
        <form className={styles.form}>
          <input type="text" placeholder="휴대폰 번호 또는 이메일 주소" />
          <input type="text" placeholder="성명" />
          <input type="text" placeholder="사용자 이름" />
          <input type="password" placeholder="비밀번호" />
          <p className={styles.note}>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.{" "}
            <a href="#">더 알아보기</a>
          </p>
          <button type="submit">가입</button>
        </form>
      </div>
      <div className={styles.loginBox}>
        <p>
          계정이 있으신가요? <a href="/mypage">로그인</a>
        </p>
      </div>
    </div>
  );
}

