"use client";
import { useState } from "react";
import ImageModal from "../../../../components/ImageModal";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../../../components/NavBar";
import Footer from "../../../../components/Footer";

export default function FoundationMatchPro() {
const screenshots = [
  {
    src: "/assets/_next/6893a82696e8fcf6105f8aae-1.png",
    alt: "App screenshot 1",
  },
  {
    src: "/assets/_next/6893a82696e8fcf6105f8aae-2.png",
    alt: "App screenshot 2",
  },
  {
    src: "/assets/_next/6893a82696e8fcf6105f8aae-3.png",
    alt: "App screenshot 3",
  },
  {
    src: "/assets/_next/6893a82696e8fcf6105f8aae-4.png",
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
      Foundation Match Pro — Find your perfect foundation match today | Macaron
      - Macaron
    </title>
    <meta
      name="description"
      content="Ready to find your perfect foundation? Jump into this interactive beauty guide that compares 8 top foundations! Match your shade, explore coverage levels and fi..."
    />
    <meta property="og:title" content="Foundation Match Pro" />
    <meta
      property="og:description"
      content="Ready to find your perfect foundation? Jump into this interactive beauty guide that compares 8 top foundations! Match your shade, explore coverage levels and fi..."
    />
    <meta
      property="og:image"
      content="https://macaron-ai.oss-ap-southeast-1.aliyuncs.com/image/project_icon/6893a82696e8fcf6105f8aae.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Foundation Match Pro" />
    <meta
      name="twitter:description"
      content="Ready to find your perfect foundation? Jump into this interactive beauty guide that compares 8 top foundations! Match your shade, explore coverage levels and fi..."
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
                      alt="Foundation Match Pro icon"
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-full object-cover"
                      src="/assets/_next/6893a82696e8fcf6105f8aae.png"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 w-full sm:w-auto text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl md:text-3xl font-serif font-bold text-gray-900 mb-1 sm:mb-2 break-words">
                     Foundation Match Pro
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Find your perfect foundation match today
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 sm:flex sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-gray-400 text-xs tracking-wider mb-1">
                    Got
                  </span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">
                    1K
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
       Ready to find your perfect foundation? Jump into this
                    interactive beauty guide that compares 8 top foundations!
                    Match your shade, explore coverage levels and finishes, and
                    get personalized picks for your skin type. With detailed
                    comparisons and visual swatches at your fingertips, you&apos;ll
                    discover the formula that&apos;s truly meant for you.
      </p>

      {/* Features List */}
      <div className="space-y-3 sm:space-y-4">
        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">              
              Smart foundation finder
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Compare 8 popular foundations side-by-side to find your
                        perfect match, with details on coverage, finish, and
                        price that matter to you.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Personal shade match
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Find your ideal foundation shade with an intuitive color
                        guide that shows real swatches organized by undertone
                        and depth.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            See exactly how different coverage levels look, from
                        natural sheer to full coverage, helping you choose the
                        right amount of coverage for your needs.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
                        Finish type explorer
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Discover how different foundation finishes appear on
                        skin, from modern matte to glowing dewy, with real-world
                        examples.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Skincare-savvy tips
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Get personalized foundation recommendations and
                        application techniques based on your unique skin type,
                        whether dry or oily.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Easy color swatches
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            View actual foundation colors right on your screen to
                        help visualize how each shade might look on your skin.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Mobile-friendly design
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Access all foundation comparison tools seamlessly on
                        your phone or tablet while shopping or at your vanity.
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
        &quot;Ready to find your perfect foundation match? I&apos;ll create a
                    detailed beauty report comparing 8 popular foundations —
                    we&apos;ll look at shade ranges, coverage, finish, and price
                    points. Plus, you&apos;ll get a handy shade matching guide,
                    visual charts, and pro tips for both dry and oily skin
                    types!&quot;
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
    href="/playbook/category/hobbies/arcade-shooter"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Arcade Shooter Quiz
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Find your perfect shooter style
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Arcade Shooter Quiz screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/689337a4b4928472052820ce-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  <Link className="block" href="/playbook/category/hobbies/snake-champion">
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Snake Champion
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Snake your way to global glory
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Snake Champion screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/688c753e1c0dcb301b9219dc-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  <Link
    className="block"
    href="/playbook/category/hobbies/property"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Property Investment Returns Calculator
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Real estate returns at your fingertips
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Property Investment Returns Calculator screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/6892550cc28019528d81a75f-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  <Link
    className="block"
    href="/playbook/category/hobbies/celebrity"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
               Celebrity photo merge
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Create a photo with your favorite celebrity
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Celebrity photo merge screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/alpha-admin/c44e9161-a503-4fd0-ac75-f9e8e04c6fe6.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  <Link
    className="block"
    href="/playbook/category/hobbies/line-art"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Line Art Converter
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Turn your photos into beautiful line art sketches
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Line Art Converter screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/6893223d601f00cd55f7159b-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  <Link
    className="block"
    href="/playbook/category/hobbies/bezz-hoops"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Bezz Hoops
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Jump into Bezz Basketball — where legends are made!
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Bezz Hoops screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/68933211b492847205282002-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  <Link
    className="block"
    href="/playbook/category/hobbies/heroes"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Heroes Entwined
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Heroes unite through untold stories
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Heroes Entwined screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/6893a8f996e8fcf6105f8af4-1.png)"
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
