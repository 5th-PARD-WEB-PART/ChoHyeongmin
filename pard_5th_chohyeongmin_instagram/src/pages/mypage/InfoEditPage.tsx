import { useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "../../../src/components/Sidebar";
import { useUserStore } from "../../store/userStore";
import styles from "../../styles/InfoEditPage.module.css";

export default function InfoEditPage() {
  const router = useRouter();
  const { nickname, setNickname } = useUserStore();

  const [newNickname, setNewNickname] = useState(nickname);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newNickname.trim() === "") {
      alert("닉네임을 입력해주세요!");
      return;
    }

    setNickname(newNickname);
    alert("수정이 완료되었습니다!");
    router.push("/mypage");
  };

  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <div className={styles.editContainer}>
        <div className={styles.editInner}>
          <h2 className={styles.title}>프로필 편집</h2>
          <p className={styles.subtitle}>수정할 닉네임을 입력후 제출 해주세요.</p>

          <form onSubmit={handleSubmit} className={styles.editBox}>
            <img src="/Profile.jpeg" className={styles.avatar} alt="프로필 이미지" />
            <input
              type="text"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              className={styles.input}
              placeholder="닉네임"
            />
          </form>

          <button
            type="submit"
            className={styles.submitButton}
            onClick={handleSubmit}
          >
            제출
          </button>
        </div>
      </div>
    </div>
  );
}
