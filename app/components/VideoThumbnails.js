"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function VideoThumbnail({ videoId }) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Thumbnail with play button */}
      <div className="relative rounded-2xl overflow-hidden bg-black cursor-pointer w-full aspect-video max-w-[90vw] md:max-w-[750px] lg:max-w-[865px] xl:max-w-[1120px] mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
        {/* Thumbnail image */}
        <Image
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="YouTube video thumbnail"
          fill
          className="object-cover"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className={`relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#FF596C] cursor-pointer transition-transform duration-200 ease-in-out ${
                isButtonHovered ? "scale-110" : "scale-100"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white fill-white"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>

              {/* Pop-out title on hover */}
              {isButtonHovered && (
                <div className="absolute -top-10 left-1/2 translate-x-[25%] px-4 py-2 rounded-md bg-white text-black text-sm font-semibold whitespace-nowrap shadow-lg transition-all duration-200 ease-out z-50 inline-block">
                  播放视频
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-start justify-center pt-10 sm:pt-14 md:pt-18 lg:pt-22 z-50">
          <div className="relative inline-block">
            {/* Close button OUTSIDE video, top-right */}
            <button
              className="absolute -top-10 right-8 flex items-center justify-center 
                 w-8 h-8 
                 text-white font-extralight text-2xl
                 rounded-full bg-white/10 shadow-md hover:bg-white/20 transition"
              onClick={() => setIsModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <iframe
              className="w-[90vw] aspect-video rounded-lg shadow-xl mx-8"
              src={`https://player.mux.com/jzsCr4zl5wDyQmjdg24hDWwaUeEo3AwIkG4NjPZ5IL00`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
			
            {/* Video frame */}
            
          </div>
        </div>
      )}
    </>
  );
}
