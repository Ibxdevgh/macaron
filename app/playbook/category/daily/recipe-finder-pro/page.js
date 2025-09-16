"use client";
import { useState } from "react";
import ImageModal from "../../../../components/ImageModal";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../../../components/NavBar";
import Footer from "../../../../components/Footer";

export default function RecipeFinderPro() {
const screenshots = [
  {
    src: "/assets/_next/6df32aec-1d93-49ad-94c0-b046135f461b.png",
    alt: "App screenshot 1",
  },
  {
    src: "/assets/_next/97572803-f175-4321-87fb-7672c596b6f8.png",
    alt: "App screenshot 2",
  },
  {
    src: "/assets/_next/c2cf5a01-03ee-4692-99d7-cdb720bd5913.png",
    alt: "App screenshot 3",
  },
];

  return (
<>
  {/* saved from url=(0070)https://macaron.im/playbook/recipe-finder-pro-689582141bbc6bcd9f805611 */}
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <link
    rel="preload"
    as="image"
    href="./Recipe Finder Pro — Turn kitchen basics into dinner magic _ Macaron - Macaron_files/logo.png"
  />
  <link
    rel="preload"
    as="image"
    href="./Recipe Finder Pro — Turn kitchen basics into dinner magic _ Macaron - Macaron_files/product-of-the-week.svg"
  />
  <link
    rel="preload"
    as="image"
    href="./Recipe Finder Pro — Turn kitchen basics into dinner magic _ Macaron - Macaron_files/global.svg"
  />
  <link
    rel="preload"
    as="script"
    fetchpriority="low"
    href="./Recipe Finder Pro — Turn kitchen basics into dinner magic _ Macaron - Macaron_files/webpack-e0738a55319ddc4d.js.download"
  />
  <link
    rel="preload"
    href="./Recipe Finder Pro — Turn kitchen basics into dinner magic _ Macaron - Macaron_files/client"
    as="script"
  />
  <link rel="manifest" href="https://macaron.im/manifest.json" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="https://macaron.im/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="https://macaron.im/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="https://macaron.im/favicon-16x16.png"
  />
  <meta content="yes" name="apple-mobile-web-app-capable" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="msapplication-navbutton-color" content="#ffffff" />
  <meta name="apple-mobile-web-app-status-bar-style" content="light-content" />
  <meta name="baidu-site-verification" content="codeva-vkuuov95vd" />
  <link rel="alternate" hrefLang="en" href="https://macaron.im/en" />
  <link rel="alternate" hrefLang="zh" href="https://macaron.im/zh" />
  <link rel="alternate" hrefLang="ja" href="https://macaron.im/ja" />
  <link rel="alternate" hrefLang="es" href="https://macaron.im/es" />
  <link rel="alternate" hrefLang="ko" href="https://macaron.im/ko" />
  <link rel="alternate" hrefLang="x-default" href="https://macaron.im/" />
  <meta name="theme-color" content="#ffffff" />
  
  <meta
    name="viewport"
    content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
  />
  <meta name="theme-color" content="#ffffff" />
  <title>
    Recipe Finder Pro — Turn kitchen basics into dinner magic | Macaron -
    Macaron
  </title>
  <meta
    name="description"
    content="Turn your ingredients into delicious meals! Just snap a photo or type what you have, tell us your taste and time, and unlock three perfect recipes made just for..."
  />
  <meta property="og:title" content="Recipe Finder Pro" />
  <meta
    property="og:description"
    content="Turn your ingredients into delicious meals! Just snap a photo or type what you have, tell us your taste and time, and unlock three perfect recipes made just for..."
  />
  <meta
    property="og:image"
    content="https://macaron-ai.oss-ap-southeast-1.aliyuncs.com/image/project_icon/6881e82c64002944d191b759.png"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Recipe Finder Pro" />
  <meta
    name="twitter:description"
    content="Turn your ingredients into delicious meals! Just snap a photo or type what you have, tell us your taste and time, and unlock three perfect recipes made just for..."
  />
  <meta
    name="twitter:image"
    content="https://macaron-ai.oss-ap-southeast-1.aliyuncs.com/image/project_icon/6881e82c64002944d191b759.png"
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
                      alt="Recipe Finder Pro"
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-full object-cover"
                      src="/assets/_next/6881e82c64002944d191b759.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 w-full sm:w-auto text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl md:text-3xl font-serif font-bold text-gray-900 mb-1 sm:mb-2 break-words">
                    Recipe Finder Pro
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Turn kitchen basics into dinner magic
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 sm:flex sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-gray-400 text-xs tracking-wider mb-1">
                    Got
                  </span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">
                    5K
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
        Turn your ingredients into delicious meals! Just snap a photo
        or type what you have, tell us your taste and time, and unlock
        three perfect recipes made just for you. With step-by-step
        guides and smart tracking, you&apos;ll never waste food or wonder
        &apos;what&apos;s for dinner?&apos; again.
      </p>

      {/* Features List */}
      <div className="space-y-3 sm:space-y-4">
        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Smart Ingredient Scanner
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Simply type in what you have or snap a photo of your
            ingredients to instantly get cooking ideas.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Perfect Recipe Match
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Get three personalized recipe suggestions that work with
            your available ingredients and cooking style.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Step-by-Step Guidance
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Follow clear instructions with everything you need to
            know, from kitchen tools to detailed cooking steps.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Quick &amp; Easy Cooking
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Find delicious meals you can make in 45 minutes or less,
            perfect for busy weeknight dinners.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Taste Preferences
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Tell us what flavors you love, and we&apos;ll suggest recipes
            that match your personal taste.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Recipe Memory
            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Easily revisit your favorite recipe discoveries and
            ingredient combinations from past cooking adventures.
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
        Let&apos;s whip up a Recipe Wizard with Macaron! Just snap photos
        of your ingredients or type them in (like tomatoes, eggs, or
        potatoes) - the app will identify them instantly. Tell me your
        taste buds&apos; cravings (sweet or savory?) and how much time
        you&apos;ve got (say, 45 minutes), and I&apos;ll cook up 3 perfect
        recipe matches. You&apos;ll get clear details on everything you
        need - from kitchen gear (like your oven or air fryer) to
        ingredients and easy-to-follow steps. Plus, I&apos;ll keep track of
        your ingredient history and recipe suggestions for quick
        access later!
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-[-160px] right-4 text-[180px] sm:text-[260px] font-mono text-black opacity-5 leading-none"
        style={{ zIndex: 1 }}
      >
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
