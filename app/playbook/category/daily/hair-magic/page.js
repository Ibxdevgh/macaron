"use client";
import { useState } from "react";
import ImageModal from "../../../../components/ImageModal";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../../../components/NavBar";
import Footer from "../../../../components/Footer";

export default function HairMagic() {
const screenshots = [
  {
    src: "/assets/_next/8fb3f82d-bf68-4103-9043-18d34434b732.png",
    alt: "App screenshot 1",
  },
  {
    src: "/assets/_next/249dfcaf-d0a4-4e39-a147-6efdf1b78559.png",
    alt: "App screenshot 2",
  },
  {
    src: "/assets/_next/d589b7d9-7a95-4113-866e-06b28d4697d3.png",
    alt: "App screenshot 3",
  },
  {
    src: "/assets/_next/0801a04e-d011-4296-85f3-5bd849de333b.png",
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
      Hair transformation magic — Rock your new virtual look with instant
      hairstyle makeovers | Macaron - Macaron
    </title>
    <meta
      name="description"
      content="Preview your dream hairstyle in seconds! Upload a selfie and try on trending looks like wolf cuts, layered bobs, or retro perms. Mix and match styles and colors..."
    />
    <meta property="og:title" content="Hair transformation magic" />
    <meta
      property="og:description"
      content="Preview your dream hairstyle in seconds! Upload a selfie and try on trending looks like wolf cuts, layered bobs, or retro perms. Mix and match styles and colors..."
    />
    <meta
      property="og:image"
      content="https://macaron-ai.oss-accelerate.aliyuncs.com/image/project_icon/68b5b36f896610496a1f6535.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Hair transformation magic" />
    <meta
      name="twitter:description"
      content="Preview your dream hairstyle in seconds! Upload a selfie and try on trending looks like wolf cuts, layered bobs, or retro perms. Mix and match styles and colors..."
    />
    <meta
      name="twitter:image"
      content="https://macaron-ai.oss-accelerate.aliyuncs.com/image/project_icon/68b5b36f896610496a1f6535.png"
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
                      alt="Hair transformation magic"
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-full object-cover"
                      src="/assets/_next/68b5b36f896610496a1f6535.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 w-full sm:w-auto text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl md:text-3xl font-serif font-bold text-gray-900 mb-1 sm:mb-2 break-words">
                    Hair transformation magic
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Rock your new virtual look with instant hairstyle makeovers
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 sm:flex sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-gray-400 text-xs tracking-wider mb-1">
                    Got
                  </span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">
                    3.6K
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
       Preview your dream hairstyle in seconds! Upload a selfie and try on trending looks like wolf cuts, layered bobs, or retro perms. Mix and match styles and colors to find your perfect match before hitting the salon.
      </p>

      {/* Features List */}
      <div className="space-y-3 sm:space-y-4">
        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">              
              Instant Hairstyle Preview
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Upload your photo and instantly see yourself rocking any new hairstyle you want to try!
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Trending Style Collection
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            One tap to explore hot trends like wolf cuts, textured bobs, retro curls, and Korean-inspired looks!
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Custom Style Creator
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Dream up your perfect style! Just describe any hairstyle and color combo you can imagine.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
             Clean & Simple Design
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Transform your look stress-free with our super easy interface — no confusion, just pure style!
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
        Upload a photo to try different hairstyles while keeping the person unchanged.
Choose from these styles (wolf tail mullet, layered collarbone-length cut, retro perm, classic bob cut, jellyfish hair, Korean micro-bangs, textured waves) or describe your own style
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
                  href="/playbook/category/daily/sauce-master"
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
                  href="/playbook/category/daily/vegan-meal"
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
                  href="/playbook/category/daily/meal-pan-pro"
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
          href="/playbook/category/daily/recipe-finder-pro"
        >
          <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
            <div className="w-full flex-1 relative overflow-hidden flex flex-col">
              <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                  <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                    Recipe Finder Pro
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                  Turn kitchen basics into dinner magic
                </p>
              </div>
              <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                <div
                  role="img"
                  aria-label="Recipe Finder Pro screenshot 1"
                  className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(/assets/admin/6df32aec-1d93-49ad-94c0-b046135f461b.png)"
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
                <Link
          className="block"
          href="/playbook/category/daily/dress-up"
        >
          <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
            <div className="w-full flex-1 relative overflow-hidden flex flex-col">
              <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                  <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                    Dress-up Master
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                  Try clothes on instantly
                </p>
              </div>
              <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                <div
                  role="img"
                  aria-label="Dress-up Master screenshot 1"
                  className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(/assets/_next/6c736833-8197-43da-a0ae-c7d08d28b750.png)"
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
                <Link
          className="block"
          href="/playbook/category/daily/fashion-master"
        >
          <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
            <div className="w-full flex-1 relative overflow-hidden flex flex-col">
              <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
                  <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
                    Fashion Master
                  </h3>
                </div>
                <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
                  Try on clothes instantly in our virtual fitting room
                </p>
              </div>
              <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
                <div
                  role="img"
                  aria-label="Fashion Master screenshot 1"
                  className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(/assets/alpha-admin/38eadb7f-3758-4622-a213-57166f6e5ee9.png)"
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
