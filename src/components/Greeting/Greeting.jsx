import React, { useState, useEffect } from "react";
import useReveal from "../../hooks/useReveal";
import "./Greeting.css";

export default function Greeting() {
  const [ref, visible] = useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ 수정: return 바로 안쪽에 있던 JSX 주석을 바깥으로 빼거나 삭제해야 오류가 안 나!
  return (
    <section className="greeting-section" ref={ref}>
      {/* ✅ 수정: 우아하게 겹친 두 개의 리본 하트 모양 */}
      <svg
        className={`greeting-fern ${visible ? "is-drawn" : ""}`}
        width="100"
        height="45"
        viewBox="0 0 100 45"
        fill="none"
        stroke="#9b8aa8"
        strokeWidth="1.2"
        strokeLinecap="round" /* 선 끝을 부드럽게 둥글게 처리 */
        strokeLinejoin="round" /* 선이 꺾이는 부분도 부드럽게 처리 */
      >
        {/* 첫 번째 하트 (왼쪽) */}
        <path d="M40 15 C40 0, 15 0, 15 15 C15 25, 40 35, 40 35 C40 35, 65 25, 65 15 C65 5, 50 0, 40 15" />
        {/* 두 번째 하트 (오른쪽) */}
        <path d="M60 15 C60 0, 85 0, 85 15 C85 25, 60 35, 60 35 C60 35, 35 25, 35 15 C35 5, 50 0, 60 15" />
      </svg>

      <div className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="greeting-quote">
          사람이 온다는 건 실은 어마어마한 일이다.
          <br />
          그는 그의 과거와 현재와 그리고
          <br />
          그의 미래와 함께 오기 때문이다.
          <br />한 사람의 일생이 오기 때문이다.
        </p>
        <p className="greeting-cite">– 정현종, '방문객'</p>

        <p className="greeting-msg">
          저희 두 사람이 함께하는 새로운 시작에
          <br />
          귀한 발걸음으로 축복해 주시면 감사하겠습니다.
        </p>
        <p className="greeting-names">신랑 차현욱 · 신부 박주현</p>

        <div className="greeting-photo-wrapper">
          <img
            className="greeting-photo"
            src="https://plus.unsplash.com/premium_photo-1671127286475-70d19cdbb6f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="신랑 신부 손 사진"
            style={{
              // ✅ 수정: translateY 대신 translate3d를 사용하여 깔끔한 하드웨어 가속 유도
              transform: `scale(1.15) translate3d(0, ${scrollY * 0.04}px, 0)`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
