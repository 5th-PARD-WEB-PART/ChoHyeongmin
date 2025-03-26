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
  //과제 1번 다양한 타입을 사용하여 배열과 객체를 선언하고 데이터 구조를 표현한다.
  // 4가지 이상의 타입 사용, 배열 사용!
  const part: string = "웹파트"; //string type
  const age:number = 24; // number type
  const ID_age:[number,string]=[21,'21나이']; //tuple type
  const pardHistory:number[]=[0,1,2,3,4,5];//array type
  
  //과제 2번 객채 선언 인터페이스 상속 사용해보기
  interface User{
    major: string;
    mbti: string;
    insta: string;
  }
  interface Pard extends User {
    position: string;
    role: string;
    love: boolean;
  }
  const user: User = {major: "전산전자 공학부", mbti: "INFJ", insta: "h._.m1225"};
  const PardMem: Pard={
    major: "전산전자 공학부",
    mbti: "INFJ", 
    insta: "h._.m1225",
    position: "WEB",
    role:"PARD-Y",
    love: true
  };
  //타입 별칭 사용해보기
  type Tmi={
    major: string;
    Role: string;
    Part: string;
    Mbti: string;
  };

  const tmi: Tmi={
    major: "전공",
    Role: "Role",
    Part: "파트",
    Mbti: "MBTI"
  }

  //과제 3번 함수 사용 1가지 이상 화살표 함수로!
  const greet = (name: string): string => `안녕하세요! 제 이름은 [${name}]입니다. 👋`;

  //과제 4번 ts문법(제네릭 문법 사용, 유틸리티 타입 1개 이상)
  //제네릭 문법
  interface Start<T> {
    etc: T;
  }
  const WEBIS: Start<string> = {etc: "Sexy Web~"};
  const OTDay: Start<number> = {etc: 3.15}; //사용은 안하는데 다른 타입 쓸수 있는걸 확인 받기 위함
  //유틸리티 타입
  interface Email {
    name: string;
    age: number;
    email: string;
  };
  type UserPreview = Pick<Email, "name" | "email">;
  const userPreview: UserPreview = { name: "Mini", email: "22100713@handong.ac.kr" };

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
          <p>{greet("조형민")}<br />학번은 {ID_age[0]}학번 {ID_age[1]} {age}살 입니다!<br />PARD-Y {pardHistory[5]}기 입니다! 잘부탁드려요~ <br />{WEBIS.etc} 😎</p>
        </div> 
      )}

      {/* TMI 글 */}
      {showTMI && (
        <div className={styles.tmi}>
          <p>🧑🏻‍💻 {tmi.major}: {user.major}<br />🌊 {tmi.Role}: {PardMem.role}<br/>🌐 {tmi.Part}: {PardMem.position}<br/>💙 {tmi.Mbti}: {user.mbti}<br /><span className={styles.inlineContainer}><img src="6.jpeg" alt="로고" className={styles.logo}/> {user.insta}</span><br />📧 {userPreview.email}<br/></p>
        </div>
      )}
    </div>
  );
}

