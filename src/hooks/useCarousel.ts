import { useEffect, useState } from "react";

export default function useCarousel(
  setActive: React.Dispatch<React.SetStateAction<number>>,
  length: number
) {
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let carouselInterval = 0;

    if (!pause) {
      carouselInterval = setInterval(() => {
        setActive((prev) => (prev + 1) % length);
      }, 3000);
    } else if (carouselInterval) {
      clearInterval(carouselInterval);
    }

    return () => clearInterval(carouselInterval);
  }, [pause]);

  return { setPause };
}
