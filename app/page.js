import BenchmarkImage from "../app/components/BenchmarkImage";
import Footer2 from "./components/Footer2";
import AnimatedButton from "../app/components/AnimatedButton";
import MacaronRolling from "../app/components/MacaronRolling";
import Head from "next/head";
import VideoThumbnail from "../app/components/VideoThumbnails";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import NavBar from "./components/NavBar";
import StatsSection from "./components/Counter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Macaron AI – Personal Assistant</title>
        <meta
          name="description"
          content="Macaron AI is your personal agent..."
        />
      </Head>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />
        <link rel="preload" as="image" href="/assets/image/logo.png" />
        <link
          rel="preload"
          as="image"
          href="/assets/image/product-of-the-week.svg"
        />
        <link rel="preload" as="image" href="/assets/svg/global.svg" />
        <link rel="preload" as="image" href="/assets/image/wait-pink.webp" />
        <link rel="preload" as="image" href="/assets/image/wait-orange.webp" />
        <link
          rel="preload"
          as="image"
          href="/assets/image/macaron-logo.png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/vi/7TvPqi-6El4/maxresdefault.jpg"
        />
        <link rel="preload" as="image" href="/assets/image/avatar-1.jpg" />
        <link rel="preload" as="image" href="/assets/image/avatar-2.jpg" />
        <link
          rel="preload"
          as="image"
          imageSrcSet="/_next/image?url=%2Fassets%2Fimage%2Frl-for-agentic-memory.png&w=1080&q=75&dpl=dpl_27wUpyFxaPTVbLAkAen1GESfRFxD 1x, /_next/image?url=%2Fassets%2Fimage%2Frl-for-agentic-memory.png&w=3840&q=75&dpl=dpl_27wUpyFxaPTVbLAkAen1GESfRFxD 2x"
          fetchPriority="high"
        />

        <link
          rel="preload"
          as="script"
          fetchPriority="low"
          href="/_next/static/chunks/webpack-e0738a55319ddc4d.js?dpl=dpl_27wUpyFxaPTVbLAkAen1GESfRFxD"
        />
        <link
          rel="preload"
          href="https://accounts.google.com/gsi/client"
          as="script"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>Macaron – World&apos;s First Personal AI Agent</title>
        <meta
          name="description"
          content="Macaron AI is your personal agent, built to enrich your lifestyle. Create personalized tools for travel, health, relationships, hobbies, and more."
        />
        <meta
          name="keywords"
          content="macaron ai,personal ai agent,personalized ai agents,intelligent life solutions,ai memory,best ai apps for iphone,best ai humanizer"
        />
        <link rel="canonical" href="/" />
        <meta
          property="og:title"
          content="Macaron – World's First Personal AI Agent"
        />
        <meta
          property="og:description"
          content="Macaron AI isn’t a productivity tool. It’s a personal AI agent that helps you live better by instantly building mini‑apps and remembering everything for you."
        />
        <meta
          property="og:image"
          content="https://macaron.im/assets/image/social-sharing.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Macaron – World's First Personal AI Agent"
        />
        <meta
          name="twitter:description"
          content="Macaron AI isn’t a productivity tool. It’s a personal AI agent that helps you live better by instantly building mini‑apps and remembering everything for you."
        />
        <meta
          name="twitter:image"
          content="https://macaron.im/assets/image/social-sharing.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://macaron.so/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://macaron.so/favicon-16x16.png"
        />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="light-content"
        />
        <meta name="baidu-site-verification" content="codeva-vkuuov95vd" />
        <link rel="alternate" hrefLang="en" href="/" />
        <link rel="alternate" hrefLang="zh" href="/zh" />
        <link rel="alternate" hrefLang="ja" href="/ja" />
        <link rel="alternate" hrefLang="es" href="/es" />
        <link rel="alternate" hrefLang="ko" href="/ko" />
        <link rel="alternate" hrefLang="x-default" href="/" />
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
            <div className="flex flex-col items-center justify-start w-full min-h-screen bg-[#F9F7F1]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute z-[1] group cursor-pointer left-[-110px] top-[50px] w-[200px] h-[200px] md:left-[-150px] md:top-[40px] md:w-[270px] md:h-[270px] xl:left-[-160px] xl:top-[60px] xl:w-[320px] xl:h-[320px] transition-transform duration-300 ease-in-out hover:rotate-[10deg] hover:-translate-x-[10px]">
                  <Image
                    src="/assets/image/wait-pink.webp"
                    alt="Left Macaron Decoration"
                    height={300}
                    width={300}
                    className="w-full h-full object-contain pointer-events-auto"
                  />
                </div>

                <div className="absolute z-[1] group cursor-pointer right-[-70px] top-[120px] w-[140px] h-[140px] md:right-[-90px] md:top-[150px] md:w-[200px] md:h-[200px] xl:right-[-110px] xl:top-[180px] xl:w-[240px] xl:h-[240px] transition-transform duration-300 ease-in-out hover:rotate-[15deg] hover:-translate-y-[15px]">
                  <Image
                    src="/assets/image/wait-orange.webp"
                    alt="Right Macaron Decoration"
                    height={290}
                    width={290}
                    className="w-full h-full object-contain pointer-events-auto"
                  />
                </div>
              </div>
              <div
                className="relative flex flex-col items-center justify-center overflow-visible w-full"
                style={{
                  background: "radial-gradient(#ffe6d1, #f9f7f1)",
                  backgroundPosition: "-10% 0%",
                  backgroundSize: "120% 100%",
                }}
              >
                <div className="flex flex-col items-center justify-start relative z-[2] gap-[33px] w-full xl:w-[1120px]">
                  <div className="flex flex-col items-center w-full pt-[140px] pb-0 gap-[23px] md:pt-[142px] md:pb-0 md:gap-[50px]">
                    <Image
                      src="/assets/image/macaron-logo.png"
                      height={300}
                      width={300}
                      alt="Macaron Logo"
                      fetchPriority="high"
                      className="object-contain w-[272px] h-[51px] md:w-[463px] md:h-[86px] xl:w-[742px] xl:h-[138px]"
                    />
                    <div className="flex flex-col items-center w-full">
                      <h1 className="text-center text-[#FF586A] text-[20px] w-auto md:text-[48px] md:max-w-[936px] md:w-full">
                        World&apos;s first personal AI agent
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full max-w-[1200px] relative z-[2] py-[60px] md:py-[80px]">
                  <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
                    <div
                      className="absolute z-10 left-[-60px] top-1/2 transform -translate-y-1/2 scale-80 rotate-[-25deg] md:left-[-80px] xl:left-[-100px]"
                      style={{ opacity: "1", filter: "blur(0px)" }}
                    >
                      <svg
                        width={41}
                        height={44}
                        viewBox="0 0 41 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-7 md:w-8 md:h-9 xl:w-10 xl:h-11"
                        style={{
                          filter: "drop-shadow(0 0 0 rgba(246, 58, 60, 0.3))",
                        }}
                      >
                        <path
                          d="M 23.192 41.188 C 23.448 41.344 23.616 41.613 23.643 41.913 C 23.664 42.266 23.626 42.619 23.53 42.959 C 23.465 43.227 22.978 43.721 22.776 43.649 C 22.387 43.522 22.01 43.363 21.647 43.174 C 21.415 43.061 18.967 40.646 18.129 39.85 C 17.328 39.068 16.58 38.233 15.889 37.352 C 14.469 35.569 13.031 33.838 11.629 32.061 C 11.329 31.654 11.059 31.227 10.82 30.782 C 9.964 29.283 8.97 27.868 7.849 26.555 C 7.688 26.313 7.475 26.11 7.226 25.96 C 6.762 25.734 3.946 21.988 3.66 21.429 C 3.001 20.05 2.258 18.724 1.581 17.35 C 1.48 17.154 1.301 16.999 1.337 16.756 C 1.356 16.258 1.203 15.768 0.903 15.37 C 0.588 14.798 0.317 14.201 0.095 13.586 C 0.016 13.236 -0.014 12.875 0.006 12.516 C 0.006 12.183 0.6 12.023 0.683 12.076 C 0.992 12.225 1.105 11.886 1.278 11.737 C 1.343 11.684 1.414 11.64 1.491 11.606 C 2.058 11.951 2.594 12.344 3.096 12.778 C 3.704 13.222 4.276 13.713 4.807 14.246 C 4.807 14.246 5.027 14.55 5.342 14.972 L 6.501 16.512 C 7.362 17.648 8.283 18.825 8.479 19.057 C 8.672 19.317 8.822 19.606 8.925 19.913 C 8.984 20.05 11.682 23.397 11.771 23.546 C 12.336 24.241 12.788 25.022 13.108 25.859 C 13.167 26.031 13.263 26.19 13.387 26.323 C 14.308 27.542 15.093 28.862 15.919 30.152 C 16.341 30.812 16.84 31.418 17.291 32.055 C 17.364 32.179 17.429 32.308 17.487 32.441 C 17.559 32.605 17.645 32.762 17.743 32.911 C 18.866 34.385 19.829 35.973 21.041 37.37 C 21.32 37.691 22.277 39.517 22.615 39.868 C 22.8 40.058 22.978 41.063 23.192 41.188 Z M 20.328 24.075 C 20.564 24.458 20.564 24.941 20.328 25.324 C 20.256 25.478 19.894 25.639 19.781 25.55 C 19.561 25.383 19.335 25.217 19.133 25.032 C 19.02 24.919 17.541 22.928 16.976 22.285 C 16.709 21.964 16.459 21.643 16.222 21.31 C 15.984 20.977 15.806 20.621 15.628 20.27 L 13.251 15.995 C 13.078 15.676 12.937 15.341 12.829 14.996 C 12.433 13.819 11.911 12.688 11.272 11.624 C 11.199 11.423 11.069 11.247 10.898 11.119 C 10.571 10.917 9.115 7.902 9.002 7.468 C 8.877 6.927 8.729 6.404 8.58 5.875 C 8.432 5.345 8.325 4.798 8.194 4.263 C 8.158 4.115 8.051 3.984 8.129 3.788 C 8.234 3.438 8.186 3.06 7.998 2.747 C 7.833 2.308 7.696 1.859 7.588 1.403 C 7.563 1.143 7.573 0.881 7.618 0.624 C 7.618 0.386 8.075 0.279 8.152 0.321 C 8.372 0.446 8.479 0.196 8.634 0.095 C 8.688 0.058 8.746 0.026 8.806 0 C 9.628 0.675 10.402 1.406 11.123 2.188 L 12.312 3.924 C 12.847 4.828 13.399 5.768 13.5 5.952 C 13.614 6.16 13.689 6.388 13.72 6.624 C 13.72 6.731 15.372 9.412 15.414 9.531 C 15.76 10.094 15.964 10.733 16.008 11.392 C 16.016 11.525 16.057 11.654 16.127 11.767 C 16.578 12.788 16.975 13.832 17.315 14.895 C 17.505 15.43 17.767 15.935 17.987 16.458 C 18.015 16.559 18.037 16.663 18.052 16.768 C 18.073 16.895 18.107 17.021 18.153 17.142 C 18.694 18.373 19.157 19.634 19.674 20.876 C 19.787 21.162 20.066 22.66 20.227 22.975 C 20.286 23.159 20.233 23.909 20.328 24.075 Z M 40.59 34.362 C 40.917 34.683 40.709 35.158 40.216 35.723 C 40.055 35.902 39.449 36.145 39.312 36.068 C 39.049 35.934 38.797 35.779 38.558 35.604 C 38.439 35.491 37.043 33.494 36.603 32.792 C 36.185 32.119 35.83 31.408 35.545 30.669 C 34.951 29.189 34.357 27.696 33.763 26.216 C 33.636 25.883 33.545 25.538 33.489 25.187 C 33.276 23.984 32.914 22.812 32.414 21.697 C 32.363 21.494 32.258 21.309 32.111 21.162 C 31.808 20.924 30.714 17.844 30.667 17.416 C 30.554 16.345 30.322 15.317 30.186 14.258 C 30.186 14.104 30.067 13.967 30.186 13.789 C 30.338 13.467 30.338 13.094 30.186 12.772 C 30.071 12.331 29.989 11.882 29.942 11.428 C 29.95 11.168 30.002 10.911 30.096 10.667 C 30.162 10.435 30.691 10.364 30.738 10.411 C 30.958 10.548 31.118 10.316 31.332 10.227 C 31.397 10.194 31.465 10.166 31.534 10.144 C 32.267 10.871 32.928 11.668 33.507 12.522 C 33.507 12.522 33.626 12.766 33.78 13.117 C 33.935 13.468 34.137 13.914 34.339 14.383 C 34.737 15.317 35.153 16.292 35.248 16.482 C 35.331 16.696 35.374 16.925 35.373 17.154 C 35.373 17.267 36.621 20.038 36.65 20.127 C 36.911 20.707 37.049 21.334 37.054 21.97 C 37.053 22.097 37.084 22.221 37.144 22.333 C 37.508 23.341 37.819 24.367 38.077 25.407 C 38.231 25.93 38.451 26.43 38.671 26.941 C 38.693 27.041 38.708 27.142 38.712 27.244 C 38.720 27.369 38.744 27.494 38.784 27.613 C 39.265 28.802 39.586 30.075 40.186 31.222 C 40.34 31.484 40.507 32.946 40.661 33.256 C 40.661 33.458 40.453 34.231 40.59 34.362 Z"
                          fill="rgb(246, 58, 60)"
                        />
                      </svg>
                    </div>
                    <div className="w-[290px] h-auto">
                      <div className="relative inline-flex items-center justify-center w-full group">
                        {/* Macaron Images */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[50]">
                          {/* Upper Left */}
                          <Image
                            src="/assets/image/macaron-latte.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[30deg] delay-0"
                          />
                          {/* Upper Right */}
                          <Image
                            src="/assets/image/macaron-mocha.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[120%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[0deg] delay-75"
                          />
                          {/* Bottom Left */}
                          <Image
                            src="/assets/image/macaron-espresso.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:translate-y-[100%] group-hover:opacity-100 group-hover:rotate-[-25deg] delay-100"
                          />
                          {/* Bottom Right */}
                          <Image
                            src="/assets/image/macaron-coldbrew.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[110%] group-hover:translate-y-[110%] group-hover:opacity-100 group-hover:rotate-[45deg] delay-150"
                          />
                        </div>

                          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none hover:bg-primary/90 pointer-events-none bg-[#dddddb] text-white border-none shadow-none cursor-not-allowed h-14 rounded-full px-10 text-base w-full"
                        disabled>
                            <span className="relative z-20">
                              Coming soon to App Store
                            </span>
                          </button>
                       
                      </div>
                    </div>
                    <div className="relative inline-flex items-center justify-center w-full group">
                        {/* Macaron Images */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[50]">
                          {/* Upper Left */}
                          <Image
                            src="/assets/image/macaron-latte.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[30deg] delay-0"
                          />
                          {/* Upper Right */}
                          <Image
                            src="/assets/image/macaron-mocha.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[120%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[0deg] delay-75"
                          />
                          {/* Bottom Left */}
                          <Image
                            src="/assets/image/macaron-espresso.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:translate-y-[100%] group-hover:opacity-100 group-hover:rotate-[-25deg] delay-100"
                          />
                          {/* Bottom Right */}
                          <Image
                            src="/assets/image/macaron-coldbrew.png"
                            alt=""
                            width={30}
                            height={30}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[110%] group-hover:translate-y-[110%] group-hover:opacity-100 group-hover:rotate-[45deg] delay-150"
                          />
                        </div>

                          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none hover:bg-primary/90 pointer-events-none bg-[#dddddb] text-white border-none shadow-none cursor-not-allowed h-14 rounded-full px-10 text-base w-full"
                        disabled>
                            <span className="relative z-20">
                              Coming soon to Android
                            </span>
                          </button>
                       
                      </div>
                    <div
                      className="absolute z-10 right-[-60px] top-1/2 transform -translate-y-1/2 scale-80 rotate-[75deg] md:right-[-80px] xl:right-[-100px]"
                      style={{ opacity: "1", filter: "blur(0px)" }}
                    >
                      <svg
                        width={41}
                        height={44}
                        viewBox="0 0 41 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-7 md:w-8 md:h-9 xl:w-10 xl:h-11"
                        style={{
                          filter: "drop-shadow(0 0 0 rgba(246, 58, 60, 0.3))",
                        }}
                      >
                        <path
                          d="M 23.192 41.188 C 23.448 41.344 23.616 41.613 23.643 41.913 C 23.664 42.266 23.626 42.619 23.53 42.959 C 23.465 43.227 22.978 43.721 22.776 43.649 C 22.387 43.522 22.01 43.363 21.647 43.174 C 21.415 43.061 18.967 40.646 18.129 39.85 C 17.328 39.068 16.58 38.233 15.889 37.352 C 14.469 35.569 13.031 33.838 11.629 32.061 C 11.329 31.654 11.059 31.227 10.82 30.782 C 9.964 29.283 8.97 27.868 7.849 26.555 C 7.688 26.313 7.475 26.11 7.226 25.96 C 6.762 25.734 3.946 21.988 3.66 21.429 C 3.001 20.05 2.258 18.724 1.581 17.35 C 1.48 17.154 1.301 16.999 1.337 16.756 C 1.356 16.258 1.203 15.768 0.903 15.37 C 0.588 14.798 0.317 14.201 0.095 13.586 C 0.016 13.236 -0.014 12.875 0.006 12.516 C 0.006 12.183 0.6 12.023 0.683 12.076 C 0.992 12.225 1.105 11.886 1.278 11.737 C 1.343 11.684 1.414 11.64 1.491 11.606 C 2.058 11.951 2.594 12.344 3.096 12.778 C 3.704 13.222 4.276 13.713 4.807 14.246 C 4.807 14.246 5.027 14.55 5.342 14.972 L 6.501 16.512 C 7.362 17.648 8.283 18.825 8.479 19.057 C 8.672 19.317 8.822 19.606 8.925 19.913 C 8.984 20.05 11.682 23.397 11.771 23.546 C 12.336 24.241 12.788 25.022 13.108 25.859 C 13.167 26.031 13.263 26.19 13.387 26.323 C 14.308 27.542 15.093 28.862 15.919 30.152 C 16.341 30.812 16.84 31.418 17.291 32.055 C 17.364 32.179 17.429 32.308 17.487 32.441 C 17.559 32.605 17.645 32.762 17.743 32.911 C 18.866 34.385 19.829 35.973 21.041 37.37 C 21.32 37.691 22.277 39.517 22.615 39.868 C 22.8 40.058 22.978 41.063 23.192 41.188 Z M 20.328 24.075 C 20.564 24.458 20.564 24.941 20.328 25.324 C 20.256 25.478 19.894 25.639 19.781 25.55 C 19.561 25.383 19.335 25.217 19.133 25.032 C 19.02 24.919 17.541 22.928 16.976 22.285 C 16.709 21.964 16.459 21.643 16.222 21.31 C 15.984 20.977 15.806 20.621 15.628 20.27 L 13.251 15.995 C 13.078 15.676 12.937 15.341 12.829 14.996 C 12.433 13.819 11.911 12.688 11.272 11.624 C 11.199 11.423 11.069 11.247 10.898 11.119 C 10.571 10.917 9.115 7.902 9.002 7.468 C 8.877 6.927 8.729 6.404 8.58 5.875 C 8.432 5.345 8.325 4.798 8.194 4.263 C 8.158 4.115 8.051 3.984 8.129 3.788 C 8.234 3.438 8.186 3.06 7.998 2.747 C 7.833 2.308 7.696 1.859 7.588 1.403 C 7.563 1.143 7.573 0.881 7.618 0.624 C 7.618 0.386 8.075 0.279 8.152 0.321 C 8.372 0.446 8.479 0.196 8.634 0.095 C 8.688 0.058 8.746 0.026 8.806 0 C 9.628 0.675 10.402 1.406 11.123 2.188 L 12.312 3.924 C 12.847 4.828 13.399 5.768 13.5 5.952 C 13.614 6.16 13.689 6.388 13.72 6.624 C 13.72 6.731 15.372 9.412 15.414 9.531 C 15.76 10.094 15.964 10.733 16.008 11.392 C 16.016 11.525 16.057 11.654 16.127 11.767 C 16.578 12.788 16.975 13.832 17.315 14.895 C 17.505 15.43 17.767 15.935 17.987 16.458 C 18.015 16.559 18.037 16.663 18.052 16.768 C 18.073 16.895 18.107 17.021 18.153 17.142 C 18.694 18.373 19.157 19.634 19.674 20.876 C 19.787 21.162 20.066 22.66 20.227 22.975 C 20.286 23.159 20.233 23.909 20.328 24.075 Z M 40.59 34.362 C 40.917 34.683 40.709 35.158 40.216 35.723 C 40.055 35.902 39.449 36.145 39.312 36.068 C 39.049 35.934 38.797 35.779 38.558 35.604 C 38.439 35.491 37.043 33.494 36.603 32.792 C 36.185 32.119 35.83 31.408 35.545 30.669 C 34.951 29.189 34.357 27.696 33.763 26.216 C 33.636 25.883 33.545 25.538 33.489 25.187 C 33.276 23.984 32.914 22.812 32.414 21.697 C 32.363 21.494 32.258 21.309 32.111 21.162 C 31.808 20.924 30.714 17.844 30.667 17.416 C 30.554 16.345 30.322 15.317 30.186 14.258 C 30.186 14.104 30.067 13.967 30.186 13.789 C 30.338 13.467 30.338 13.094 30.186 12.772 C 30.071 12.331 29.989 11.882 29.942 11.428 C 29.95 11.168 30.002 10.911 30.096 10.667 C 30.162 10.435 30.691 10.364 30.738 10.411 C 30.958 10.548 31.118 10.316 31.332 10.227 C 31.397 10.194 31.465 10.166 31.534 10.144 C 32.267 10.871 32.928 11.668 33.507 12.522 C 33.507 12.522 33.626 12.766 33.78 13.117 C 33.935 13.468 34.137 13.914 34.339 14.383 C 34.737 15.317 35.153 16.292 35.248 16.482 C 35.331 16.696 35.374 16.925 35.373 17.154 C 35.373 17.267 36.621 20.038 36.65 20.127 C 36.911 20.707 37.049 21.334 37.054 21.97 C 37.053 22.097 37.084 22.221 37.144 22.333 C 37.508 23.341 37.819 24.367 38.077 25.407 C 38.231 25.93 38.451 26.43 38.671 26.941 C 38.693 27.041 38.708 27.142 38.712 27.244 C 38.720 27.369 38.744 27.494 38.784 27.613 C 39.265 28.802 39.586 30.075 40.186 31.222 C 40.34 31.484 40.507 32.946 40.661 33.256 C 40.661 33.458 40.453 34.231 40.59 34.362 Z"
                          fill="rgb(246, 58, 60)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <VideoThumbnail videoId="7TvPqi-6El4" />
                <MacaronRolling />
              </div>
              <section className="w-full pt-12 pb-0 md:py-24">
                <div className="max-w-7xl mx-auto md:px-4">
                  <div className="text-center mb-12 md:mb-16 p-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">
                      Why Macaron
                    </h2>
                    <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">
                      Other AI agents help you work. Macaron helps you live
                      better.
                    </p>
                  </div>
                  <div className="md:space-y-6 max-w-[960px] md:mx-auto">
                    <div
                      className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row md:pl-10 flex-col items-center justify-between gap-6 md:gap-8"
                      style={{
                        backgroundImage:
                          "url('/assets/image/why-macaron/bg1.svg')",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="flex-1 px-8 pt-10 md:pt-0"
                        style={{ color: "#42036c" }}
                      >
                        <h3 className="text-xl font-semibold mb-3 leading-[30px]">
                          Macaron is your personal agent
                        </h3>
                        <p className="text-lg leading-[1.6] opacity-60">
                          Macaron isn&apos;t here to make you work harder.
                          It&apos;s here to help you live better. Your life
                          matters most.
                        </p>
                      </div>
                      <div
                        className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg"
                        style={{
                          backgroundImage:
                            "url('/assets/image/why-macaron/decoration1.png')",
                        }}
                      />
                    </div>
                    <div
                      className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row-reverse md:pr-10 flex-col items-center justify-between gap-6 md:gap-8"
                      style={{
                        backgroundImage:
                          "url('/assets/image/why-macaron/bg2.svg')",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="flex-1 px-8 pt-10 md:pt-0"
                        style={{ color: "#950200" }}
                      >
                        <h3 className="text-xl font-semibold mb-3 leading-[30px]">
                          Your Macaron is truly unique
                        </h3>
                        <p className="text-lg leading-[1.6] opacity-60">
                          With a personal test and Deep Memory, Macaron grows
                          with you and remembers what matters, like a real
                          friend.
                        </p>
                      </div>
                      <div
                        className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg"
                        style={{
                          backgroundImage:
                            "url('/assets/image/why-macaron/decoration2.png')",
                        }}
                      />
                    </div>
                    <div
                      className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row md:pl-10 flex-col items-center justify-between gap-6 md:gap-8"
                      style={{
                        backgroundImage:
                          "url('/assets/image/why-macaron/bg3.svg')",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <div
                        className="flex-1 px-8 pt-10 md:pt-0"
                        style={{ color: "#695a00" }}
                      >
                        <h3 className="text-xl font-semibold mb-3 leading-[30px]">
                          No demos, only real solutions
                        </h3>
                        <p className="text-lg leading-[1.6] opacity-60">
                          Macaron builds real-life tools you actually need. Just
                          one simple request, no frustrating adjustments.
                        </p>
                      </div>
                      <div
                        className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg"
                        style={{
                          backgroundImage:
                            "url('/assets/image/why-macaron/decoration3.png')",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </section>
               <section className="w-full py-12 md:py-24">
      <div className="max-w-7xl mx-auto md:px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16 p-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">
            See it in action
          </h2>
          <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">
            Other AI agents help you work. Macaron helps you live better.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[960px] mx-auto">
  {/* Card 1 */}
  <Link
      className="block"
      href="/playbook/category/daily/fit-plan-creator"
    >
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Fitness Plan Creator
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Your Body, Your Rules: Personal Fitness Journey Planner
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6892e5caaa6e16ed138ee4d1-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
  </Link>

          {/* Card 2 */}
          <Link
                  className="block"
                  href="/playbook/category/family/baby-food-journey"
                >
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-0 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Baby Food Journey
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        From farm to spoon: Fresh homemade baby food
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/68941203129a8b22ebbd18c4-1.png"
          alt="Baby Food Journey"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>

          {/* Card 3 */}
          <Link
            className="block"
            href="/playbook/category/growth/law-study-guide"
          >
          <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Law Study Guide
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Legal wisdom at your fingertips — unlock it now
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6893a06e96e8fcf6105f8975-1.png"
          alt="Law Study Guide"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>

           {/* Card 4 */}
           <Link href="/playbook/category/hobbies/book-finder">
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          You Perfect Book Finder
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Find your perfect book match
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6892e40e7bac40bbf77f6e33-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
  </Link>

          {/* Card 5 */}
          <Link href="/playbook/category/hobbies/foundation-match-pro">
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Foundation Match Pro
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Find your perfect foundation match today
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6893a82696e8fcf6105f8aae-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>

          {/* Card 6 */}
          <Link href="/playbook/category/daily/stylesync">
          <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          StyleSync
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Style your perfect day with a dream closet
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/68936c05def845e53c83c0a3-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>

           {/* Card 7 */}
           <Link href="/playbook/category/growth/greenwave">
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          GreenWave Energy
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Power up tomorrow&apos;s world with clean energy today
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6892550cc28019528d81a777-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
  </Link>

          {/* Card 8 */}
          <Link href="/playbook/category/daily/beautybrandcentral">
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Beauty Brand Central
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Natural beauty for modern radiance
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6893138b1bb07ead242b868e-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>

          {/* Card 9 */}
          <Link href="/playbook/category/daily/bubbletea">
          <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Bubble Tea Filter
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Sweet sips that fit your limits
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/_next/99e1db8c-e106-4543-b24b-f6cd5d7d852c.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>

           {/* Card 10 */}
           <Link href="/playbook/category/daily/guide-pro">
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Gift Guide Pro
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Create birthday gifts that tell their perfect story
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6894419938b4126bb126cb00-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
  </Link>

          {/* Card 11 */}
          <Link href="/playbook/category/hobbies/serum-showdown">
  <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          Serum Showdown
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Smart serum picks for your glowing skin
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/6893a06d96e8fcf6105f893c-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>

          {/* Card 12 */}
          <Link href="/playbook/category/growth/mbti">
          <div className="group relative flex flex-col w-full rounded-3xl overflow-hidden cursor-pointer border bg-[#F1EFE9] border-[#E9E7E2] h-[356px] transition-transform duration-300 ease-out hover:scale-102 hover:shadow-lg">
    <div className="p-2 sm:p-5 flex flex-col z-30 flex-shrink-0">
      {/* Title row */}
      <div className="flex items-center gap-2 sm:gap-3 h-[26px] mb-[12px]">
        <h3 className="text-[20px] leading-[1.3] font-normal line-clamp-1 drop-shadow-sm text-[#161615] flex-1 min-w-0">
          MBTI Personality Match
        </h3>
      </div>

      {/* Description row */}
      <p className="text-[16px] leading-[1.3] text-[#595856] line-clamp-2 min-h-[2.6em]">
        Discover your gaming spirit animal
      </p>
    </div>

    {/* Image section */}
    <div className="flex-1 relative flex items-center justify-center pointer-events-none mt-2">
      <div className="animate-pulse drop-shadow-xl bg-opacity-2 absolute top-[-10px] w-[60%] sm:w-[70%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-10" />
      
      {/* Image (scale only, no shadow) */}
      <div className="absolute top-[-10px] w-[50%] sm:w-[60%] aspect-[9/19.5] rounded-[8px] sm:rounded-[12px] z-20 overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105">
        <Image
          src="/assets/project_template/68933785b4928472052820b9-1.png"
          alt="Fitness Plan Creator"
          fill
          className="object-cover"
        />
              </div>
            </div>
          </div>
          </Link>
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <AnimatedButton />
        </div>
      </div>
    </section>
              <section className="w-full py-16 md:py-24 bg-[#f9f7f2] undefined">
                <div className="max-w-4xl mx-auto px-6 md:px-10">
                  <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2
                      className="text-4xl md:text-5xl font-serif text-[#161615] mb-4"
                      style={{ opacity: 1 }}
                    >
                      First-hand impressions
                    </h2>
                    <p
                      className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto"
                      style={{ opacity: 1 }}
                    >
                      Real feedback from the thinkers and makers who&apos;ve
                      been working with our AI partner
                    </p>
                  </div>
                  <div className="space-y-8 mb-16 relative px-6">
                    <div
                      className="relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] mr-auto ml-2 mb-8"
                      style={{
                        opacity: 1,
                        transform: "translateY(30px) scale(0.9) translateZ(0)",
                      }}
                    >
                      <div
                        className="px-5 py-4 rounded-2xl relative shadow-sm ml-14"
                        style={{ backgroundColor: "#eade39" }}
                      >
                        <p
                          className="text-base leading-relaxed font-normal"
                          style={{ color: "#000000" }}
                        >
                          Arriving on campus with a long to-do list, Macaron
                          built me a course helper and club finder in five
                          minutes—suddenly, the semester felt less overwhelming.
                        </p>
                        <div
                          className="absolute -bottom-4 left-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#eade39" }}
                        />
                        <div
                          className="absolute -bottom-1 left-2 w-3 h-3 rounded-full"
                          style={{ backgroundColor: "#eade39" }}
                        />
                      </div>
                      <div className="absolute -bottom-4 left-0 w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-md border-2 border-white">
                        <Image
                          src="/assets/image/avatar-1.jpg"
                          alt=""
                          width={300}
                          height={300}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className="relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] ml-auto mr-2 mb-8"
                      style={{
                        opacity: 1,
                        transform: "translateY(30px) scale(0.9) translateZ(0)",
                      }}
                    >
                      <div
                        className="px-5 py-4 rounded-2xl relative shadow-sm mr-14"
                        style={{ backgroundColor: "#ff5816" }}
                      >
                        <p
                          className="text-base leading-relaxed font-normal"
                          style={{ color: "#ffffff" }}
                        >
                          I wanted to learn cooking but feared giving up;
                          Macaron made me a &quot;Beginner Cooking
                          Journal,&quot; and two weeks later I can cook three
                          dishes on my own.
                        </p>
                        <div
                          className="absolute -bottom-4 right-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#ff5816" }}
                        />
                        <div
                          className="absolute -bottom-1 right-2 w-3 h-3 rounded-full"
                          style={{ backgroundColor: "#ff5816" }}
                        />
                      </div>
                      <div className="absolute -bottom-4 right-0 w-12 h-12 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full shadow-md border-2 border-white">
                        <Image
                          src="/assets/image/avatar-2.jpg"
                          alt=""
                          height={300}
                          width={300}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div
                      className="relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] mr-auto ml-2 mb-8"
                      style={{
                        opacity: 1,
                        transform: "translateY(30px) scale(0.9) translateZ(0)",
                      }}
                    >
                      <div
                        className="px-5 py-4 rounded-2xl relative shadow-sm"
                        style={{ backgroundColor: "#8ca72b" }}
                      >
                        <p
                          className="text-base leading-relaxed font-normal"
                          style={{ color: "#ffffff" }}
                        >
                          Before heading home, it remembered my cat Tequila from
                          a week ago and asked if I&apos;d see her soon. Being
                          remembered like that felt special.
                        </p>
                        <div
                          className="absolute -bottom-4 left-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#8ca72b" }}
                        />
                        <div
                          className="absolute -bottom-1 left-2 w-3 h-3 rounded-full"
                          style={{ backgroundColor: "#8ca72b" }}
                        />
                      </div>
                    </div>
                    <div
                      className="relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] ml-auto mr-2 mb-8"
                      style={{
                        opacity: 1,
                        transform: "translateY(30px) scale(0.9) translateZ(0)",
                      }}
                    >
                      <div
                        className="px-5 py-4 rounded-2xl relative shadow-sm"
                        style={{ backgroundColor: "#ff98a2" }}
                      >
                        <p
                          className="text-base leading-relaxed font-normal"
                          style={{ color: "rgba(0, 0, 0, 0.7)" }}
                        >
                          I said it sounded stiff, and it instantly changed to
                          chat like a close friend. An AI that grows with me is
                          amazing.
                        </p>
                        <div
                          className="absolute -bottom-4 right-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#ff98a2" }}
                        />
                        <div
                          className="absolute -bottom-1 right-2 w-3 h-3 rounded-full"
                          style={{ backgroundColor: "#ff98a2" }}
                        />
                      </div>
                    </div>
                    <div
                      className="relative max-w-[329px] md:max-w-[500px] lg:max-w-[621px] mr-auto ml-2 mb-8"
                      style={{
                        opacity: 1,
                        transform: "translateY(30px) scale(0.9) translateZ(0)",
                      }}
                    >
                      <div
                        className="px-5 py-4 rounded-2xl relative shadow-sm"
                        style={{ backgroundColor: "#eade39" }}
                      >
                        <p
                          className="text-base leading-relaxed font-normal"
                          style={{ color: "#55000b" }}
                        >
                          One day I said I was tired, and it &quot;served&quot;
                          me a cup of jasmine tea in words. That gentle care
                          really touched me.
                        </p>
                        <div
                          className="absolute -bottom-4 left-0 w-2 h-2 rounded-full"
                          style={{ backgroundColor: "#eade39" }}
                        />
                        <div
                          className="absolute -bottom-1 left-2 w-3 h-3 rounded-full"
                          style={{ backgroundColor: "#eade39" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex justify-center mb-12"
                    style={{ opacity: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={44}
                      viewBox="0 0 12 44"
                      fill="none"
                    >
                      <circle cx={6} cy={6} r={6} fill="#FC4C53" />
                      <circle cx={6} cy={26} r={4} fill="#FC4C53" />
                      <circle cx={6} cy={42} r={2} fill="#FC4C53" />
                    </svg>
                  </div>
                  <div
                    className="text-center"
                    style={{
                      opacity: 1,
                      transform: "translateY(20px) translateZ(0)",
                    }}
                  >
                    <p className="text-2xl text-[#ff586a] font-normal leading-snug">
                      We look forward to your story with Macaron.
                    </p>
                  </div>
                </div>
              </section>
              <div className="w-full flex justify-center">
                <div>
                  <section
                    className="relative overflow-hidden bg-transparent w-full flex flex-col items-center justify-center gap-12 min-h-screen px-5 py-12 max-w-[500px] mx-auto md:gap-10 md:px-5 md:py-15 md:max-w-[800px] lg:flex-row lg:gap-10 lg:px-8 lg:py-15 lg:max-w-[1200px]"
                    style={{
                      opacity: 1,
                    }}
                  >
                    <div className="flex items-center justify-center w-full relative z-[2]">
                      <div className="flex w-full flex-col gap-12 md:gap-[70px] md:max-w-[1024px] lg:flex-1 lg:max-w-[1170px]">
                        <div className="flex flex-col items-center gap-[70px] w-full">
                          <div className="flex flex-col items-center gap-4 w-full text-center">
                            <h3
                              className="text-4xl md:text-5xl font-serif text-[#161615] mb-4"
                              style={{ opacity: 1 }}
                            >
                              Design and training of Macaron agent
                            </h3>
                            <p
                              className="text-lg md:text-xl text-[#595856] max-w-[1020px]"
                              style={{ opacity: 1 }}
                            >
                              We develop our in-house RL platform that supports
                              up to 1T-parameter LLMs with high efficiency and
                              low cost, and improve three key agentic
                              capabilities of LLMs with RL.
                            </p>
                          </div>
                          <BenchmarkImage />
                        </div>

                        <StatsSection />

                        <div className="flex flex-col items-center w-full max-w-[600px] mx-auto">
                          <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
                            <div className="w-[290px] h-auto">
                              <div className="relative inline-flex items-center justify-center w-full group">
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[50]">
                                  {/* Upper Left */}
                                  <Image
                                    src="/assets/image/macaron-latte.png"
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[30deg] delay-0"
                                  />
                                  {/* Upper Right */}
                                  <Image
                                    src="/assets/image/macaron-mocha.png"
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[120%] group-hover:-translate-y-[140%] group-hover:opacity-100 group-hover:rotate-[0deg] delay-75"
                                  />
                                  {/* Bottom Left */}
                                  <Image
                                    src="/assets/image/macaron-espresso.png"
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-x-[140%] group-hover:translate-y-[100%] group-hover:opacity-100 group-hover:rotate-[-25deg] delay-100"
                                  />
                                  {/* Bottom Right */}
                                  <Image
                                    src="/assets/image/macaron-coldbrew.png"
                                    alt=""
                                    width={30}
                                    height={30}
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-[110%] group-hover:translate-y-[110%] group-hover:opacity-100 group-hover:rotate-[45deg] delay-150"
                                  />
                                </div>

                                <Link
                                  href="/blog"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full inline-block"
                                >
                                  <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none bg-macaron-gradient noise-background text-white border border-white/70 shadow-[inset_0px_0px_17px_0px_rgba(255,255,255,0.25)] h-14 rounded-full px-10 text-base relative overflow-visible z-20 w-full">
                                    <span className="relative z-20">
                                      Read technical blog
                                    </span>
                                  </button>
                                </Link>
                              </div>
                            </div>
                            <div className="w-[290px] h-auto">
                              <button
                                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none hover:bg-primary/90 pointer-events-none bg-[#dddddb] text-white border-none shadow-none cursor-not-allowed h-14 rounded-full px-10 text-base w-full"
                                disabled
                              >
                                Open weights model
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <Footer2 />
            </div>
          </div>
        </div>
        <section
          aria-label="Notifications alt+T"
          tabIndex={-1}
          aria-live="polite"
          aria-relevant="additions text"
          aria-atomic={false}
        />
      </div>
    </>
  );
}
