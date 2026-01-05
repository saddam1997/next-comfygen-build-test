import { useEffect, useRef } from "react";

const useInfiniteScroll = (
  speed = 0.6,
  direction: "left" | "right" = "left",
  isPaused = false
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useRef(0);
  const raf = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!ref.current) return;

      if (!isPaused) {
        const halfWidth = ref.current.scrollWidth / 2;
        x.current += direction === "left" ? -speed : speed;

        if (direction === "left" && Math.abs(x.current) >= halfWidth) {
          x.current = 0;
        }

        if (direction === "right" && x.current >= 0) {
          x.current = -halfWidth;
        }

        ref.current.style.transform = `translate3d(${x.current}px,0,0)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current!);
  }, [speed, direction, isPaused]);

  return ref;
};

export default useInfiniteScroll;
