import { useState } from "react";
import Sidebar from "../../../src/components/Sidebar";
import PostGallery from "../../components/PostGallery";
import PostModal from "../../components/PostModal";
import styles from "../../styles/Mypage.module.css";

export default function MyPage() {
  const [likes, setLikes] = useState([
    { liked: false, count: 701 },
    { liked: false, count: 704 },
    { liked: false, count: 708 },
    { liked: false, count: 712 },
    { liked: false, count: 715 },
    { liked: false, count: 717 },
    { liked: false, count: 719 },
    { liked: false, count: 722 },
    { liked: false, count: 726 },
  ]);

  const [selectedPost, setSelectedPost] = useState<{
    path: string;
    index: number;
  } | null>(null);

  const openModal = (path: string, index: number) => {
    setSelectedPost({ path, index });
  };

  const closeModal = () => setSelectedPost(null);

  const handleLike = (index: number) => {
    setLikes((prev) => {
      const updated = [...prev];
      const item = updated[index];
      updated[index] = {
        liked: !item.liked,
        count: item.liked ? item.count - 1 : item.count + 1,
      };
      return updated;
    });
  };

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
              <span>게시물 9</span>
              <span>팔로워 235</span>
              <span>팔로우 240</span>
            </div>
          </div>
        </div>

        <PostGallery likes={likes} onClick={openModal} />

        {selectedPost && (
          <PostModal
            image={selectedPost.path}
            index={selectedPost.index}
            liked={likes[selectedPost.index].liked}
            count={likes[selectedPost.index].count}
            onLike={() => handleLike(selectedPost.index)}
            onClose={closeModal}
          />
        )}
      </div>
    </div>
  );
}
