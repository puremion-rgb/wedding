import React from "react";
import useReveal from "../hooks/useReveal";

export default function MessageBoard() {
  const [ref, visible] = useReveal();

  return (
    <section className="message-section">
      <h3 className="section-heading" style={{ color: "var(--plum)" }}>
        MESSAGE
      </h3>
      <p className="message-caption">저희 둘에게 따뜻한 방명록을 남겨주세요</p>

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <div className="message-card">
          <p>
            주현아 ❤ 결혼을 진심으로 축하한다!
            <br />
            현욱이랑 둘이 지금처럼 행복하게 백년해로 하기를 😊
            <br />
            항상 웃음 가득한 하루하루 보내길 바랄게!
            <br />
            두 사람의 손길 가득한 청첩장 너무 예쁘다.
            <br />
            그림 같은 결혼식도 얼마나 예쁠지 벌써 넘 기대됩니당
          </p>
          <span className="sign">From 리나</span>
        </div>
        <br />
        <div className="message-card">
          <p>
            결혼을 진심으로 축하드립니다💕
            <br />
            사진도 청첩장도 너무 이뻐요!
            <br />
            항상 서로를 응원하고 아껴주는 모습이 이쁜 커플 🥰
            <br />
            행복한 결혼 생활 되길 바래요💜
          </p>
          <span className="sign">From sooyeon</span>
        </div>
        <br />
        <div className="message-card">
          <p>
            현욱아 결혼 진심으로 축하해!
            <br />
            웨딩스냅, 청첩장 모두 너무 예쁘다💚
            <br />
            둘만의 아름다운 결혼식도 기대하고 있어
            <br />
            남은 결혼식 준비도 잘 마무리하고!
            <br />
            행복한 결혼생활 되기를 바래
          </p>
          <span className="sign">From 지원</span>
        </div>

        <button type="button" className="message-write-btn">
          메시지 남기기
        </button>
      </div>
    </section>
  );
}
