import React from "react";
// ✅ 1. assets 폴더에 넣은 지도 이미지 불러오기
import mapImage from "../../assets/cee895bb.png";
import "./Location.css";

export default function Location() {
  const locationName = "서울 신라호텔 영빈관";
  const locationAddress = "서울특별시 중구 동호로 249";

  const lat = 37.5559;
  const lng = 127.0051;

  const naverMapUrl = `https://map.naver.com/v5/search/${locationName}`;
  const kakaoMapUrl = `https://map.kakao.com/link/map/${locationName},${lat},${lng}`;

  return (
    <section className="location-section">
      <h3 className="section-heading">LOCATION</h3>

      <h3 className="location-venue">{locationName}</h3>
      <p className="location-addr">{locationAddress}</p>

      {/* ✅ 2. 텍스트를 지우고 <img> 태그로 교체 */}
      <div className="map-placeholder">
        <img
          src={mapImage}
          alt="서울 신라호텔 약도"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      <div className="map-links-container">
        <a
          href={naverMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link naver"
        >
          네이버 지도
        </a>
        <a
          href={kakaoMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link kakao"
        >
          카카오맵
        </a>
      </div>

      <div className="transit-block">
        <h5>
          <span className="icon-tag">지하철</span>
        </h5>
        <p>
          3호선 동대입구역 5번 출구 (도보 3분)
          <br />* 5번 출구 앞에서 호텔 무료 셔틀버스 탑승 가능
        </p>
      </div>
      <div className="transit-block">
        <h5>
          <span className="icon-tag">버스</span>
        </h5>
        <p>
          장충체육관 앞 정류장 하차
          <br />
          간선: 144, 301 / 지선: 7212
        </p>
      </div>
      <div className="transit-block">
        <h5>
          <span className="icon-tag">주차</span>
        </h5>
        <p>
          호텔 내 고객 주차장 이용 (하객 3시간 무료)
          <br />* 만차 시 인근 장충단공원 공영주차장 이용 안내
        </p>
      </div>
    </section>
  );
}
