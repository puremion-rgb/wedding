import React, { useState } from "react";
import useReveal from "../hooks/useReveal";

const PHOTOS = [
  "https://images.unsplash.com/photo-1708720456779-0ff913a105b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1763129636465-f4016848a06f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=900&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1675003663373-c613cac25b3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=900&auto=format&fit=crop",
];

export default function Gallery() {
  const [ref, visible] = useReveal();
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="gallery-section">
      <h3 className="section-heading">GALLERY</h3>
      <p className="gallery-caption">
        사진을 클릭하시면 전체 화면 보기가 가능합니다
      </p>

      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <div
          className="gallery-slider"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
        >
          {PHOTOS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`웨딩사진 ${i + 1}`}
              className={i === index ? "active" : ""}
            />
          ))}
        </div>

        <div className="gallery-dots">
          {PHOTOS.map((src, i) => (
            <button
              key={src}
              type="button"
              className={i === index ? "active" : ""}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`${i + 1}번째 사진 보기`}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>
          <img
            src={PHOTOS[index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
