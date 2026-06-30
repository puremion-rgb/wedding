import { useEffect, useRef, useState } from "react";

/**
 * 요소가 뷰포트에 들어오면 true로 바뀌는 간단한 스크롤 reveal 훅.
 * 청첩장 전체에서 같은 패턴(.reveal / .is-visible)을 재사용하기 위해 분리했습니다.
 */
export default function useReveal(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
}
