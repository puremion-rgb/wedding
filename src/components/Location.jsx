import React from "react";
import useReveal from "../hooks/useReveal";

export default function Location() {
  const [ref, visible] = useReveal();

  return (
    <section className="location-section">
      <h3 className="section-heading">LOCATION</h3>

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="location-venue">더 플라자 지스텀하우스 (22층)</p>
        <p className="location-addr">서울 중구 소공로 119</p>

        <div className="map-placeholder">
          <span>카카오맵 · 네이버맵 연동 영역</span>
        </div>

        <button type="button" className="map-link">
          📍 카카오맵 열기
        </button>

        <div className="transit-block">
          <h5>
            <span className="icon-tag">자차</span>내비게이션
          </h5>
          <p>
            '서울 웨스틴조선호텔' 검색
            <br />
            서울시 중구 소공로 106 서울 웨스틴조선호텔
          </p>
        </div>

        <div className="transit-block">
          <h5>
            <span className="icon-tag">버스</span>버스 이용 시
          </h5>
          <p>
            172 (우리은행종로지점 방면) · 서울광장역 하차 → 데미타스커피 왼쪽
            방면 도보 5분
            <br />
            405 (롯데백화점 방면) · 서울광장역 하차 → 데미타스커피 왼쪽 방면
            도보 5분
            <br />
            472 (을지로입구 방면) · 시청역 하차 → 도보 5분
          </p>
        </div>

        <div className="transit-block">
          <h5>
            <span className="icon-tag">지하철</span>지하철 이용 시
          </h5>
          <p>
            1호선(시청역) 시청역 11번 출구 → 10번 출구 도보 5분
            <br />
            2호선 (을지로입구역) 을지로입구역 4번 출구 → 10번 출구 도보 5분
          </p>
        </div>

        <div className="transit-block">
          <h5>
            <span className="icon-tag">주차</span>주차 이용 시
          </h5>
          <p>
            더 플라자 호텔 주차장 : 하객 3시간 무료 주차현장 주차 요원 안내를
            받아주세요.
          </p>
        </div>
      </div>
    </section>
  );
}
