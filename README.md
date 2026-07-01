# 💍 모바일 청첩장 프로젝트

리액트(React)를 활용하여 제작한 모바일 청첩장 웹 애플리케이션입니다.

## 1. 프로젝트 주제

- **컬러 블록 기반 스토리텔링**: 흰 배경에 콘텐츠만 나열하는 대신, 세이지 그린과 더스티 라벤더 두 가지 톤을 섹션마다 교차 배치해 스크롤할 때마다 화면의 분위기가 전환되도록 설계했습니다. 색의 전환 자체가 청첩장을 읽어 내려가는 리듬이 되도록 의도했습니다.
- **풍부한 기능 구성**: 단순 정보 나열형 청첩장이 아니라, 실시간 카운트다운, 캘린더, 슬라이더 갤러리, 라이트박스, 아코디언, 방명록, 그리고 실제로 입력 가능한 RSVP 모달까지 — 상용 청첩장 플랫폼 수준의 인터랙션을 갖춘 한 페이지 애플리케이션을 목표로 했습니다.
- **모바일 퍼스트(Mobile-First) 디자인**: 모바일 기기 환경에 최적화된 화면 비율과 가독성을 최우선으로 고려하여 설계되었습니다.
- **유지보수 지향 아키텍처**: 14개 섹션을 각각 독립된 React 컴포넌트로 분리하고, 스크롤 reveal 로직은 재사용 가능한 커스텀 훅(`useReveal`)으로 추출해 코드의 재사용성과 확장성을 확보했습니다.
- **컴포넌트 단위 CSS 분리**: 하나의 거대한 `index.css` 대신, 각 컴포넌트 폴더 안에 동일한 이름의 CSS 파일(`Hero/Hero.css`, `Family/Family.css` 등)을 두어 스타일과 컴포넌트를 1:1로 매칭했습니다. 여러 컴포넌트가 함께 쓰는 스타일(리빌 애니메이션, 모달, 토스트 등)은 `styles/` 폴더에 공용 파일로 분리해 중복을 없앴습니다.

## 2. 주요 구현 기능

### 🧱 컴포넌트 기반 레이아웃 (14개 섹션)

- **Hero (메인 커버)**: 풀스크린 배경 사진 위에 스크립트체("We are getting married") 문구를 단계적으로 페이드인시켜 첫인상을 연출합니다.
- **Greeting (초대 문구, 라벤더 블록)**: 시구 인용과 신랑·신부 인사말, 손을 맞잡은 사진으로 구성된 섹션입니다.
- **D-day Hero (그린 풀블록)**: 결혼식 날짜를 큰 이탤릭 세리프 타이포로 강조하는 전환용 섹션입니다.
- **Calendar (캘린더 + 실시간 카운트다운)**: 결혼식 달의 달력을 직접 그려 예식일을 동그라미로 표시하고, `setInterval`로 매초 갱신되는 D-day 카운트다운(일/시/분/초)을 구현했습니다.
- **Family (혼주 정보, 라벤더 블록)**: 신랑·신부 측 부모님 성함과 관계를 칩(Chip) 라벨과 함께 정리했고, 축하 연락하기 버튼을 배치했습니다.
- **Timeline (커플 스토리)**: 두 사람이 만난 시점부터 프로포즈까지의 이야기를 좌우 교차 배치 레이아웃으로 구성했고, 일부 사진은 폴라로이드 프레임 스타일로 차별화했습니다.
- **Q&A (신랑 신부 인터뷰, 라벤더 블록)**: 하객들에게 두 사람의 첫인상과 가치관 등 진솔한 이야기를 전하는 인터뷰 섹션입니다. 아코디언 UI를 적용해 질문을 탭하면 숨겨져 있던 답변이 부드럽게 펼쳐지도록 구현했습니다. `useReveal` 훅을 통해 스크롤 뷰 진입 시 자연스럽게 떠오르도록 구성했습니다.
- **Gallery (웨딩 갤러리)**: 단일 슬라이더 형태의 갤러리이며, 하단 점(dot) 인디케이터로 사진을 전환하고 클릭 시 확대해 볼 수 있습니다.
- **Location (오시는 길)**: 예식장 주소와 교통수단(자차/버스) 안내를 정리했습니다.
- **Account (마음 전하실 곳)**: 신랑 측·신부 측 계좌를 분리해 원하는 쪽만 펼쳐볼 수 있고, 계좌번호 복사 버튼을 제공합니다.
- **Message Board (방명록, 라벤더 블록)**: 하객이 남긴 축하 메시지를 카드 형태로 보여주고, 메시지 남기기 버튼을 배치했습니다.
- **Information (안내사항)**: 코스 식사 안내 등 예식 관련 사전 공지를 카드 형태로 제공합니다.
- **RSVP (참석 의사 응답)**: 버튼을 누르면 신랑/신부측 선택, 참석 여부 선택, 이름 입력까지 진행할 수 있고, 제출 시 완료 메시지로 전환됩니다.
- **Closing (마무리 + 공유)**: 인용구와 함께 청첩장을 마무리하며, 카카오톡 공유하기·청첩장 주소 복사하기 버튼을 하단에 배치했습니다.

### 🎨 UI/UX 및 인터랙션 디테일

