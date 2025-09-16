"use client";
import { useState } from "react";
import ImageModal from "../../../../components/ImageModal";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../../../components/NavBar";
import Footer from "../../../../components/Footer";

export default function PetMood() {
const screenshots = [
  {
    src: "/assets/_next/e6ba4ad6-1fc2-4244-af8d-6f18b22ce606.png",
    alt: "App screenshot 1",
  },
  {
    src: "/assets/_next/0971886b-de0d-47fc-bccc-7ef152a91c82.png",
    alt: "App screenshot 2",
  },
  {
    src: "/assets/_next/7695a3db-f93a-485b-89ab-2f2ff70b8783.png",
    alt: "App screenshot 3",
  },
  {
    src: "/assets/_next/423ebb40-511a-4fc1-8aef-b9d3dd45cf3c.png",
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
      Pack It Smart — Pack smart for every adventure ahead | Macaron - Macaron
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
                      alt="Pet Mood Detective icon"
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg={1}
                      className="w-full h-full object-cover"
                      src="/assets/_next/68944aa7454dbedec39a6836.jpg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0 w-full sm:w-auto text-center sm:text-left">
                  <h1 className="text-2xl sm:text-4xl md:text-3xl font-serif font-bold text-gray-900 mb-1 sm:mb-2 break-words">
                    Pet Mood Detective
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                   Unlock daily insights into your pet&apos;s world
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 sm:flex sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600 pt-2 border-t border-gray-100">
                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-gray-400 text-xs tracking-wider mb-1">
                    Got
                  </span>
                  <span className="font-medium text-gray-900 text-xs sm:text-sm">
                    3.8K
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
       Track your pet&apos;s emotions and behavior in a fun, interactive way! Log daily moments, spot patterns at a glance, and get personalized tips to be the amazing pet parent you are. Watch your furry friend&apos;s journey unfold as you build a deeper bond together.
      </p>

      {/* Features List */}
      <div className="space-y-3 sm:space-y-4">
        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">              
              Track Pet Behavior in a Snap

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Log your furry friend&apos;s actions and moods with our guided process — capturing all the important moments has never been easier!
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              See Behavior Patterns Come Alive

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Watch your pet&apos;s daily life unfold through vibrant charts and timelines that reveal their emotional world in living color.
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Your Pet&apos;s Personal Care Coach

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Unlock custom tips and solutions perfect for your pet — from soothing strategies to environment upgrades that match their unique personality
          </div>
        </div>

        <div>
          <div className="flex items-center min-w-0 mb-1">
            <span className="w-[6px] h-[6px] rounded-full bg-black inline-block mr-3" />
            <span className="font-semibold text-foreground text-sm sm:text-base">
             A Living Memory Timeline

            </span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed ml-5 flex-1">
            Build a beautiful journey map of your pet&apos;s story, with every behavior and insight organized for easy viewing whenever you want.
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
        &quot;Create a smart pet emotion decoder! Choose your furry friend&apos;s type (dog, cat, or other), pick what they&apos;re doing (like pacing or hiding), and tell us what&apos;s been happening. Your AI pet whisperer will reveal a visual breakdown with mood labels, behavior insights, and handy timeline patterns. Plus, get personalized tips for keeping your pet happy – from soothing routines to fun toy ideas. Track your pet&apos;s moods over time and clear the history whenever you want. Ready to speak pet?&quot;
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
    href="/playbook/category/family/catfood-finder"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Cat Food Finder
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Perfect cat food at every purr
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Cat Food Finder screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/68932ba9066d1f5e094dcebf-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
                <Link
    className="block"
    href="/playbook/category/family/petdiet"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              PetDiet Planner - Keep your furry friend healthy and happy
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Healthy meals for your furry friend
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="PetDiet Planner - Keep your furry friend healthy and happy screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/689344aab492847205282233-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  <Link
    className="block"
    href="/playbook/category/family/pet-health"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              Pet Health Buddy
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Get instant vet tips for your furry friend
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="Pet Health Buddy screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/6892e06f7bac40bbf77f6e2a-1.png)"
            }}
          />
        </div>
      </div>
    </div>
  </Link>
  
  <Link
    className="block"
    href="/playbook/category/family/cat-parent"
  >
    <div className="group relative w-full flex flex-col rounded-3xl overflow-hidden cursor-pointer bg-[#F1EFE9] border border-[#E9E7E2] transition-all duration-300 ease-out hover:shadow-lg h-[364px]">
      <div className="w-full flex-1 relative overflow-hidden flex flex-col">
        <div className="p-5 pb-2 flex flex-col z-30 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
            <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
              The Cat Parent&apos;s Guide
            </h3>
          </div>
          <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
            Double-check your cat&apos;s prescriptions with a vet
          </p>
        </div>
        <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-3">
          <div
            role="img"
            aria-label="The Cat Parent's Guide screenshot 1"
            className="top-0 absolute w-[60%] aspect-[9/19.5] rounded-[12px] bg-white shadow-xl z-20 transition-transform duration-300 ease-out group-hover:-translate-y-3 bg-origin-border bg-cover bg-center"
            style={{
              backgroundImage:
                "url(/assets/project_template/689344b4b492847205282238-1.png)"
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
