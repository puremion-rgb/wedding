import React, { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./MessageBoard.css";
import "../../styles/modal.css";

const INITIAL_MESSAGES = [
  {
    id: 1,
    text: "주현아 ❤ 결혼을 진심으로 축하한다!\n현욱이랑 둘이 지금처럼 행복하게 백년해로 하기를 😊\n항상 웃음 가득한 하루하루 보내길 바랄게!\n두 사람의 손길 가득한 청첩장 너무 예쁘다.\n그림 같은 결혼식도 얼마나 예쁠지 벌써 넘 기대됩니당",
    sign: "From 리나",
  },
  {
    id: 2,
    text: "결혼을 진심으로 축하드립니다💕\n사진도 청첩장도 너무 이뻐요!\n항상 서로를 응원하고 아껴주는 모습이 이쁜 커플 🥰\n행복한 결혼 생활 되길 바래요💜",
    sign: "From sooyeon",
  },
  {
    id: 3,
    text: "현욱아 결혼 진심으로 축하해!\n웨딩스냅, 청첩장 모두 너무 예쁘다💚\n둘만의 아름다운 결혼식도 기대하고 있어\n남은 결혼식 준비도 잘 마무리하고!\n행복한 결혼생활 되기를 바래",
    sign: "From 지원",
  },
];

export default function MessageBoard() {
  const [ref, visible] = useReveal();
  const [modalOpen, setModalOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const MAX = 200;

  const handleSubmit = () => {
    if (!name.trim() || !text.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text, sign: `From ${name}` },
    ]);
    setSubmitted(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setName("");
    setPw("");
    setText("");
  };

  return (
    <section className="message-section">
      <h3 className="section-heading" style={{ color: "var(--plum)" }}>
        MESSAGE
      </h3>
      <p className="message-caption">저희 둘에게 따뜻한 방명록을 남겨주세요</p>

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        {messages.map((msg) => (
          <div className="message-card" key={msg.id}>
            <p style={{ whiteSpace: "pre-line" }}>{msg.text}</p>
            <span className="sign">{msg.sign}</span>
          </div>
        ))}

        <button
          type="button"
          className="message-write-btn"
          onClick={() => setModalOpen(true)}
        >
          메시지 남기기
        </button>
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="닫기"
            >
              ×
            </button>

            {submitted ? (
              <>
                <p className="modal-title">감사합니다 💜</p>
                <p className="modal-sub">
                  따뜻한 메시지가 전달되었습니다.
                  <br />
                  소중한 마음 감사히 받겠습니다.
                </p>
              </>
            ) : (
              <>
                <p className="modal-title">축하 메시지 작성하기</p>
                <p className="modal-sub" style={{ color: "var(--purple-deep)" }}>
                  저희 둘의 결혼을 함께 축하해 주세요
                </p>

                <div className="modal-field">
                  <input
                    type="text"
                    placeholder="성함을 남겨주세요"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="modal-field">
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해 주세요"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                  />
                </div>
                <div className="modal-field">
                  <textarea
                    className="message-textarea"
                    placeholder="200자 이내로 작성해 주세요"
                    value={text}
                    maxLength={MAX}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                  />
                  <p className="textarea-count">
                    {text.length}/{MAX}
                  </p>
                </div>

                <button
                  type="button"
                  className="modal-submit"
                  onClick={handleSubmit}
                >
                  작성 완료
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
