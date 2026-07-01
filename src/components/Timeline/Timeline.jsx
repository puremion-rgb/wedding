import React from "react";
import useReveal from "../../hooks/useReveal";
import "./Timeline.css";

const STORY = [
  {
    chip: "☕️ 운명 같은 첫 인연",
    title: "22년 3월, 서울",
    desc: "서로 애정하던 카페에서 첫눈에 반한 우리",
    img: "https://images.unsplash.com/photo-1634465474088-e82e29b64ecc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    polaroid: true,
  },
  {
    chip: "💕 행복했던 3년 반",
    title: "연애 기간 1,280일",
    desc: "항상 대화와 웃음이 머물던 여러 계절들의 우리",
    img: "https://images.unsplash.com/photo-1506014299253-3725319c0f69?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    polaroid: true,
  },
  {
    chip: "💍 프로포즈",
    title: "첫 데이트 장소에서",
    desc: '준비는 오래, 대답은 짧게. "YES!"',
    img: "https://plus.unsplash.com/premium_photo-1661381043328-909bd5a68c05?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    polaroid: false,
  },
  {
    chip: "👰‍♀️🤵 웨딩데이",
    title: "25년 9월 20일 제주",
    desc: "이제는 둘이 아닌 하나로 걷기 시작하는 날",
    img: "https://images.unsplash.com/photo-1578013161233-99253c8e4caa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    polaroid: false,
  },
];

export default function Timeline() {
  const [ref, visible] = useReveal({ threshold: 0.15 });

  return (
    <section className="timeline-section">
      <h3 className="section-heading">OUR TIMELINE</h3>

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "var(--ink-soft)",
          }}
        >
          저희 연애의 타임라인입니다
          <br />
          서로에게 참 소중하고 감사한 존재
        </p>

        <div className="timeline-list">
          {STORY.map((item) => (
            <div className="timeline-row" key={item.title}>
              {item.polaroid ? (
                <div className="timeline-photo polaroid">
                  <img src={item.img} alt={item.title} />
                </div>
              ) : (
                <img
                  className="timeline-photo"
                  src={item.img}
                  alt={item.title}
                />
              )}
              <div className="timeline-copy">
                <span className="timeline-chip">{item.chip}</span>
                <p className="timeline-title">{item.title}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
