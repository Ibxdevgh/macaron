"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function BenchmarkImage() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // zoom + pan states
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const imageStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handleKey = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // reset zoom/position when closing
  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  // scroll zoom
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e) => {
      e.preventDefault();
      setScale((prev) => {
        let newScale = prev + (e.deltaY < 0 ? 0.1 : -0.1);
        return Math.min(Math.max(newScale, 0.5), 3);
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  // drag start
  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    imageStart.current = { ...position };
  };

  // ✅ Fixed useCallback
  const handleMouseMove = useCallback(
    (e) => {
      if (!dragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPosition({
        x: imageStart.current.x + dx,
        y: imageStart.current.y + dy,
      });
    },
    [dragging]
  );

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove]);

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md">
      {/* ✅ Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 z-[100000] 
                   flex items-center justify-center 
                   w-10 h-10 text-white text-2xl font-bold 
                   bg-black/60 border border-white/20 rounded-full 
                   transition-colors hover:bg-black/80 hover:text-gray-400"
      >
        ✕
      </button>

      {/* image wrapper for zoom/pan */}
      <div
        className="transition-transform duration-100 ease-out cursor-grab active:cursor-grabbing 
                   max-w-[90vw] max-h-[90vh]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
        onMouseDown={handleMouseDown}
      >
        <Image
          alt="Benchmark Chart Full"
          width={1920}
          height={1080}
          src="/assets/image/rl-for-agentic-memory.png"
          className="w-full h-auto max-h-[90vh] object-contain shadow-2xl select-none"
          draggable="false"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-9 w-full">
      {/* Thumbnail */}
      <div className="relative overflow-visible">
        <Image
          alt="Benchmark Chart"
          width={1028}
          height={598}
          src="/assets/image/rl-for-agentic-memory.png"
          className="w-full h-auto rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[102%] hover:shadow-xl"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Modal portal */}
      {mounted && isOpen && createPortal(modalContent, document.body)}
    </div>
  );
}
