import React, { useEffect, useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Closing.css";
import "../../styles/toast.css";

export default function Closing() {
  const [ref, visible] = useReveal();
  const [toast, setToast] = useState("");
  const [kakaoReady, setKakaoReady] = useState(false);

  // Kakao SDK 로드
  useEffect(() => {
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        // 실제 서비스 시 본인의 JavaScript 키로 교체하세요
        window.Kakao.init("YOUR_KAKAO_JS_KEY");
      }
      setKakaoReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
    script.async = true;
    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("YOUR_KAKAO_JS_KEY");
      }
      setKakaoReady(true);
    };
    document.head.appendChild(script);
  }, []);

  const shareKakao = () => {
    if (!kakaoReady || !window.Kakao?.Share) {
      showToast("카카오톡 공유를 사용할 수 없습니다");
      return;
    }
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "차현욱 · 박주현 결혼합니다 💚",
        description: "2026년 8월 1일 토요일 오후 12시\n서울 신라호텔 영빈관",
        imageUrl:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  const copyLink = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast("청첩장 주소가 복사되었습니다");
      });
    } else {
      // fallback
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      showToast("청첩장 주소가 복사되었습니다");
    }
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <section
      ref={ref}
      className={`closing-section reveal ${visible ? "is-visible" : ""}`}
    >
      <img
        className="closing-img"
        src="https://images.unsplash.com/photo-1744497786604-0ceaf47fbaa1?q=80&w=686&auto=format&fit=crop"
        alt="신랑 신부 사진"
      />
      <div className="closing-quote-box">
        <p className="closing-quote">
          "당신은 내가 더 좋은 사람이고 싶게 만들어요."
        </p>
        <p className="closing-cite">– 영화 '이보다 더 좋을 순 없다' 중</p>
      </div>

      <div className="share-buttons">
        <button type="button" className="share-btn kakao" onClick={shareKakao}>
          카카오톡으로 청첩장 전하기
          <span>↗</span>
        </button>
        <button type="button" className="share-btn link" onClick={copyLink}>
          청첩장 주소 복사하기
          <span>⧉</span>
        </button>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </section>
  );
}
