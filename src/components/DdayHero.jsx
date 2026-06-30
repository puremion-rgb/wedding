import React from "react";
import useReveal from "../hooks/useReveal";

export default function DdayHero() {
  const [ref, visible] = useReveal();

  return (
    <section ref={ref} className={`dday-hero reveal ${visible ? "is-visible" : ""}`}>
      <div className="dday-date">
        AUG 1
        <br />
        2026
      </div>
      <div className="dday-label">WEDDING DAY</div>
    </section>
  );
}
