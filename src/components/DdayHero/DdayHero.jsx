import React from "react";
import useReveal from "../../hooks/useReveal";
import "./DdayHero.css";

export default function DdayHero() {
  const [dateRef, dateVisible] = useReveal({ threshold: 0.4 });
  const [labelRef, labelVisible] = useReveal({ threshold: 0.4 });

  return (
    <section className="dday-hero">
      <div
        ref={dateRef}
        className={`dday-date reveal ${dateVisible ? "is-visible" : ""}`}
      >
        AUG 1<br />2026
      </div>
      <div
        ref={labelRef}
        className={`dday-label reveal ${labelVisible ? "is-visible" : ""}`}
        style={{ transitionDelay: "0.15s" }}
      >
        WEDDING DAY
      </div>
    </section>
  );
}
