"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AnimatedButton() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // ✅ Stop observing after first reveal
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center w-full max-w-[600px] mx-auto mt-16"
    >
      <div className="w-[290px] h-auto">
        <div className="relative inline-flex items-center justify-center w-full group">
          {/* Macaron Images (hover only) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[50]">
            <Image
              src="/assets/image/macaron-latte.png"
              alt=""
              width={30}
              height={30}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[30deg] delay-0"
            />
            <Image
              src="/assets/image/macaron-mocha.png"
              alt=""
              width={30}
              height={30}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[120%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[0deg] delay-75"
            />
            <Image
              src="/assets/image/macaron-espresso.png"
              alt=""
              width={30}
              height={30}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:translate-y-[100%] group-hover:opacity-100 group-hover:rotate-[-25deg] delay-100"
            />
            <Image
              src="/assets/image/macaron-coldbrew.png"
              alt=""
              width={30}
              height={30}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[110%] group-hover:translate-y-[110%] group-hover:opacity-100 group-hover:rotate-[45deg] delay-150"
            />
          </div>

          {/* Button */}
          <Link
            href="/playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block"
          >
            <button
              className={`inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-700 ease-out bg-macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <span className="relative z-20">View 200+ cases in Playbook</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
