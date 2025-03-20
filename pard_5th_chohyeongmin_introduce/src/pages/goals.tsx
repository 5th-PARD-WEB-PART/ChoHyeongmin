import styles from '../styles/Goals.module.css';

export default function Goals() {
  return (
    <div className={styles.container}>
      <div className={styles.before}>
        <img src="/1.jpeg" alt="Before" className={styles.image} />
        <h2>Before</h2>
        <p>1. 깃 허브 관리 X<br />2. 사실상 한동 첫 동아리<br />3. 사실 다른 개발 툴에 비해 웹을 어려워하는 편 (먼가 취향 아님)<br />4. 여러 파트가 모여서 개발 해본 적 X</p>
      </div>
      
      <div className={styles.after}>
        <img src="/2.jpeg" alt="After" className={styles.image} />
        <h2>After</h2>
        <p>1. 깃 허브를 내 얼굴 😎 같이 아름 답게 Sexy Web~ <br />2. 웹 개발 경력(대회 수상?)<br />3. 여러 파트의 사람들과 관계형성 및 협업능력 향상<br />4. 웹 개발에 더욱 친숙해지기(🕹️장난감 다루듯!)</p>
      </div> 
    </div>
  );
}
