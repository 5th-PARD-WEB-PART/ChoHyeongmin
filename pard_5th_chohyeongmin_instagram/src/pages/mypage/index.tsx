import Sidebar from "../../../src/components/Sidebar"; // 상대 경로로 수정!
import styles from "../../styles/Mypage.module.css";

export default function MyPage() {
  return (
    <div className={styles.pageWrapper}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.profileHeader}>
          <img src="/Profile.jpeg" className={styles.avatar} alt="유저 아바타" />
          <div className={styles.profileInfo}>
            <div className={styles.usernameRow}>
              <span className={styles.username}>h._.m1225</span>
              <button className={styles.editButton}>프로필 편집</button>
            </div>
            <div className={styles.userStats}>
              <span>게시물 0</span>
              <span>팔로워 0</span>
              <span>팔로우 0</span>
            </div>
          </div>
        </div>

        {/* 📷 게시물 갤러리 */}
        <div className={styles.gallery}>
          <div className={styles.postBox}>
            <img src="/1.jpeg" alt="post1" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/2.jpeg" alt="post2" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/3.jpeg" alt="post3" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/4.jpeg" alt="post4" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/5.jpeg" alt="post5" className={styles.postImage} />
            <div className={styles.overlay}>
            <img src="/hover.png" /><span>110만</span>
            <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/6.jpeg" alt="post6" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>  
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/7.jpeg" alt="post7" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/8.jpeg" alt="post8" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          <div className={styles.postBox}>
            <img src="/9.jpeg" alt="post9" className={styles.postImage} />
            <div className={styles.overlay}>
              <img src="/hover.png" /><span>110만</span>
              <img src="/comment.png" /><span>110만</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
