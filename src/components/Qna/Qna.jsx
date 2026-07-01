import React, { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Qna.css";

const QNA_LIST = [
  {
    id: 1,
    q: "서로의 첫인상은 어땠나요?",
    aWook:
      "조용하고 차분한 사람인 줄 알았는데, 대화할수록 코드가 잘 맞아서 놀랐어요.",
    aJuhyun:
      "처음엔 조금 차가워 보였지만, 웃을 때 다정한 모습이 인상 깊었어요.",
  },
  {
    id: 2,
    q: "결혼을 결심하게 된 순간은?",
    aWook:
      "소소한 일상 속에서도 이 사람과 함께라면 평생 웃을 수 있겠다고 확신했어요.",
    aJuhyun:
      "어떤 힘든 일이 있어도 늘 제 편이 되어주는 든든함에 평생을 약속하게 되었습니다.",
  },
  {
    id: 3,
    q: "앞으로 어떤 부부가 되고 싶나요?",
    aWook:
      "서로의 다름을 존중하고, 같은 곳을 바라보며 걸어가는 친구 같은 부부가 되겠습니다.",
    aJuhyun:
      "매일 아침 눈을 뜰 때마다 감사함을 느끼는, 따뜻하고 화목한 가정을 꾸리고 싶어요.",
  },
];

export default function Qna() {
  const [ref, visible] = useReveal({ threshold: 0.15 });
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section className="qna-section">
      <h3 className="section-heading">OUR STORY</h3>
      <p className="qna-caption">우리의 첫 만남부터 지금까지</p>

      <div
        ref={ref}
        className={`qna-list reveal ${visible ? "is-visible" : ""}`}
      >
        {QNA_LIST.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="qna-item">
              <button
                className="qna-btn"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
              >
                <span className="qna-q-text">
                  <span className="qna-q-mark">Q.</span> {item.q}
                </span>
                <span className="chev">⌄</span>
              </button>

              <div className={`qna-panel ${isOpen ? "open" : ""}`}>
                <div className="qna-panel-inner">
                  <div className="qna-answer">
                    <span className="qna-who groom">WOOK</span>
                    <p>{item.aWook}</p>
                  </div>
                  <div className="qna-answer bride-answer">
                    <span className="qna-who bride">JUHYUN</span>
                    <p>{item.aJuhyun}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
