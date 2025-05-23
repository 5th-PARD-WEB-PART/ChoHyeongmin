import styles from "../styles/Mypage.module.css";

interface Props {
  liked: boolean;
  count: number;
  onClick: () => void;
}

export default function LikeButton({ liked, count, onClick }: Props) {
  return (
    <div className={styles.modalInfoItem} onClick={onClick} style={{ cursor: "pointer" }}>
      <img
        src={liked ? "/clicked.png" : "/bin_like.png"}
        alt="좋아요"
        className={styles.heartIcon}
      />
      <span>{count}</span>
    </div>
  );
}
