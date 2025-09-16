import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


export default function AiFirst() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
      />
      <link rel="preload" as="image" href="/assets/image/logo-1.png" />
      <link
        rel="preload"
        as="image"
        href="assets/image/product-of-the-week-1.svg"
      />
      <link rel="preload" as="image" href="/assets/svg/global-1.svg" />
      <link
        rel="preload"
        as="image"
        href="/assets/web/blog/personal-ai-value-metrics/hero-image-1.png"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/web/blog/macaron-neurodiversity-adaptation-pt1/productivity-metrics.png"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/web/blog/macaron-neurodiversity-adaptation-pt1/value-metrics.png"
      />
      <link rel="preload" as="image" href="/assets/image/wait-button-1.png" />

      <meta name="theme-color" content="#ffffff" />
      <title>AI&apos;s New Frontier - Macaron</title>
      <meta
        name="description"
        content="AI&#39;s future isn&#39;t about productivity—it&#39;s about relationships. Why meaningful AI friendships like Doraemon matter more than transactional assistants or fictional characters."
      />
      <meta
        name="description"
        content="Exploring how to measure AI&#x27;s value beyond productivity metrics, focusing on personal experiences, well-being, and life enrichment through Experience AI."
      />
      <meta
        name="keywords"
        content="macaron ai,personal ai agent,personalized ai agents,intelligent life solutions,ai memory,best ai apps for iphone,best ai humanizer"
      />
      <link rel="canonical" href="macaron-neurodiversity-adaptation-pt1.html" />
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
      <link rel="manifest" href="manifest-1.json" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon-1.png"
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
        href="favicon-16x16-1.png"
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
          <div className="sm:px-6">
            <div className="mx-auto w-full max-w-7xl lg:px-6">
              <div className="relative px-6 lg:px-12">
                <div className="mb-8">
                  <Link href="/blog">
                    <button className="inline-flex items-center gap-2 py-2 text-[18px] text-[#2A2A29] hover:text-[#000000]">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rotate-180"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      All Posts
                    </button>
                  </Link>
                </div>
                <div className="flex gap-[105px]">
                  <div className="flex-1">
                    <div className="text-[#2a2a29] max-w-none">
                      <h1 className="text-3xl font-bold text-[#2a2a29] mb-8">
                        AI is Not Just About Productivity. It&apos;s About
                        Relationships.
                      </h1>
                      <br />
                      <p>
                        <span className="img-container">
                          <Image
                            src="/assets/web/blog/ai-relationships-not-just-productivity_title.png"
                            alt="macaron-building"
                            width={831}
                            height={415}
                            className="rounded-lg"
                          />
                        </span>
                      </p>

                      <div className="text-[#595856] font-[400]">
                        <p>
                          Author:{" "}
                          <Link
                            href="https://x.com/KaijieChen12236"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-[600] underline"
                          >
                            Kaijie
                          </Link>{" "}
                          at Macaron
                        </p>
                      </div>
                      <br />
                      <div className="mb-12"></div>
                      <p>But first, what exactly is a relationship?</p>
                      <br />
                      <p>
                        At its core, a relationship is a system of expectations.
                        Each party maintains a mental model of the other,
                        predicting behaviors and shaping interactions
                        accordingly. Relationships exist not just in
                        interactions, but in the expectations guiding those
                        interactions.
                      </p>
                      <br />
                      <p>
                        Today, human-AI relationships typically fall into two
                        main expectations: the helpful assistant and the
                        fictional character.
                      </p>
                      <br />
                      <p>
                        Assistants like ChatGPT, Gemini, Claude, and Cursor are
                        remarkably effective at solving tasks. Their success is
                        undeniable—ChatGPT alone now engages nearly 300 million
                        daily active users. Yet, their relationships remain
                        transactional. Not much emotional depth.
                      </p>
                      <br />
                      <p>
                        Fictional characters, represented by Character.ai,
                        Talkie, and MidReal, captivate users with compelling
                        narratives and emotional resonance. Over the past year,
                        I&apos;ve observed this appeal closely. Users initially
                        embrace these fictional worlds with enthusiasm. Yet, as
                        they sink deeper, prolonged immersion often leaves them
                        feeling empty, disconnected from reality, and ultimately
                        longing to escape. The very relationships meant to
                        comfort them amplify their unresolved real-world issues.
                      </p>
                      <br />
                      <p>There is a third way—the Doraemon relationship.</p>
                      <br />
                      <p>
                        <span className="img-container">
                          <Image
                            src="/assets/web/blog/ai-relationships-not-just-productivity_doraemon-iconic.png"
                            alt="Doraemon"
                            width={831}
                            height={415}
                            className="rounded-lg"
                          />
                        </span>
                      </p>
                      <br />
                      <p>
                        Doraemon wasn&apos;t merely fictional or simply useful;
                        he was a helpful friend. His pocket of limitless gadgets
                        was appealing precisely because it combined practical
                        solutions with emotional warmth. He cared deeply and
                        personally. He shaped my childhood understanding of what
                        a companion could and should be.
                      </p>
                      <br />
                      <p>
                        A truly valuable AI relationship integrates practical
                        help and genuine connection. It neither feels cold and
                        transactional nor empty and escapist. It must improve
                        your life in tangible, meaningful ways.
                      </p>
                      <br />
                      <p>
                        Today, we have the technology to make this vision real.
                        Our capacity to rapidly create genuinely useful,
                        practical AI experiences&mdash;far beyond mere
                        demos&mdash;is unmatched. But technical capability alone
                        is not the point. In the future, the competitive
                        landscape won&apos;t be defined by raw intelligence.
                        Instead, it will be about the quality and authenticity
                        of the relationships AI can build with its users.
                      </p>
                      <br />
                      <p>
                        Macaron AI is neither another helpful assistant nor
                        another fictional character. Macaron AI is your helpful
                        friend&mdash;your Doraemon.
                      </p>
                      <br />
                      <p>
                        The future of AI isn&apos;t about productivity.
                        It&apos;s about relationships. Macaron is leading that
                        revolution.
                      </p>

                      <br />
                    </div>
                  </div>
                  <div className="w-[200px] md:block hidden">
                  </div>
                </div>
                <div className="h-[1px] bg-[#D9D9D9] mt-12 w-full" />
              </div>
            </div>
          </div>
          <div className="sm:px-6 mb-12">
            <div className="mx-auto w-full max-w-7xl lg:px-6">
              <div className="relative px-6 lg:px-12">
                <div className="mt-12">
                  <h3 className="text-[24px] font-[500] text-[#000000] mb-8">
                    Related articles
                  </h3>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#F9E0DC] w-full overflow-hidden relative">
              <div className="absolute left-[-120px] top-[100px] bottom-0 flex items-center">
                <Image
                  src="/assets/image/wait-pink.webp"
                  alt="Macaron Character"
                  loading="lazy"
                  height={390}
                  width={390}
                  decoding="async"
                  className="object-contain -translate-x-6 md:block hidden"
                />
              </div>
              <div className="absolute right-0 top-0 bottom-[-200px] flex items-center">
                <Image
                  alt="Macaron character"
                  loading="lazy"
                  width={260}
                  height={260}
                  decoding="async"
                  className="object-contain translate-x-6 md:block hidden"
                  style={{ color: "transparent" }}
                  src="/assets/image/wait-orange.webp"
                />
              </div>
              <div className="sm:px-6">
                <div className="mx-auto w-full max-w-7xl lg:px-6">
                  <div className="relative px-6 lg:px-12">
                    <div className="py-16">
                      <div className="text-center px-8 relative z-10">
                        <h2
                          className="text-[24px] lg:text-[46px] md:text-[32px] text-[#161615] mb-6"
                          style={{ fontWeight: 600 }}
                        >
                          Apply to become{" "}
                          <span
                            className="text-[#161615] text-[24px] lg:text-[46px] md:text-[32px]"
                            style={{ fontWeight: 400 }}
                          >
                            Macaron&apos;s first friends
                          </span>
                        </h2>
                        <Link className="block" href="/contact" target="_blank" rel="noopener noreferrer">
                          <button className="w-full mt-[30px] md:mt-[60px] flex items-center justify-center relative transition-all duration-200 ease-in-out transform cursor-pointer hover:scale-105 active:scale-95">
                            {/* Background Image */}
                            <Image
                              src="/assets/image/wait-button-1.png"
                              width={237}
                              height={60}
                              alt="Macaron button background"
                              className="absolute inset-0 w-[200px] md:w-[237px] h-auto mx-auto"
                            />

                            {/* Text (always on top) */}
                            <span className="relative z-10 text-[18px] mt-4 md:text-[20px] leading-[22px] font-[600] text-white">
                              Find my AI friend
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16"></div>
        <Footer />
      </div>
    </>
  );
}
