import React from "react";
import useReveal from "../hooks/useReveal";

export default function Closing() {
  const [ref, visible] = useReveal();

  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section
      ref={ref}
      className={`closing-section reveal ${visible ? "is-visible" : ""}`}
    >
      <img
        className="closing-img"
        src="https://images.unsplash.com/photo-1744497786604-0ceaf47fbaa1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="신랑 신부 해변 사진"
      />
      <div className="closing-quote-box">
        <p className="closing-quote">
          "당신은 내가 더 좋은 사람이고 싶게 만들어요."
        </p>
        <p className="closing-cite">– 영화 '이보다 더 좋을 순 없다' 중</p>
      </div>

      <div className="share-buttons">
        <button type="button" className="share-btn kakao">
          카카오톡으로 청첩장 전하기
          <span>↗</span>
        </button>
        <button type="button" className="share-btn link" onClick={copyLink}>
          청첩장 주소 복사하기
          <span>⧉</span>
        </button>
      </div>
    </section>
  );
}
