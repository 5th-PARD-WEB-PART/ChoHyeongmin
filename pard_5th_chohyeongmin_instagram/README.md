📌 **프로젝트 개요**  
2차 세미나. 
- Next.js의 **폴더 구조**, **라우팅**, **CSS 스타일링** 개념을 이해하고 적용
- **`registerpage`**(회원가입 페이지)와 **`mypage`**(마이 페이지)를 **구현 및 스타일링**
- Next.js의 Page Router(**파일 기반 라우팅)**을 활용하여 페이지 이동 처리
- **`styled component, tailwindCSS, css Module` 을 활용하여 스타일링**

3차 세미나.  
- Next.js에서의 **컴포넌트 분리 및 모달 관리 구조**를 이해하고 구현한다.
- **`useState`, `useEffect`, `event`** 중심의 React Hook을 활용하여 UI 상태를 반응형으로 관리한다.
- **좋아요 이벤트와 댓글 추가 기능**을 통해 상태 변화와 이벤트 전달을 구현한다.
- **컴포넌트 최적화**와 폴더 구조 설계를 통해 유지보수 가능한 코드를 작성한다.

4차 세미나.
- `Zustand`를 활용해 **사용자 정보의 전역 상태 관리**를 구현한다.
- `Media Query` 또는 `Tailwind CSS`를 사용하여 **반응형 웹 페이지**를 제작한다.
- **컴포넌트 최적화**와 폴더 구조 설계를 통해 유지보수 가능한 코드를 작성한다.
---


## 🌟 PARD 5기 웹파트 2차 세미나 과제 🌟

## 과제 설명

1️⃣ **폴더 구조**

- **`pages`** 디렉토리를 활용한 라우팅 방식 이해
- **`index.tsx`** 파일들을 적절한 위치에 생성

2️⃣ **라우팅 (Routing)**

- **`Link`** (또는 **`useRouter`** 컴포넌트)를 사용하여 페이지 이동 처리
- `/` → 회원가입 페이지, **`/mypage`** → 마이 페이지로 연결
    
    

3️⃣ **CSS 스타일링**

- **`module.css`, `styled-components`, `Tailwind CSS`** 중 하나를 선택하여 적용

4️⃣ **기본적인 UI 구성**

- **`registerPage`**: 회원가입 폼 (이메일, 비밀번호 입력 필드)
- **`myPage`**: 간단한 프로필 화면 (유저 정보 표시)


---
5️⃣ 🔥**챌린지 모드**

- **`반응형 디자인`**을 고려해서 스타일 구성해보기

- **`다크모드`**를 고려하여 배경색 및 폰트도 스타일링 해보기

- post 컴포넌트 hover시 **`like, comment`**나타나게 하기


---
🎯 **실제 구현!** 

1. **`로그인`**을 클릭 시 mypage 폴더 안의 index.tsx가 실행하도록 구현했습니다.

2. **`사이드바`**를 componets 폴더에 만들어 import시켰습니다.

3. **`hover`** 기능을 사용해 호버할 경우 하트와 댓글이 나타나도록 했습니다.


📸 **페이지 미리보기**  
<img src="./public/register.png" width="400"/>
<img src="./public/profile.png" width="400"/>
<img src="./public/hovering.png" width="400"/>



## 🌟 PARD 5기 웹파트 3차 세미나 과제 🌟

🎯 **실제 구현!** 

- 1️⃣ **피드 모달 및 상세 게시물 구현**
    - `mypage` 파일 내부에 **게시물 상세 모달**을 구성하고, 클릭 시 모달이 열리고 닫히도록 이벤트 처리

    - 피드 목록에서 게시물 클릭 시 모달이 나타나도록 구현

    - 페이지 전환 없이 **모달 내부에서 상세 내용** 확인 가능해야 함


- 2️⃣ **like 상태 관리 (이벤트 기반)**
    - 좋아요 버튼 클릭 시 **`onClick` 이벤트**를 통해 좋아요 상태를 `useState`로 관리

    - 좋아요 상태가 바뀔 때마다 하트 색상이 변경되도록 구현

    - 좋아요 상태가 변경되면, 피드에도 반영되어야 함 (즉, 모달을 닫았다가 다시 열어도 반영된 상태 유지)

    - `useEffect`를 활용하여 좋아요 변경 이벤트를 감지 및 반영


- 3️⃣ **댓글 기능 구현**
    - 댓글 입력칸(`input`)과 추가 버튼을 구현

    - 입력된 댓글은 `useState<string[]>`로 배열 형태로 저장

    - 댓글은 `map()`을 사용하여 리스트로 렌더링

    - 이전 댓글을 보존하면서 새 댓글을 추가하기 위해 **전개 연산자([...prev])**를 활용


