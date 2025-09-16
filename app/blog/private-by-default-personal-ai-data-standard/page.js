import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";


export default function PrivateByDefault() {
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
      <title>
        Private by Default: The 2025 Personal AI Data Standard and How Macaron
        Protects Your Data Pt. I - Macaron
      </title>
      <meta
        name="description"
        content="Personal AI must be private by design. See how Macaron secures Deep Memory, limits retention, and puts users in control of their life data."
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
                        Private by Default: The 2025 Personal AI Data Standard
                        and How Macaron Protects Your Data Pt. I
                      </h1>
                      <p>
                        <span className="img-container">
                          <Image
                            src="/assets/web/blog/private-by-default-personal-ai-data-standard/hero-image-1.png"
                            alt="Private by Default Personal AI"
                            width={831}
                            height={415}
                            className="rounded-lg"
                          />
                        </span>
                      </p>
                      <div className="text-[#595856] font-[400]">
                        <p>
                          Author: <span className="font-[600]">Boxu Li</span> at
                          Macaron
                        </p>
                      </div>
                      <br />
                      <em>
                        <strong>
                          Personal AI must be private by design. See how Macaron
                          secures Deep Memory, limits retention, and puts users
                          in control of their life data.
                        </strong>
                      </em>
                      <br />
                      <p>
                        In 2025, as <strong>personal AI</strong> assistants
                        become ubiquitous, users have elevated expectations for
                        how their &quot;life data&quot; is handled by AI
                        companions. Recent data breaches and new privacy laws
                        around the world have raised the bar: any credible AI
                        assistant must now be
                        <strong>private by default</strong> – it should remember
                        <em>you</em> without exposing or exploiting your
                        information.
                      </p>
                      <br />
                      <p>
                        <strong>Private by default</strong> isn&apos;t just a
                        catchphrase; it&apos;s a fundamental shift in design
                        philosophy. Much like the &quot;privacy by design&quot;
                        movement reshaped software development, privacy by
                        default is redefining how personal AIs operate. Users
                        want assurance that intimate details shared with an AI
                        stay confidential, and that the system is engineered
                        from the ground up to protect that trust. As regulators
                        from California to the EU push stricter rules on AI data
                        use, a new gold standard has been set: personal AI must
                        prioritize
                        <strong>
                          user control, transparency, and security
                        </strong>
                        above all else.
                      </p>

                      <br />
                      <h2 className="text-2xl font-semibold text-[#2a2a29]">
                        The 2025 Personal AI Data Standard: Private by Default
                      </h2>
                      <br />
                      <p>
                        What does it mean to be &quot;private by default&quot;
                        for a personal AI in 2025? At its core, it means any
                        data an AI collects or learns from you is
                        <strong>
                          locked down and used strictly to serve you
                        </strong>
                        , the user. No more treating personal conversations as
                        free fuel for tech companies&apos; algorithms or as
                        commodities to be sold. The emerging standard calls for
                        AI systems that <em>only</em> access and learn from
                        personal data with the user&apos;s knowledge and for the
                        user&apos;s benefit. This involves several key pillars:
                      </p>
                      <br />
                      <ul>
                        <li>
                          <p>
                            <strong>Minimal Data Collection</strong>: Collect
                            only what is necessary to fulfill the user&apos;s
                            requests and improve their experience. If an AI
                            doesn&apos;t need a piece of information to serve
                            you, it shouldn&apos;t collect it.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>Local or Isolated Processing</strong>:
                            Wherever possible, computations and storage should
                            stay on the user&apos;s device or in an isolated
                            environment. If cloud servers are needed for heavy
                            tasks, they must act as an extension of your device
                            – processing data without saving it or exposing it
                            to anyone else.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>No Surprise Sharing</strong>: Personal AI
                            platforms commit not to share or sell your data to
                            third parties for advertising or to train other
                            models without your explicit consent. Your data
                            isn&apos;t a product.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>User Ownership and Control</strong>: Users
                            should be in the driver&apos;s seat. That means easy
                            access to view, export, or delete your data. It also
                            means providing clear settings, like an option to go
                            &quot;incognito&quot; for sensitive conversations.
                          </p>
                        </li>
                        <li>
                          <p>
                            <strong>Transparency</strong>: Privacy by default
                            goes hand in hand with telling users exactly
                            what&apos;s happening with their data. If an AI
                            stores your conversation history or uses it to
                            personalize responses, you should know{" "}
                            <em>precisely</em> what&apos;s being stored, for how
                            long, and why.
                          </p>
                        </li>
                      </ul>
                      <br />
                      <p>
                        These principles are quickly becoming the norm.
                        Companies that ignore them risk both legal trouble and
                        the loss of user trust – an AI that knows your secrets
                        must prove it can keep them safe.
                      </p>
                      <br />
                      <p>
                        Macaron AI enters this landscape as a new personal AI
                        agent built from day one to meet – and even raise – this
                        privacy standard.
                      </p>

                      <br />
                      <h2 className="text-2xl font-semibold text-[#2a2a29]">
                        How Macaron Protects Your Life Data
                      </h2>
                      <br />
                      <p>
                        Macaron AI was built with a{" "}
                        <strong>privacy-first design</strong>. Rather than
                        bolting on security as an afterthought, Macaron&apos;s
                        architecture was developed around the idea that your
                        data belongs to you. Every feature, from its memory
                        system to its cloud infrastructure, has been evaluated
                        with one question in mind:
                        <em>
                          &quot;Does this protect the user&apos;s personal
                          information?&quot;
                        </em>
                        In this section, we break down Macaron&apos;s approach –
                        from memory lifecycle and user control to encryption,
                        transparency, and consent-driven learning – to show how
                        it keeps your life data safe.
                      </p>

                      <br />
                      <h3 className="text-lg font-semibold text-[#2a2a29]">
                        Privacy by Design Architecture
                      </h3>
                      <br />
                      <p>
                        From the ground up, Macaron&apos;s design follows
                        privacy-by-design principles. That means personal data
                        is siloed and guarded at every turn. Unlike many AI
                        assistants that send every snippet of conversation back
                        to corporate servers for analysis, Macaron minimizes
                        data transfer and exposure. When you chat with Macaron,
                        the system processes as much as it can
                        <strong>in a secure, isolated memory space</strong>
                        dedicated to you. Think of this as your private vault
                        within Macaron&apos;s brain – it&apos;s where your
                        preferences, history, and context live, sealed off from
                        other users and from any external prying eyes.
                      </p>
                      <br />
                      <p>
                        Crucially, even within Macaron&apos;s own systems, your
                        identifiable information is compartmentalized. The AI
                        doesn&apos;t need to know your full name or exact
                        address to help plan &quot;local Italian
                        restaurants&quot; for date night – it just needs a rough
                        location and your cuisine preferences. By structuring
                        data flows to default to
                        <em>the least amount of identifying info required</em>,
                        Macaron reduces the risk of misuse or overreach. In
                        effect, the AI only knows what it needs to know, and
                        nothing more. This privacy-centric architecture ensures
                        that Macaron&apos;s powerful personalization never comes
                        at the expense of your confidentiality.
                      </p>

                      <br />
                      <h3 className="text-lg font-semibold text-[#2a2a29]">
                        Memory Lifecycle: Controlled Retention and Deletion
                      </h3>
                      <br />
                      <p>
                        A defining feature of Macaron is its
                        <strong>Deep Memory</strong> – the ability to remember
                        and evolve with you over time. But &quot;long-term
                        memory&quot; doesn&apos;t mean keeping everything{" "}
                        <em>forever</em>. Macaron manages a thoughtful{" "}
                        <strong>memory lifecycle</strong> for your data.
                        Here&apos;s how it works: when you have conversations,
                        Macaron&apos;s system automatically distills the
                        interaction into key insights (for example, noting your
                        travel weather preferences or a goal you&apos;re
                        tracking). These insights are saved to your personal
                        memory vault, but the raw full conversation can be
                        discarded or compressed once it&apos;s no longer needed.
                        By summarizing and updating relevant facts rather than
                        stockpiling every word you&apos;ve ever typed, Macaron
                        avoids amassing a trove of sensitive raw data.
                      </p>
                      <br />
                      <p>
                        This selective retention boosts privacy – the AI recalls
                        what&apos;s important without being bogged down by
                        irrelevant details. Moreover,
                        <strong>
                          you have the power to prune or reset your memory
                        </strong>
                        at any time. Macaron provides easy tools to delete past
                        chats or wipe specific personal data points if you
                        choose. For example, telling Macaron to
                        &quot;forget&quot; a particular conversation or topic
                        will prompt it to comply, promptly purging that data
                        from its memory. And if you ever decide to leave the
                        service, Macaron will delete your data upon request so
                        nothing lingers without your consent.
                      </p>
                      <br />
                      <p>
                        Macaron&apos;s memory isn&apos;t a black hole –
                        it&apos;s an evolving journal that you control. It
                        remembers what
                        <em>you</em> want it to remember and lets go of the
                        rest, aligning with the principle that
                        <strong>
                          personal data should not be kept longer than necessary
                        </strong>
                        .
                      </p>

                      <br />
                      <h3 className="text-lg font-semibold text-[#2a2a29]">
                        User Control: You Own Your Data
                      </h3>
                      <br />
                      <p>
                        <span className="img-container">
                          <Image
                            src="/assets/web/blog/private-by-default-personal-ai-data-standard/user-control-image.png"
                            alt="User Control Data"
                            width={831}
                            height={415}
                            className="rounded-lg"
                          />
                        </span>
                      </p>
                      <br />
                      <p>
                        True privacy means <strong>user control</strong> at
                        every step. Macaron treats your data as exactly that –
                        <em>yours</em>. From the moment you start using Macaron,
                        you have a say in what it learns and retains.
                        <strong>In the app, you can review</strong> the personal
                        insights Macaron has stored (your saved preferences,
                        notable points from past chats, etc.) and edit or delete
                        anything that feels too invasive or irrelevant.
                      </p>
                      <br />
                      <p>
                        Need to clear last week&apos;s chat about a surprise
                        gift you planned? Delete it with a tap. Curious what
                        Macaron has learned about your fitness routine or
                        favorite books?
                        <strong>Export your data</strong> in a readable format
                        and see for yourself. Macaron supports easy data
                        download, allowing you to take your information with you
                        or simply inspect it for peace of mind.
                      </p>
                      <br />
                      <p>
                        Another aspect of control is consent for different
                        features. Macaron will ask permission for anything
                        beyond the ordinary scope of assisting you. If someday
                        Macaron introduces a feature that wants to integrate
                        with, say, your calendar or health app,
                        <strong>you&apos;ll always opt in</strong> – you will
                        never be opted in by default. The guiding philosophy is
                        simple:
                        <strong>
                          no one knows better than you what should happen with
                          your data
                        </strong>
                        . Macaron&apos;s job is to give you the controls and
                        then respect your choices – whether that&apos;s
                        day-to-day privacy toggles or the ultimate decision to
                        purge all your information.
                      </p>

                      <br />
                      <h3 className="text-lg font-semibold text-[#2a2a29]">
                        End-to-End Security and Encryption
                      </h3>
                      <br />
                      <p>
                        All the user control in the world means little if the
                        underlying data isn&apos;t secure. Macaron employs
                        <strong>
                          state-of-the-art security and encryption
                        </strong>
                        at every level to ensure your life data is safe from
                        unauthorized access. Whenever your data is in transit
                        (for example, during a chat session), it&apos;s
                        encrypted using industry-standard protocols – the same
                        level banks use. Even if someone intercepted your
                        connection, all they&apos;d see is gibberish.
                      </p>
                      <br />
                      <p>
                        On the server side, personal data is also encrypted at
                        rest and guarded by strict access controls. Multiple
                        layers of defense ensure that even if one safeguard
                        faltered, others keep your data secure. In plain terms,
                        your information on Macaron&apos;s servers is locked up
                        like a vault.
                      </p>
                      <br />
                      <p>
                        Furthermore, Macaron doesn&apos;t send your personal
                        information to any external analytics or advertising
                        platforms. Even the usage metrics collected for
                        improving the service are stripped of personal details –
                        for instance, Macaron might note that you opened a
                        fitness mini-app three times this week, but not what you
                        discussed.
                      </p>
                      <br />
                      <p>
                        By coupling robust encryption with a strict
                        <strong>no-sharing policy</strong>, Macaron ensures that
                        your private information stays between you and your AI –
                        exactly as it should.
                      </p>

                      <br />
                      <h3 className="text-lg font-semibold text-[#2a2a29]">
                        Transparency: No Black Boxes
                      </h3>
                      <br />
                      <p>
                        <span className="img-container">
                          <Image
                            src="/assets/web/blog/private-by-default-personal-ai-data-standard/transparency-image.png"
                            alt="Transparency"
                            width={831}
                            height={415}
                            className="rounded-lg"
                          />
                        </span>
                      </p>
                      <br />
                      <p>
                        Privacy isn&apos;t just about secrecy – it&apos;s about
                        <strong>honesty and transparency</strong>. Macaron
                        recognizes that earning your trust requires pulling back
                        the curtain on how it handles your data. To that end,
                        the privacy policy is written in plain English – no
                        convoluted legal jargon – so you can understand what
                        data is collected, how it&apos;s used, and what
                        isn&apos;t. It&apos;s concise and clearly states what
                        Macaron stores and why.
                      </p>
                      <br />
                      <p>
                        At any point, you can view your account settings to see
                        a summary of what Macaron currently holds about you (for
                        example, how many contacts or notes are stored). If
                        Macaron ever needs to collect a new kind of information
                        for a feature, you&apos;ll be told clearly ahead of time
                        – no surprises.
                      </p>
                      <br />
                      <p>
                        Transparency builds accountability. When an AI
                        isn&apos;t a black box, you don&apos;t have to just take
                        its word – you can verify what it&apos;s doing.
                        Macaron&apos;s open-door approach means your trust is
                        earned through visibility, not assumed.
                      </p>

                      <br />
                      <h3 className="text-lg font-semibold text-[#2a2a29]">
                        Opt-In Personalization (Learning Only with Consent)
                      </h3>
                      <br />
                      <p>
                        Many AI assistants improve by learning from user data,
                        often rolling your personal interactions into their
                        overall model. In other words, your private chats can
                        become free training fuel for someone else&apos;s AI.
                        Macaron flips that script with
                        <strong>opt-in personalization</strong>: the insights it
                        gains from you are used <em>only</em> to improve your
                        experience. Macaron&apos;s AI evolves to suit your needs
                        (remembering, say, that you&apos;re vegetarian or that
                        you prefer concise answers), and none of these
                        personalizations are fed into a global model.
                      </p>
                      <br />
                      <p>
                        By default, Macaron <strong>does not</strong> use your
                        conversations to train any broader AI model beyond your
                        own personal instance. If Macaron ever wanted to use
                        your data to improve the service for everyone, it would
                        <strong>ask first</strong> – for example, via a prompt
                        seeking permission to use some anonymized snippets.
                        Decline, and nothing leaves your private vault. Agree,
                        and you&apos;ll know exactly what is being shared (with
                        sensitive details stripped out).
                      </p>
                      <br />
                      <p>
                        Opt-in learning means you&apos;re never unwittingly part
                        of some secret training pipeline. Your data remains your
                        story – not grist for someone else&apos;s mill.
                      </p>

                      <br />
                      <h2 className="text-2xl font-semibold text-[#2a2a29]">
                        Conclusion
                      </h2>
                      <br />
                      <p>
                        In a world increasingly intertwined with AI assistants,
                        Macaron stands out by championing a simple yet profound
                        idea:{" "}
                        <strong>
                          your life data should be private by default
                        </strong>
                        . We&apos;ve entered an age where AI&apos;s usefulness
                        must be balanced with strict respect for individual
                        privacy. Macaron&apos;s privacy-first design, controlled
                        memory lifecycle, user-centric controls, ironclad
                        encryption, radical transparency, and consent-based
                        learning all serve one goal – to create an AI partner
                        you can trust with the most intimate parts of your life.
                      </p>
                      <br />
                      <p>
                        For users in North America and around the world, this
                        approach isn&apos;t just comforting – it&apos;s fast
                        becoming the norm. Macaron is proud to be at the
                        forefront of this shift, proving that advanced AI and
                        strict privacy can coexist harmoniously. You
                        shouldn&apos;t have to choose between a smart assistant
                        and your peace of mind, and with Macaron, you
                        don&apos;t.
                      </p>
                      <br />
                      <p>
                        Read our plain-English privacy policy and see exactly
                        what Macaron stores, why, and how to delete it at any
                        time.
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
                          Exploring how to measure AI&apos;s value beyond
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
