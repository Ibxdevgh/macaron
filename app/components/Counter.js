"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export function Counter({ start = 0, target, suffix = "" }) {
  const [value, setValue] = useState(start);
  const counterRef = useRef(null);
  const animationRef = useRef(null);

  const animateCount = useCallback(
    (duration) => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      const startTimeRef = { time: null };

      const animate = (timestamp) => {
        if (!startTimeRef.time) startTimeRef.time = timestamp;
        const progress = timestamp - startTimeRef.time;

        // ease-out cubic
        const easedProgress = 1 - Math.pow(1 - progress / duration, 3);
        const currentValue = start + (target - start) * easedProgress;
        setValue(Math.floor(currentValue));

        if (progress < duration) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setValue(target);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    },
    [start, target]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(5000); // animate from start → target in 5s
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [animateCount]);

  const handleClick = () => animateCount(3000); // restart animation on click

  return (
    <span
      ref={counterRef}
      onClick={handleClick}
      className="w-full text-center tabular-nums cursor-pointer 
                 text-5xl md:text-6xl lg:text-7xl 
                 font-light text-black transition-all"
    >
      {value}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { start: 50, target: 96, suffix: "%", label: "GAIA Level 1" },
    { start: 500, target: 671, suffix: "B+", label: "Base Model for RL" },
    { start: 100, target: 216, suffix: "+", label: "Cases Generated" },
  ];

  return (
    <div className="w-full">
      <hr className="border-t border-gray-300/50 w-full" />

      <div className="flex gap-12 justify-center py-10 w-full">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-5 w-full">
            <Counter start={s.start} target={s.target} suffix={s.suffix} />
            <p className="text-center text-black/50 text-lg">{s.label}</p>
          </div>
        ))}
      </div>

      <hr className="border-t border-gray-300/50 w-full" />
    </div>
  );
}
