import React from "react";
import useReveal from "../hooks/useReveal";

export default function Greeting() {
  const [ref, visible] = useReveal();

  return (
    <section className="greeting-section">
      <svg
        className="greeting-fern"
        width="160"
        height="20"
        viewBox="0 0 160 20"
        fill="none"
      >
        <g stroke="#9b8aa8" strokeWidth="1">
          <line x1="0" y1="10" x2="55" y2="10" />
          <line x1="10" y1="10" x2="2" y2="3" />
          <line x1="20" y1="10" x2="12" y2="3" />
          <line x1="30" y1="10" x2="22" y2="3" />
          <line x1="40" y1="10" x2="32" y2="3" />
          <line x1="105" y1="10" x2="160" y2="10" />
          <line x1="150" y1="10" x2="158" y2="3" />
          <line x1="140" y1="10" x2="148" y2="3" />
          <line x1="130" y1="10" x2="138" y2="3" />
          <line x1="120" y1="10" x2="128" y2="3" />
        </g>
      </svg>

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
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

        <img
          className="greeting-photo"
          src="https://plus.unsplash.com/premium_photo-1671127286475-70d19cdbb6f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="신랑 신부 손 사진"
        />
      </div>
    </section>
  );
}
