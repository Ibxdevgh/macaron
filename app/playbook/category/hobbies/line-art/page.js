"use client";
import { useState } from "react";
import ImageModal from "../../../../components/ImageModal";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../../../components/NavBar";
import Footer from "../../../../components/Footer";

export default function LineArt() {
const screenshots = [
  {
    src: "/assets/_next/6893223d601f00cd55f7159b-1.png",
    alt: "App screenshot 1",
  },
  {
    src: "/assets/_next/6893223d601f00cd55f7159b-2.png",
    alt: "App screenshot 2",
  },
  {
    src: "/assets/_next/6893223d601f00cd55f7159b-3.png",
    alt: "App screenshot 3",
  },
  {
    src: "/assets/_next/6893223d601f00cd55f7159b-4.png",
    alt: "App screenshot 4",
  },
];

  return (
<>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
    />
    <link rel="preload" as="image" href="/assets/image/logo.png" />
    <link rel="manifest" href="/manifest.json" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-touch-icon.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon-16x16.png"
    />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="msapplication-navbutton-color" content="#ffffff" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="light-content"
    />
    <link rel="alternate" hrefLang="en" href="/" />
    <link rel="alternate" hrefLang="zh" href="/zh" />
    <link rel="alternate" hrefLang="ja" href="/ja" />
    <link rel="alternate" hrefLang="es" href="/es" />
    <link rel="alternate" hrefLang="ko" href="/ko" />
    <link rel="alternate" hrefLang="x-default" href="/" />
    <meta name="theme-color" content="#ffffff" />
   <title>
      Line Art Converter | Macaron - Macaron
    </title>
    <meta
      name="description"
      content="Get ready for your next adventure! Just tell us your travel dates, where you&#39;re headed, and what you&#39;ll be up to — we&#39;ll whip up the perfect packing list. With ..."
    />
    <meta property="og:title" content="Pack It Smart" />
    <meta
      property="og:description"
      content="Get ready for your next adventure! Just tell us your travel dates, where you&#39;re headed, and what you&#39;ll be up to — we&#39;ll whip up the perfect packing list. With ..."
    />
    <meta
      property="og:image"
      content="https://macaron-ai.oss-ap-southeast-1.aliyuncs.com/image/project_icon/6892edb8aa6e16ed138ee502.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Pack It Smart" />
    <meta
      name="twitter:description"
      content="Get ready for your next adventure! Just tell us your travel dates, where you&#39;re headed, and what you&#39;ll be up to — we&#39;ll whip up the perfect packing list. With ..."
    />
    <meta
      name="twitter:image"
      content="https://macaron-ai.oss-ap-southeast-1.aliyuncs.com/image/project_icon/6892edb8aa6e16ed138ee502.png"
    />
  <svg
    width={0}
    height={0}
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute" }}
  >
    <filter
      id="noiseFilter"
      x={0}
      y={0}
      width={100}
      height={100}
      filterUnits="objectBoundingBox"
    >
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves={3}
        stitchTiles="stitch"
      />
      <feColorMatrix type="saturate" values={0} />
    </filter>
  </svg>
  <div className="w-full relative bg-gradient-to-br bg-[#F9F7F1] min-h-screen overflow-x-hidden">
    <NavBar />
    <div className="flex w-full min-h-full flex-col items-center pt-[44px] md:pt-[64px]">
      <div className="min-h-screen w-full overflow-x-hidden page-container">
        <div className="mx-auto px-4 sm:px-6 py-4 sm:py-8 max-w-7xl w-full">
          <div className="mb-6 sm:mb-8 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 self-center sm:self-start">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg"
                    style={{ backgroundColor: "rgb(6, 69, 214)" }}
                  >
                    <Image
                      alt="Line Art Converter icon"
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-full object-cover"
                      src="/assets/_next/6893223d601f00cd55f7159b.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 w-full sm:w-auto text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl md:text-3xl font-serif font-bold text-gray-900 mb-1 sm:mb-2 break-words">
                    Line Art Converter
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                   Turn your photos into beautiful line art sketches
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 sm:flex sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-gray-400 text-xs tracking-wider mb-1">
                    Got
                  </span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">
                    4.2K
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 sm:mb-8">
            <div className="relative w-full group">
              <div className="w-full overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x">
                <ImageModal images={screenshots} />

              </div>
              <div className="absolute top-2 right-6 sm:hidden bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                Swipe to view more
              </div>
            </div>
          </div>
          <div className="mb-8 sm:mb-12">
  <div className="space-y-6 sm:space-y-8 max-w-[821px]">
    <div className="text-[#595856]">
      <h2 className="text-xl sm:text-[26px] font-bold text-foreground mb-4 sm:mb-6">
        Features
      </h2>
      <p className="text-sm sm:text-base mb-4 sm:mb-6">
       Transform your photos into stunning line art! Upload images, fine-tune your masterpiece with easy sliders, or jump straight in with ready-made styles. Perfect for logos, illustrations, or any creative project — export as SVG or PNG and let your art shine!
      </p>

      {/* Features List */}
      <div className="space-y-3 sm:space-y-4">
        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">              
              Drop Your Photos In

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
           Transform your favorite shots into beautiful line art with a simple drag and drop.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Watch the Magic Happen

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            See your photos turn into stunning black and white sketches in seconds.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
             Make It Your Own

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Customize your artwork with easy sliders or pick from ready-made styles that match your vision.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
             Real-time Preview

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Watch your masterpiece evolve instantly as you fine-tune each detail.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Save Your Masterpiece

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Get your finished line art in high-quality formats, perfect for prints or digital projects.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Quick Style Magic

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
                Jump between four handcrafted styles to instantly nail the perfect look.
          </div>
        </div>
      </div>
    </div>

    {/* Build with Macaron Section */}
    <div className="text-[#595856] relative rounded-[24px] bg-[#F1EFE9] p-10 overflow-hidden">
      <h2 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
        Build with Macaron
      </h2>
      <div className="sm:text-lg leading-relaxed text-sm whitespace-pre-wrap break-words">
        Let&apos;s create an artistic edge detection tool! Upload your photos (JPEG/PNG), and I&apos;ll transform them into stunning line art. Fine-tune your masterpiece with thickness and threshold sliders (0-1), or pick from 4 quick presets. Save your work as SVG or PNG!
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-[-160px] right-4 text-[180px] sm:text-[260px] font-mono text-black opacity-5 leading-none"
        style={{ zIndex: 1 }}
      >&rdquo;
      </span>
    </div>
  </div>
</div>

<div className="mb-8 sm:mb-12">
  <hr className="border-t border-border" />
</div>
          <div className="mb-6 sm:mb-8">
            <div className="space-y-6">
              <h2 className="text-[26px] leading-snug font-sans text-[#161615]">
                You might also like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <Link
                  className="block"
                  href="https://macaron.im/playbook/sauce-master-68957e2f1bbc6bcd9f805565"
                >
                  <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
                    <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                      <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                          <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                            Sauce Master
                          </h3>
                        </div>
                        <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                          Master sauce making: from fresh ingredients to
                          perfect storage
                        </p>
                      </div>
                      <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                        <div
                          role="img"
                          aria-label="Sauce Master screenshot 1"
                          className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                          style={{
                            backgroundImage:
                              'url("https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6894129c129a8b22ebbd18f6-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20")'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="block"
                  href="https://macaron.im/playbook/vegan-meal-genius-68957dbe1bbc6bcd9f805552"
                >
                  <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
                    <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                      <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                          <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                            Vegan Meal Genius
                          </h3>
                        </div>
                        <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                          Planet-friendly, protein-packed vegan feasts
                        </p>
                      </div>
                      <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                        <div
                          role="img"
                          aria-label="Vegan Meal Genius screenshot 1"
                          className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                          style={{
                            backgroundImage:
                              'url("https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68944b4a454dbedec39a684c-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20")'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="block"
                  href="https://macaron.im/playbook/meal-plan-pro-68957ec41bbc6bcd9f805581"
                >
                  <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
                    <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                      <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                          <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                            Meal Plan Pro
                          </h3>
                        </div>
                        <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                          Seven days to slimmer meal success
                        </p>
                      </div>
                      <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                        <div
                          role="img"
                          aria-label="Meal Plan Pro screenshot 1"
                          className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                          style={{
                            backgroundImage:
                              'url("https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a06e96e8fcf6105f895d-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20")'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="block"
                  href="https://macaron.im/playbook/cooking-coach-pro-6895820e1bbc6bcd9f805610"
                >
                  <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
                    <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                      <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                          <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                            Kitchen Champion
                          </h3>
                        </div>
                        <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                          Turn kitchen fails into tasty wins
                        </p>
                      </div>
                      <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                        <div
                          role="img"
                          aria-label="Kitchen Champion screenshot 1"
                          className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                          style={{
                            backgroundImage:
                              'url("https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6881e85864002944d191b777-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20")'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="block"
                  href="https://macaron.im/playbook/bbq-grill-master-68957fd71bbc6bcd9f8055af"
                >
                  <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
                    <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                      <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                          <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                            BBQ Grill Master
                          </h3>
                        </div>
                        <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                          Master the art of marinades — from prep to perfect
                          plate
                        </p>
                      </div>
                      <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                        <div
                          role="img"
                          aria-label="BBQ Grill Master screenshot 1"
                          className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                          style={{
                            backgroundImage:
                              'url("https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/689360ccdef845e53c83bede-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20")'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  className="block"
                  href="https://macaron.im/playbook/%E9%9D%A2%E9%A3%9F%E8%90%A5%E5%85%BB%E5%AE%9D-68957d581bbc6bcd9f80553f"
                >
                  <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
                    <div className="w-full flex-1 relative overflow-hidden flex flex-col">
                      <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                        <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                          <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                            Noodle Nutrition Guide
                          </h3>
                        </div>
                        <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                          Balance your nutrition, starting with a bowl of
                          noodles
                        </p>
                      </div>
                      <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                        <div
                          role="img"
                          aria-label="Noodle Nutrition Guide screenshot 1"
                          className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                          style={{
                            backgroundImage:
                              'url("https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6894e16c1e005cbfbd244a28-1.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cp_20")'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="col-span-full" />
              </div>
            </div>
          </div>
        </div>
          <Footer />
          
        </div>
      </div>
    </div>
</>
  );
}
