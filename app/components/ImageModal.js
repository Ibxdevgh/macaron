"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function ImageModal({
  images,
  thumbnailClassName = "cursor-pointer rounded-lg transition hover:scale-105 hover:rounded-[50px]",
  modalClassName = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // zoom + pan states
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const imageStart = useRef({ x: 0, y: 0 });

  const handleNext = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % images.length),
    [images.length]
  );

  const handlePrev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length),
    [images.length]
  );

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

  // mount + keyboard events
  useEffect(() => {
    setMounted(true);
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleNext, handlePrev]);

  // reset zoom/position
  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen, currentIndex]);

  // zoom with scroll
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

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove]);

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Close button */}
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 z-[10000] w-10 h-10 text-white text-2xl font-bold bg-black/60 border border-white/20 rounded-full hover:bg-black/80 hover:text-gray-400 transition"
      >
        ✕
      </button>

      {/* Prev / Next buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-5 text-white text-3xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-5 text-white text-3xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/70 transition"
          >
            ›
          </button>
        </>
      )}

      {/* Image wrapper */}
      <div
        className={`transition-transform duration-100 ease-out cursor-grab active:cursor-grabbing max-w-[90vw] max-h-[90vh] ${modalClassName}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        }}
        onMouseDown={handleMouseDown}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1920}
          height={1080}
          className="object-contain w-full h-auto max-h-[90vh] select-none shadow-lg"
          draggable="false"
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Thumbnails */}
      <div className="flex flex-wrap gap-4">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={292}
            height={633}
            className={`w-[200px] h-[433px] sm:w-[292px] sm:h-[633px] object-cover rounded-[28px] border cursor-pointer transition hover:shadow-lg ${thumbnailClassName}`}
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
      </div>

      {/* Portal */}
      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
}
