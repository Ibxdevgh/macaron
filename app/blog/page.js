import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function BlogPage() {
  return (
    <>
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
      <link
        rel="preload"
        as="image"
        href="/image/web/blog/from-foundation-models-to-personalized-agents/cover-foundation-models.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1024"
      />
      <link
        rel="preload"
        as="image"
        href="/image/web/blog/macaron-playbook-built-for-life/macaron-ai-life-centered-hero.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1024"
      />
      <link
        rel="preload"
        as="image"
        href="/image/web/blog/macaron-deep-memory-personal-ai-agent/macaron-deep-memory-cover.jpg?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1024"
      />
      <link
        rel="preload"
        as="image"
        href="/image/web/blog/big-tech-efficiency-vs-human-values/tech-layoffs-efficiency.jpg?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1024"
      />
      <link
        rel="preload"
        as="image"
        href="/image/web/blog/macaron-in-action-building-personalized-solutions/macaron-building.jpg?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1024"
      />
      <link
        rel="preload"
        as="image"
        href="/image/web/blog/the-dawn-of-a-life-first-agent-macaron-ai/sunset.jpg?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1024"
      />
      <link
        rel="preload"
        as="image"
        href="/image/web/blog/ai-relationships-not-just-productivity_title?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1024"
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
      <link rel="canonical" href="/blog" />
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
        href="/favicon-32x32.png"
      />
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
        <div className="flex w-full min-h-full flex-col items-center pt-8">
          <div className="sm:px-6">
            <div className="mx-auto w-full max-w-7xl lg:px-6">
              <div className="relative px-6 lg:px-12">
                <div className="pt-4 px-4 md:px-8 pb-4">
                  <h1 className="text-[48px] text-[#161615] mb-6">Blogs</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <Link
                      className="group gap-[24px]"
                      href="/blog/macaron-neurodiversity-adaptation-pt1"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/macaron-neurodiversity-adaptation-pt1/hero-image.png"
                            alt="How Macaron Adapts to Neurodiversity and Every Aspect of Your Life Pt. I"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            How Macaron Adapts to Neurodiversity and Every
                            Aspect of Your Life Pt. I
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          Explore how Macaron AI is built for neurodiversity and
                          multimodal life, going beyond checkboxes to deliver
                          inclusive intelligence for all users with ADHD,
                          dyslexia, autism, and other cognitive differences.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-09-03
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/personal-ai-value-metrics"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/personal-ai-value-metrics/hero-image.png"
                            alt="Metrics for Measuring the Value of Personal AI - Value
                          Add to Life"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            Metrics for Measuring the Value of Personal AI -
                            Value Add to Life
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          Exploring how to measure AI&#x27;s value beyond
                          productivity metrics, focusing on personal
                          experiences, well-being, and life enrichment through
                          Experience AI.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-09-03
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/private-by-default-personal-ai-data-standard"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/private-by-default-personal-ai-data-standard/hero-image.png"
                            alt="Private by Default: The 2025 Personal AI Data Standard
                          and How Macaron Protects Your Data Pt. I"
                            height={521}
                            width={1024}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            Private by Default: The 2025 Personal AI Data
                            Standard and How Macaron Protects Your Data Pt. I
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          Personal AI must be private by design. See how Macaron
                          secures Deep Memory, limits retention, and puts users
                          in control of their life data.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-29
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/from-foundation-models-to-personalized-agents"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/from-foundation-models-to-personalized-agents/cover-foundation-models.png"
                            alt="Macaron: The Personal Fine-Tuning Layer Transforming
                          AI Models"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            Macaron: The Personal Fine-Tuning Layer Transforming
                            AI Models
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          Explore how Macaron transforms foundation models into
                          truly personalized AI agents through adaptive
                          fine-tuning, deep memory, and on-demand mini-app
                          generation.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-29
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/macaron-playbook-built-for-life"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/macaron-playbook-built-for-life/macaron-ai-life-centered-hero.png"
                            alt="Best Personal AI Agent Platform for 2025"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            Best Personal AI Agent Platform for 2025
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          AI agent platforms are booming in 2025, but most focus
                          on work tasks. Discover why Macaron Playbook stands
                          out as the best personal AI agent platform for
                          enriching your life with its deep memory,
                          life-centered approach, and dynamic personal AI tools.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-29
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/macaron-deep-memory-personal-ai-agent"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/macaron-deep-memory-personal-ai-agent/macaron-deep-memory-cover.jpg"
                            alt="The Dawn of a Life-First Agent: Macaron AI&#x27;s Deep
                          Memory Revolution"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            The Dawn of a Life-First Agent: Macaron AI&#x27;s
                            Deep Memory Revolution
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          Discover how Macaron AI&#x27;s Deep Memory
                          architecture transforms AI from productivity tools to
                          true personal companions, offering persistent memory
                          and personalized experiences that evolve with you.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-26
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/big-tech-efficiency-vs-human-values"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/big-tech-efficiency-vs-human-values/tech-layoffs-efficiency.jpg"
                            alt="Big Tech&#x27;s Efficiency Obsession vs. Human Values:
                          How Macaron Champions a Different Path"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            Big Tech&#x27;s Efficiency Obsession vs. Human
                            Values: How Macaron Champions a Different Path
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          An in-depth analysis of Big Tech&#x27;s ruthless
                          efficiency culture that prioritizes profits over
                          people, and how Macaron represents a counterculture
                          focused on human empowerment and creativity.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-25
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/macaron-in-action-building-personalized-solutions"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/macaron-in-action-building-personalized-solutions/macaron-building.jpg"
                            alt="Macaron in Action: Building Personalized Solutions"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            Macaron in Action: Building Personalized Solutions
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          Explore how Macaron works in practice through
                          real-world use cases - from smart laundry care to
                          plant diagnostics and market analysis. See how
                          conversational AI empowers ordinary users to create
                          personalized mini-applications while keeping human
                          creativity front and center.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-21
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/the-dawn-of-a-life-first-agent-macaron-ai"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/the-dawn-of-a-life-first-agent-macaron-ai/sunset.jpg"
                            alt="Life‑First AI in a Productivity‑Driven World: How Macaron is Shifting the Paradigm"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            Life‑First AI in a Productivity‑Driven World: How
                            Macaron is Shifting the Paradigm
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          Explore how Macaron AI is pioneering a new paradigm of
                          life-first artificial intelligence, moving beyond
                          productivity tools to create meaningful human-AI
                          relationships that prioritize well-being and personal
                          growth.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-20
                        </p>
                      </div>
                    </Link>
                    <Link
                      className="group gap-[24px]"
                      href="/blog/ai-relationships-not-just-productivity"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
                        <div className="aspect-[4/2] overflow-hidden">
                          <Image
                            src="/assets/web/blog/ai-relationships-not-just-productivity_title.png"
                            alt="AI&#x27;s New Frontier"
                            width={1024}
                            height={521}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center min-h-[52.8px] max-h-[52.8px]">
                          <h2 className="text-[22px] font-[600] text-[#161615] line-clamp-2 leading-[1.2] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box]">
                            AI&#x27;s New Frontier
                          </h2>
                        </div>
                        <p
                          className="text-[#2A2A29] text-[18px] font-[400] line-clamp-2"
                          style={{
                            lineHeight: "1.5",
                            height: 54,
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          AI&#x27;s future isn&#x27;t about
                          productivity—it&#x27;s about relationships. Why
                          meaningful AI friendships like Doraemon matter more
                          than transactional assistants or fictional characters.
                        </p>
                        <p className="text-[#ABAAA6] text-[16px] font-[400]">
                          2025-08-20
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="flex justify-center mt-[48px] items-center">
                    <div className="w-[120px] h-[1px] bg-[#DAD8D3] rounded-full" />
                    <div>
                      <p className="text-[#ABAAA6] text-[16px] font-[400] mx-[24px]">
                        No more posts
                      </p>
                    </div>
                    <div className="w-[120px] h-[1px] bg-[#DAD8D3] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
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
    </>
  );
}
