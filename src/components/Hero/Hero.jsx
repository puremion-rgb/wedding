import React, { useState, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const petals = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 8 + 6}px`,
    height: `${Math.random() * 8 + 6}px`,
    animationDuration: `${Math.random() * 5 + 5}s`,
    animationDelay: `${Math.random() * 5}s`,
  }));

  return (
    <section className="hero-section">
      <audio ref={audioRef} loop src="/bgm.mp3" />

      <button
        className="bgm-btn"
        onClick={togglePlay}
        aria-label="음악 재생/일시정지"
      >
        {isPlaying ? (
          <div className="equalizer">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        ) : (
          <div className="play-icon" />
        )}
      </button>

      <img
        className="hero-img"
        src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop"
        alt="신랑 신부 메인 웨딩 사진"
      />
      <div className="hero-veil" />

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

      {/* 두겹 하트 프레임 — 화면 위/아래로 흘러넘치는 세로로 긴 두겹선 하트 */}
      <svg
        className="hero-lines"
        viewBox="0 0 400 760"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 바깥 하트 */}
        <path
          d="M200,830
             C200,830 28,508 28,218
             C28,46 90,-40 145,14
             C165,35 185,74 200,121
             C215,74 235,35 255,14
             C310,-40 372,46 372,218
             C372,508 200,830 200,830 Z"
          stroke="rgba(255,255,255,.82)"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 안쪽 하트 (두겹 효과, 바깥 하트를 중심 기준 약 95.5%로 축소) */}
        <path
          d="M200,810
             C200,810 36,503 36,226
             C36,62 95,-20 147,31
             C167,51 186,88 200,133
             C214,88 233,51 253,31
             C305,-20 364,62 364,226
             C364,503 200,810 200,810 Z"
          stroke="rgba(255,255,255,.38)"
          strokeWidth="1.2"
          fill="none"
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
