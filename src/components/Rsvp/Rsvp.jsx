import React, { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Rsvp.css";
import "../../styles/modal.css";

export default function Rsvp() {
  const [ref, visible] = useReveal();
  const [modalOpen, setModalOpen] = useState(false);
  const [side, setSide] = useState(null);
  const [attend, setAttend] = useState(null);
  const [name, setName] = useState("");
  const [phoneTail, setPhoneTail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!side || !attend || !name.trim()) return;
    setSubmitted(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setSide(null);
    setAttend(null);
    setName("");
    setPhoneTail("");
  };

  return (
    <section className="rsvp-section">
      <h3 className="section-heading">RSVP</h3>
      <p className="rsvp-caption">
        참석 의사
        <br />
        모든 분들을 소중히 모실 수 있도록 전해주세요
      </p>

      <div
        ref={ref}
        className={`rsvp-card reveal ${visible ? "is-visible" : ""}`}
      >
        <p className="rsvp-names">
          신랑 차현욱 <span className="heart">♥</span> 신부 박주현
        </p>
        <p className="rsvp-details">
          2026년 8월 1일
          <br />
          토요일 오후 12시
          <br />
          서울 신라호텔 영빈관
        </p>
        <button
          type="button"
          className="rsvp-btn"
          onClick={() => setModalOpen(true)}
        >
          참석 의사 체크하기
        </button>
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="닫기"
            >
              ×
            </button>

            {submitted ? (
              <>
                <p className="modal-title">감사합니다</p>
                <p className="modal-sub">
                  참석 의사가 정상적으로 전달되었습니다.
                  <br />
                  소중한 발걸음 감사드립니다.
                </p>
              </>
            ) : (
              <>
                <p className="modal-title">참석 의사 체크하기</p>
                <p className="modal-sub">
                  한 분 한 분을 소중히 모실 수 있도록
                  <br />
                  참석 의사를 전해주시면 감사하겠습니다.
                </p>

                <div className="modal-field">
                  <label>
                    어느 분의 하객이신가요? <span className="req">*</span>
                  </label>
                  <div className="modal-toggle">
                    <button
                      type="button"
                      className={side === "groom" ? "selected" : ""}
                      onClick={() => setSide("groom")}
                    >
                      신랑
                    </button>
                    <button
                      type="button"
                      className={side === "bride" ? "selected" : ""}
                      onClick={() => setSide("bride")}
                    >
                      신부
                    </button>
                  </div>
                </div>

                <div className="modal-field">
                  <label>
                    참석하실 수 있나요? <span className="req">*</span>
                  </label>
                  <div className="modal-toggle">
                    <button
                      type="button"
                      className={attend === "yes" ? "selected" : ""}
                      onClick={() => setAttend("yes")}
                    >
                      참석할게요
                    </button>
                    <button
                      type="button"
                      className={attend === "no" ? "selected" : ""}
                      onClick={() => setAttend("no")}
                    >
                      참석이 어려워요
                    </button>
                  </div>
                </div>

                <div className="modal-field">
                  <label>
                    성함이 어떻게 되시나요? <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="참석자 본인 성함"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="modal-field">
                  <label>동명이인 체크를 위한 번호를 알려주세요</label>
                  <input
                    type="text"
                    placeholder="핸드폰 번호 뒤 4자리"
                    value={phoneTail}
                    onChange={(e) => setPhoneTail(e.target.value)}
                    maxLength={4}
                  />
                </div>

                <button
                  type="button"
                  className="modal-submit"
                  onClick={handleSubmit}
                >
                  체크 완료하기
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
