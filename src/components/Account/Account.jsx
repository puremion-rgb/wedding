import React, { useState } from "react";
import useReveal from "../../hooks/useReveal";
import "./Account.css";
import "../../styles/toast.css";

const ACCOUNTS = [
  {
    id: "groom",
    label: "신랑측에게",
    bank: "국민은행",
    number: "123-456-789012",
    owner: "차현욱",
  },
  {
    id: "bride",
    label: "신부측에게",
    bank: "신한은행",
    number: "987-654-321098",
    owner: "박주현",
  },
];

export default function Account() {
  const [ref, visible] = useReveal();
  const [openId, setOpenId] = useState(null);
  const [toast, setToast] = useState("");

  const copyAccount = (acc) => {
    const text = `${acc.bank} ${acc.number} (${acc.owner})`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setToast("계좌번호가 복사되었습니다");
        setTimeout(() => setToast(""), 2200);
      });
    }
  };

  return (
    <section className="account-section">
      <p style={{ fontSize: "1rem", color: "var(--ink)", marginBottom: "0.6rem" }}>
        마음 전하실 곳
      </p>
      <p className="account-lead">
        참석이 어려우신 분들을 위해 기재했습니다
        <br />
        너그러운 마음으로 양해 부탁드립니다
      </p>

      <div ref={ref} className={`account-list reveal ${visible ? "is-visible" : ""}`}>
        {ACCOUNTS.map((acc) => {
          const isOpen = openId === acc.id;
          return (
            <div className="acc-item" key={acc.id}>
              <button
                className="acc-btn"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : acc.id)}
              >
                <span>{acc.label}</span>
                <span className="chev">⌄</span>
              </button>
              <div className={`acc-panel ${isOpen ? "open" : ""}`}>
                <div className="acc-panel-inner">
                  <p className="bank">{acc.bank} {acc.number}</p>
                  <p className="owner">예금주: {acc.owner}</p>
                  <button
                    className="acc-copy"
                    onClick={() => copyAccount(acc)}
                  >
                    계좌번호 복사
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {toast && <div className="toast">{toast}</div>}
    </section>
  );
}
