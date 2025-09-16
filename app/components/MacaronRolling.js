"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MacaronRolling() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        } else {
          setInView(false); // repeat animation when out of view
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const macarons = [
    { src: "/assets/image/macaron-latte.png", rotate: "120deg" },
    { src: "/assets/image/macaron-espresso.png", rotate: "-30deg" },
    { src: "/assets/image/macaron-mocha.png", rotate: "30deg" },
    { src: "/assets/image/macaron-coldbrew.png", rotate: "34deg" },
  ];

  return (
    <div
      ref={ref}
      aria-hidden={true}
      className="relative w-full h-[100px] md:h-[140px] overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 translate-y-[55%] flex flex-row items-center justify-start gap-24 pl-32 w-max">
        {macarons.map((m, i) => (
          <div
            key={i}
            className="relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72 transition-transform duration-[2000ms] ease-[cubic-bezier(.25,1,.5,1)]"
            style={{
              transform: inView
                ? `translateX(0) rotate(${m.rotate})`
                : `translateX(300px) rotate(${m.rotate})`, // slide in from right
              opacity: 1, // always visible
            }}
          >
            <Image
              alt=""
              loading="lazy"
              width={288}
              height={288}
              className="w-full h-full object-cover"
              src={m.src}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

