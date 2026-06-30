import React from "react";
import useReveal from "../hooks/useReveal";

export default function Family() {
  const [ref, visible] = useReveal();

  return (
    <section className="family-section">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <div className="family-group">
          <span className="family-chip">신랑</span>
          <div className="family-name-kr">현욱</div>
          <div className="family-name-en">WOOK</div>
          <p className="family-parents">
            차석진 <span className="rel">·</span> 이민서
            <br />
            <span className="rel">아들</span>
          </p>
        </div>

        <div className="family-group">
          <span className="family-chip">신부</span>
          <div className="family-name-kr">주현</div>
          <div className="family-name-en">JUHYUN</div>
          <p className="family-parents">
            박도윤 <span className="rel">·</span> 황은지
            <br />
            <span className="rel">딸</span>
          </p>
        </div>

        <button type="button" className="family-contact-btn">
          축하 연락하기
          <span>→</span>
        </button>
      </div>
    </section>
  );
}