- **스크롤 reveal 애니메이션**: `IntersectionObserver` 기반의 `useReveal` 커스텀 훅으로 각 섹션이 화면에 들어올 때 부드럽게 떠오르며(`fade-up`) 나타납니다. 스크린샷 원본의 "스크롤할 때마다 반응형으로 나타나는" 연출을 그대로 재현했습니다.
- **컬러 블록 전환**: 오프화이트(기본) → 라벤더 → 그린 → 오프화이트 → 라벤더 순으로 배경색이 전환되며 섹션 간 경계를 시각적으로 분리합니다.
- **실시간 데이터 처리**: 캘린더 섹션의 카운트다운은 실제 `Date` 객체를 기반으로 매초 재계산되어 정확한 D-day를 보여줍니다.
- **모바일 뷰포트 고정**: 데스크톱 환경에서도 모바일 화면 비율(`max-width: 28rem / 448px`)을 고정하고 중앙 정렬 처리하여 일관된 레이아웃을 보장합니다.
- **접근성**: `prefers-reduced-motion` 사용자를 위해 애니메이션을 최소화하는 처리를 포함했습니다.

## 3. 컬러 & 타이포그래피

- **컬러 팔레트**: 세이지 그린 `#7c9a82` / 더스티 라벤더 `#9b8aa8` 를 메인 톤으로, 각각의 페일 톤(`#e3ebe2`, `#ece6f0`)을 보조 배경으로 사용했습니다. 텍스트는 차콜 `#2b2a2e`과 딥 플럼 `#4a3b52`을 헤딩에 사용해 채도를 절제했습니다.
- **타이포그래피**: 영문 디스플레이(날짜, 이니셜, 섹션 타이틀)에는 Cormorant Garamond 이탤릭 세리프를, 한글 본문에는 Noto Serif KR을 사용해 위계를 분명히 했습니다.

## 4. 기술 스택 (Tech Stack)

- **Library**: React.js (Hooks: `useState`, `useEffect`, `useRef`, `IntersectionObserver`, `setInterval`)
- **Styling**: 기본 CSS3 (CSS 변수 기반 디자인 토큰). 컴포넌트별 CSS 파일 + 공용(`styles/`) CSS로 분리 관리
- **Typography**: Noto Serif KR, Cormorant Garamond (Google Fonts)

## 5. 파일 구조

```
src/
├── App.jsx
├── main.jsx
├── hooks/
│   └── useReveal.js
├── assets/
│   └── (웨딩 사진 등)
├── styles/
│   ├── global.css      # 폰트, reset, 컬러 토큰, .reveal / .eyebrow / .section-heading 등 전역·공용 스타일
│   ├── modal.css        # Family / MessageBoard / Rsvp가 함께 쓰는 모달 공용 스타일
│   └── toast.css        # Account / Closing가 함께 쓰는 토스트 알림 공용 스타일
└── components/
    ├── Hero/
    │   ├── Hero.jsx
    │   └── Hero.css
    ├── Greeting/
    │   ├── Greeting.jsx
    │   └── Greeting.css
    ├── DdayHero/
    │   ├── DdayHero.jsx
    │   └── DdayHero.css
    ├── Calendar/
    │   ├── Calendar.jsx
    │   └── Calendar.css
    ├── Family/
    │   ├── Family.jsx
    │   └── Family.css      # 축하 연락하기 모달 전용 스타일 포함
    ├── Timeline/
    │   ├── Timeline.jsx
    │   └── Timeline.css
    ├── Qna/
    │   ├── Qna.jsx
    │   └── Qna.css
    ├── Gallery/
    │   ├── Gallery.jsx
    │   └── Gallery.css
    ├── Location/
    │   ├── Location.jsx
    │   └── Location.css
    ├── Account/
    │   ├── Account.jsx
    │   └── Account.css
    ├── MessageBoard/
    │   ├── MessageBoard.jsx
    │   └── MessageBoard.css  # 방명록 작성 모달 전용 스타일 포함
    ├── Information/
    │   ├── Information.jsx
    │   └── Information.css
    ├── Rsvp/
    │   ├── Rsvp.jsx
    │   └── Rsvp.css          # RSVP 모달 전용 스타일 포함
    └── Closing/
        ├── Closing.jsx
        └── Closing.css
```

> 각 컴포넌트는 자기 자신의 CSS 파일을 직접 `import "./ComponentName.css"` 형태로 불러오며, 여러 컴포넌트가 공유하는 스타일(리빌 애니메이션, 모달, 토스트)만 `styles/` 폴더에서 별도로 import합니다.

## 6. 실행 방법 (Getting Started)

1. 위 파일들을 동일한 디렉토리 구조(컴포넌트별 폴더 + CSS 포함)로 React 프로젝트의 `src` 폴더에 넣습니다.
2. `components/Hero/Hero.jsx`, `Greeting/Greeting.jsx`, `Timeline/Timeline.jsx`, `Gallery/Gallery.jsx`, `Closing/Closing.jsx`, `Information/Information.jsx`의 이미지 `src`를 실제 웨딩 사진 경로로 교체합니다.
3. `components/Calendar/Calendar.jsx` 상단의 `WEDDING_DATE` 값을 실제 예식 일시로 변경하면 캘린더와 카운트다운에 자동 반영됩니다.
4. `components/Hero/Hero.jsx`, `Family/Family.jsx`, `Rsvp/Rsvp.jsx`, `Closing/Closing.jsx` 등에 하드코딩된 신랑·신부 성함, 혼주 성함, 예식장 정보를 실제 정보로 교체합니다.
5. `components/Location/Location.jsx`의 `.map-placeholder` 영역에 카카오맵 SDK를 연동하면 완성됩니다.
6. 각 컴포넌트의 스타일을 수정하고 싶다면 `index.css`가 아니라 해당 컴포넌트 폴더 안의 CSS 파일(예: `components/Hero/Hero.css`)을 수정하면 됩니다. 여러 컴포넌트가 공유하는 스타일은 `styles/global.css`, `styles/modal.css`, `styles/toast.css`에서 관리합니다.
7. `npm install` 후 `npm start`(또는 사용 중인 빌드 도구의 개발 서버 명령)로 실행합니다.
