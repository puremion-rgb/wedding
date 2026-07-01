import React, { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Family.css";
import "../../styles/modal.css";

const CONTACTS = {
  groom: [
    { name: "차현욱", role: "신랑", tel: "010-0000-0000" },
    { name: "차석진", role: "신랑 아버지", tel: "010-0000-0001" },
    { name: "이민서", role: "신랑 어머니", tel: "010-0000-0002" },
  ],
  bride: [
    { name: "박주현", role: "신부", tel: "010-0000-0003" },
    { name: "박도윤", role: "신부 아버지", tel: "010-0000-0004" },
    { name: "황은지", role: "신부 어머니", tel: "010-0000-0005" },
  ],
};

export default function Family() {
  const [ref, visible] = useReveal();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("groom");

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

        <button
          type="button"
          className="family-contact-btn"
          onClick={() => setModalOpen(true)}
        >
          축하 연락하기
          <span>→</span>
        </button>
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={() => setModalOpen(false)}>
          <div
            className="modal-box contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="닫기"
            >
              ×
            </button>

            <p className="modal-title">축하 연락하기</p>
            <p className="modal-sub contact-sub">직접 축하의 마음을 전해보세요</p>

            {/* 탭 */}
            <div className="contact-tabs">
              <button
                type="button"
                className={`contact-tab ${activeTab === "groom" ? "active" : ""}`}
                onClick={() => setActiveTab("groom")}
              >
                신랑에게
              </button>
              <button
                type="button"
                className={`contact-tab ${activeTab === "bride" ? "active" : ""}`}
                onClick={() => setActiveTab("bride")}
              >
                신부에게
              </button>
            </div>

            {/* 연락처 카드 목록 */}
            <div className="contact-list">
              {CONTACTS[activeTab].map((person) => (
                <div className="contact-card" key={person.name}>
                  <div className="contact-card-top">
                    <span className="contact-name">{person.name}</span>
                    <span className="contact-role">{person.role}</span>
                  </div>
                  <div className="contact-card-actions">
                    <a
                      href={`sms:${person.tel}`}
                      className="contact-action-btn sms"
                    >
                      문자 보내기
                    </a>
                    <a
                      href={`tel:${person.tel}`}
                      className="contact-action-btn call"
                    >
                      전화하기
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
