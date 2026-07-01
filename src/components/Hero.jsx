import React, { useState, useRef } from "react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // 꽃잎 20개를 만들기 위한 배열 설정 (크기, 위치, 속도를 랜덤하게 부여)
  const petals = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`, // 가로 시작 위치 랜덤 (0~100%)
    width: `${Math.random() * 8 + 6}px`, // 너비 6~14px 랜덤
    height: `${Math.random() * 8 + 6}px`, // 높이 6~14px 랜덤
    animationDuration: `${Math.random() * 5 + 5}s`, // 떨어지는 속도 5~10초 랜덤
    animationDelay: `${Math.random() * 5}s`, // 시작 지연 시간 0~5초 랜덤
  }));

  return (
    <section className="hero-section">
      <audio ref={audioRef} autoPlay loop src="/bgm.mp3" />

      {/* 변경된 동그란 아이콘 버튼 */}
      <button
        className="bgm-btn"
        onClick={togglePlay}
        aria-label="음악 재생/일시정지"
      >
        {isPlaying ? (
          // image_4741a4.png 스타일 (이퀄라이저 막대)
          <div className="equalizer">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        ) : (
          // image_474184.png 스타일 (재생 삼각형)
          <div className="play-icon"></div>
        )}
      </button>

      <img
        className="hero-img"
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
        alt="신랑 신부 메인 웨딩 사진"
      />
      <div className="hero-veil" />

      {/* 흩날리는 꽃잎 컨테이너 */}
      <div className="petals-container">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal"
            style={{
              left: petal.left,
              width: petal.width,
              height: petal.height,
              animationDuration: petal.animationDuration,
              animationDelay: petal.animationDelay,
            }}
          />
        ))}
      </div>

      <svg
        className="hero-lines"
        viewBox="0 0 100 200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* 메인라인 */}

        <path
          d="
      M50 188

      C50 188 4 118 4 54

      C4 18 28 2 50 38

      C72 2 96 18 96 54

      C96 118 50 188 50 188
    "
          fill="none"
          stroke="rgba(255,255,255,.82)"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 안쪽라인 */}

        <path
          d="
      M50 181

      C50 181 9 116 9 57

      C9 25 30 10 50 42

      C70 10 91 25 91 57

      C91 116 50 181 50 181
    "
          fill="none"
          stroke="rgba(255,255,255,.45)"
          strokeWidth=".6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="hero-content">
        <p className="hero-script">We are getting married</p>
        <div className="hero-info">
          <span>WOOK</span>
          <span className="sep">·</span>
          <span>2026. 08. 01 SAT</span>
          <span className="sep">·</span>
          <span>JUHYUN</span>
        </div>
      </div>
    </section>
  );
}
