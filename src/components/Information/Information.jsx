import React from "react";
import useReveal from "../../hooks/useReveal";
import "./Information.css";

export default function Information() {
  const [ref, visible] = useReveal();

  return (
    <section className="info-section">
      <h3 className="section-heading">INFORMATION</h3>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--ink-soft)",
          marginBottom: "2.4rem",
        }}
      >
        안내
        <br />
        저희 웨딩에 대한 사전 안내를 드립니다
      </p>

      <div
        ref={ref}
        className={`info-card reveal ${visible ? "is-visible" : ""}`}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1723809610525-ef33cb1b02e0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="웨딩 테이블 세팅"
        />
        <div className="info-card-body">
          <p className="info-card-title">코스 식사 안내</p>
          <p className="info-card-text">
            결혼식과 함께 코스 식사요리가 진행됩니다.
            <br />
            예식 분위기와 어울리는 요리들이 순차적으로 제공되오니
            <br />
            식과 함께 편안한 마음으로 함께해 주시기 바랍니다.
          </p>
        </div>
      </div>
    </section>
  );
}