- 4️⃣ **컴포넌트 분리 및 폴더 구조 최적화**
    - 피드 카드, 모달, 댓글 리스트 등을 **컴포넌트 단위로 분리**하여 재사용성 확보


📸 **페이지 미리보기**  
-좋아요 클릭 전 초기 상태 및 게시물 선택 전

<img src="./public/first.png" width="400"/>

-게시물 클릭시 모달창

<img src="./public/modal.png" width="400"/>

-좋아요 클릭 시 하트 색상 변화

<img src="./public/change.png" width="400"/>

-피드 좋아요 변화

<img src="./public/state.png" width="400"/>

-댓글 입력시

<img src="./public/comment_save.png" width="400"/>




## 🌟 PARD 5기 웹파트 4차 세미나 과제 🌟

 ## 과제 설명

- 1️⃣ 사용자 정보 전역 상태 관리
    
    **✅ 구현 목표 정리**
    
    1. **Zustand를 활용한 전역 상태 관리**
    - RegisterPage에서 입력한 **휴대폰 번호, 이름, 닉네임, 비밀번호**를 Zustand로 전역 상태로 관리한다.
    
    1. **회원가입 후 MyPage 반영**
    - 가입 버튼 클릭 시 MyPage로 이동하며, 상단에 **RegisterPage에서 입력한 닉네임**이 반영되어 표시되도록 한다.
    
    1. **프로필 편집 기능 구현**
    - MyPage에서 **“프로필 편집”** 버튼 클릭 시 InfoEditPage로 이동한다.
    - 닉네임을 수정한 후 **“제출”** 버튼을 누르면 MyPage로 돌아가며, 수정된 닉네임이 반영된다.
    - 수정 완료 시 “수정이 완료되었습니다!”라는 alert 창이 표시되도록 한다.
    
- 2️⃣ 반응형 웹 페이지 구현
    
    MyPage에 다음 3가지 반응형을 적용한다.
    
    - DesktopView: 화면 너비 1024px 이상
    - TabletView: 화면 너비 640px 이상 1023px 이하
    - MobielView: 화면 너비 639px 이하

🎯 **파일명** 
    - store/userStore.ts
    - mypage/InfoEditPage.tsx
    - styles/InfoEditPage.module.css

## 🛠️ 구현한 주요 기능 요약

- **반응형 MyPage 레이아웃**
  - 데스크탑 / 태블릿 / 모바일 뷰에 따라 레이아웃 자동 조정
  - 사진 갤러리 3열 그리드로 정렬, 해상도에 따라 크기 자동 조절

- **반응형 Sidebar 네비게이션**
  - 데스크탑: 사이드바 좌측 고정, 아이콘 + 텍스트 전부 표시
  - 태블릿: 사이드바 좌측 고정, 아이콘만 표시
  - 모바일: 사이드바 하단 고정, 메뉴 일부 숨김(로고, DM, 만들기)

- **모달 기반 포스트 뷰어**
  - 게시물 클릭 시 이미지 + 좋아요/댓글 UI가 포함된 모달 팝업

- **전역 상태 관리**
  - Zustand를 활용해 사용자 닉네임 등 전역 데이터 관리
  - 프로필 편집 페이지 연동

---

## 🧱 사용 기술 스택 및 구조 설명

### 🔧 기술 스택
- **Next.js**: 파일 기반 라우팅 + SSR 지원
- **CSS Modules**: 컴포넌트 단위의 스타일링 관리
- **Zustand**: 전역 상태 관리 (간편하고 가벼운 Flux 라이브러리)
- **TypeScript**: 타입 안정성 및 예측 가능한 코드 구조
- **Next/Image**: 이미지 최적화 및 자동 사이징


📸 **페이지 미리보기**  

-가입 페이지에서 사용자 이름 입력후 가입 클릭시 -> mypage변화

<img src="./public/4_1.png" width="400"/>
<img src="./public/4_2.png" width="400"/>


-프로필 편집 클릭시 InfoEditPage로 이동 & 제출 클릭시 -> mypage변화

<img src="./public/4_3.png" width="400"/>
<img src="./public/4_4.png" width="400"/>
<img src="./public/4_5.png" width="400"/>


-반응형 웹페이지!

<img src="./public/4_5.png" width="400"/>
<img src="./public/4_6.png" width="400"/>
<img src="./public/4_7.png" width="400"/>