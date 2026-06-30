import React, { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];
const WEDDING_DATE = new Date("2026-08-01T12:00:00+09:00");

function getDiff() {
  const now = new Date();
  const diff = Math.max(0, WEDDING_DATE.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function buildCalendarCells(year, monthIndex) {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i += 1) cells.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(d);
  return cells;
}

export default function Calendar() {
  const [ref, visible] = useReveal();
  const [time, setTime] = useState(getDiff());

  useEffect(() => {
    const timer = setInterval(() => setTime(getDiff()), 1000);
    return () => clearInterval(timer);
  }, []);

  const cells = buildCalendarCells(2026, 7); // August = index 7
  const targetDay = WEDDING_DATE.getDate();

  return (
    <section className="calendar-section">
      <p className="calendar-date-kr">2026년 8월 1일 토요일 | 오후 12시</p>
      <p className="calendar-date-en">Saturday, August 1, 2026 | PM 12:00</p>

      <div
        ref={ref}
        className={`calendar-grid reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="calendar-weekdays">
          {WEEKDAYS.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
        <div className="calendar-days">
          {cells.map((day, idx) => (
            <span
              key={idx}
              className={`day-cell ${day === targetDay ? "target" : ""}`}
            >
              {day ? <span>{day}</span> : ""}
            </span>
          ))}
        </div>

        <hr className="calendar-divider" />

        <div className="countdown-row">
          <div className="countdown-cell">
            <div className="countdown-num">{time.days}</div>
            <div className="countdown-unit">DAYS</div>
          </div>
          <div className="countdown-cell">
            <div className="countdown-num">{time.hours}</div>
            <div className="countdown-unit">HOURS</div>
          </div>
          <div className="countdown-cell">
            <div className="countdown-num">{time.minutes}</div>
            <div className="countdown-unit">MINUTES</div>
          </div>
          <div className="countdown-cell">
            <div className="countdown-num">{time.seconds}</div>
            <div className="countdown-unit">SECONDS</div>
          </div>
        </div>

        <p className="countdown-caption">
          현욱 <b>♥</b> 주현 결혼식이 <b>{time.days}일</b> 남았습니다
        </p>
      </div>
    </section>
  );
}
