"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Accordion component
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 min-w-0 lg:w-[713px] qa-content pt-6 lg:pt-8">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="flex flex-col w-full mb-6">
            <button
              onClick={() => toggle(index)}
              className="flex flex-row gap-2 items-start justify-start w-full text-left group focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 mt-[7px] transition-transform duration-300 ease-in-out text-[#161615] ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <div className="text-lg md:text-[20px] leading-6 md:leading-[30px] text-[#161615] font-medium transition-colors duration-200 group-hover:text-[#2a2a29] font-sans">
                {item.title}
              </div>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out ml-6"
              style={{ maxHeight: isOpen ? "2000px" : "0px" }}
            >
              <div className="pt-4 md:pt-6 text-sm md:text-[16px] leading-6 md:leading-[30px] text-[#2a2a29] font-normal max-w-full lg:max-w-[713px]">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Main FAQ page
export default function FAQSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const sidebarRef = useRef(null);

  // refs to each section
  const aboutRef = useRef(null);
  const gettingStartedRef = useRef(null);
  const almondsRef = useRef(null);
  const projectsRef = useRef(null);
  const accountRef = useRef(null);
  const examplesRef = useRef(null);

   const faqSections = useMemo(
    () => [
      {
        title: "About Macaron",
        ref: aboutRef,
        items: [
          {
            title: "What is Macaron?",
            content: (
              <p>
                Macaron is{" "}
                <strong>The World&apos;s First Personal Agent</strong>. Other AI
                agents help you work. Macaron helps you live better.
                <br />
                It&apos;s not another productivity tool that pushes you to work
                harder — it focuses on your{" "}
                <strong>happiness, health, and freedom</strong>, reminding you
                that life itself matters most.
              </p>
            ),
          },
          {
            title:
              "How is Macaron different from productivity tools like ChatGPT or Manus?",
            content: (
              <p>
                Productivity tools often feel cold and impersonal, focusing only
                on completing tasks.
                <br />
                Macaron is warm and empathetic. It not only solves your problems
                but also <strong>understands your deeper needs.</strong>
                <br />
                Unlike most tools that forget each chat, Macaron uses{" "}
                <strong>Deep Memory</strong> to
                <strong>remember your preferences and context</strong> over
                time, so you don&apos;t have to repeat yourself.
              </p>
            ),
          },

          {
            title: "Who is Macaron for?",
            content: (
              <>
                <p>
                  Macaron is designed for a wide range of people, including:
                </p>
                <ul className="list-disc ml-6 mt-2">
                  <li>
                    General AI enthusiasts curious about innovative products
                  </li>
                  <li>
                    Young parents needing emotional support and life
                    organization
                  </li>
                  <li>
                    Hobbyists wanting to track and grow their personal interests
                  </li>
                  <li>
                    Language learners seeking a consistent and friendly study
                    companion
                  </li>
                  <li>
                    Anyone feeling lonely and looking for deep, meaningful
                    companionship
                  </li>
                </ul>
              </>
            ),
          },

          {
            title: "What can Macaron do for me?",
            content: (
              <p>
                You don&apos;t need complicated prompts, just tell Macaron what
                you want, and it will instantly build{" "}
                <strong>practical tools tailored to you.</strong>
                <br />
                Want a fitness tracker? A travel journal? A personalized meal
                log? Macaron creates real-life tools to meet your specific
                needs.
              </p>
            ),
          },
        ],
      },
      {
        title: "Getting Started",
        ref: gettingStartedRef,
        items: [
          {
            title: "How do I create my Macaron?",
            content: (
              <p>
                When you first open the app, you&apos;ll answer 3 personality
                test questions.
                <br />
                Based on your answers, the system will instantly match you with
                a unique Macaron — with its own color, personality, and speaking
                style.
                <br />
                Your Macaron will grow and evolve over time as you interact,
                remembering your preferences and adapting to your life.
              </p>
            ),
          },
          {
            title: "How do I sign up or log in?",
            content: (
              <p>
                Currently supported: Google, Apple ID, and email verification
                code.
                <br />
                More social login options will be added in future updates.
                <br />
                <strong>Tips:</strong> If you log in with the same account on
                multiple devices, your Macaron and its memory will stay
                perfectly in sync.
              </p>
            ),
          },
          {
            title: "How do I change the language?",
            content: (
              <p>
                Go to <strong>Settings → Language.</strong>
                <br />
                Choose from: System Default, English, Chinese, Japanese, Korean,
                or Spanish.
                <br />
                The change will take effect immediately, you don&apos;t need to
                restart the app.
              </p>
            ),
          },
          {
            title: "How do I use the voice feature?",
            content: (
              <p>
                Go to the <strong>Chat Page</strong> and tap the microphone icon
                at the bottom to start voice chat.
                <br />
                To switch back to text, tap the keyboard icon.
                <br />
                <strong>Note:</strong> Voice chat is available for subscribers
                only.
              </p>
            ),
          },
          {
            title: "Can I customize Macaron's voice?",
            content: (
              <>
                <p>Yes. There are two ways to make voice settings:</p>
                <ol className="list-decimal ml-6 mt-2">
                  <li>
                    Go to the <strong>Chat Page</strong> → Tap the three dots
                    (top right) → Tap <strong>Voice settings</strong>.
                  </li>
                  <li>
                    Go to <strong>Settings → Voice settings</strong>.
                    <br />
                    You can choose from the available voice packs. Preview in
                    real time, then save your selection.
                  </li>
                </ol>
              </>
            ),
          },
          {
            title: "Which languages does Macaron support for voice chat?",
            content: <p>English, Chinese, Japanese, Korean, and Spanish.</p>,
          },
          {
            title: "What does Macaron remember about me?",
            content: (
              <p>
                Macaron has Personalized Deep Memory that remembers your
                preferences, experiences, and emotions over time.
                <br />
                This allows Macaron to share meaningful memories with you and
                understand your unspoken context—just like a real friend.
              </p>
            ),
          },
          {
            title: "Can I delete a specific memory?",
            content: (
              <p>
                Not at the moment. Memories are considered a valuable part of
                your relationship with Macaron, so we currently do not offer the
                option to remove individual memories.
              </p>
            ),
          },
        ],
      },
      {
        title: "About almonds",
        ref: almondsRef,
        items: [
          {
            title: "What are almonds?",
            content: (
              <p>
                Almonds are Macaron&apos;s core resource. They are what your
                Macaron uses to{" "}
                <strong>build, modify, and get projects</strong>{" "}
                for you, just like a baker needs almonds to make a macaron.
              </p>
            ),
          },
          {
            title: "When are almonds used?",
            content: (
              <>
                <p>You&apos;ll spend almonds whenever you:</p>
                <ul>
                  <li>
                    Create a new project (<strong>10 almonds</strong>{" "}
                    at a time)
                  </li>
                  <li>
                    Modify an existing project (<strong>10 almonds</strong>{" "}
                    at a time)
                  </li>
                  <li>
                    Use &quot;Get it now&quot; from the Playbook to add someone
                    else&apos;s project (<strong>2 almonds</strong>{" "}
                    at a time)
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "How can I check my almond consumption history?",
            content: (
              <p>
                Go to the <strong>Project Page</strong>.<br />
                the almond icon in the top right corner.
                <br />
                On the pop-up almond recharge page, tap{" "}
                <strong>Consumption History</strong> in the bottom right.
                <br />
                You&apos;ll see a full list of almonds used for your account.
              </p>
            ),
          },
          {
            title: "How can I get more almonds?",
            content: (
              <>
                <p>There are three main ways:</p>
                <ol>
                  <li>
                    <strong>Subscribe to a plan</strong>
                    <ul>
                      <li>
                        <strong>Classic Plan</strong>: 60 almonds/month, pin 1
                        project, 500 minutes of voice calls.
                      </li>
                      <li>
                        <strong>Sweet Plan</strong>: 350 almonds/month, pin 4
                        projects, unlimited voice calls.
                        <br />
                        Monthly and annual billing options are available (annual
                        saves more). You can switch plans or cancel anytime.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Top up almonds directly</strong>
                    <br />
                    Go to the{" "}
                    <strong>Project Page</strong>, click the almond icon, then
                    choose 100, 300, or 1000-almond packages.
                  </li>
                  <li>
                    <strong>Participate in events</strong>
                    <br />
                    Follow official channels for campaigns. Join in-app events
                    to earn bonus almonds (e.g., 10 almonds for filling out a
                    feedback form).
                  </li>
                </ol>
              </>
            ),
          },
          {
            title: "What payment methods are supported?",
            content: (
              <p>
                Almonds from subscriptions or top-ups will{" "}
                <strong>never expire</strong>.
              </p>
            ),
          },
          {
            title: "Are there any promotions or discounts on almonds?",
            content: (
              <>
                <ul>
                  <li>Global: Visa, MasterCard, American Express, PayPal</li>
                  <li>China: WeChat Pay, Alipay</li>
                </ul>
              </>
            ),
          },
          {
            title: "Can I get a refund for my subscription?",
            content: (
              <>
                <p>Yes. We offer a 7-day no-questions-asked refund:</p>
                <ol>
                  <li>
                    <strong>Apple App Store</strong>
                    <ul>
                      <li>
                        App Store → Profile icon →
                        <strong>
                          Account → Purchase History → Report a Problem
                        </strong>
                      </li>
                      <li>
                        Apple reviews within 24–48 h and issues a refund if
                        approved.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Macaron support</strong>
                    <ul>
                      <li>
                        Email <strong>contact@macaron.im</strong> with your{" "}
                        <strong>Account ID</strong> and payment screenshot.
                      </li>
                      <li>
                        After approval, we process the refund.
                        <br />
                        <strong>Note:</strong> Refunded almonds are removed and
                        pinned projects reset.
                      </li>
                    </ul>
                  </li>
                </ol>
              </>
            ),
          },
          {
            title: "Can I get a refund for topped-up almonds?",
            content: (
              <>
                <p>
                  Yes, via Apple App Store or by emailing contact@macaron.im.
                </p>
                <ul>
                  <li>Unused almonds: full refund</li>
                  <li>
                    Partially used almonds: refund based on remaining balance
                  </li>
                </ul>
              </>
            ),
          },
          {
            title:
              "If I delete my account or unsubscribe, will my almonds be restored later?",
            content: (
              <p>
                Yes. If you had an active subscription before deletion, your
                almonds can be restored when you return.
              </p>
            ),
          },
        ],
      },
      {
        title: "About Projects",
        ref: projectsRef,
        items: [
          {
            title: "How do I create a project?",
            content: (
              <p>
                In the <strong>Chat Page</strong>, describe what you want in
                plain language.
                <br />
                Macaron outlines the features and confirms them with you. After
                you&apos;re satisfied, Macaron builds the project, names it, and
                designs an icon.
                <br />
                <strong>Note:</strong> Macaron can only work on one task at a
                time.
              </p>
            ),
          },
          {
            title: "Where can I see the projects I've created?",
            content: (
              <>
                <ul>
                  <li>
                    <strong>Project page</strong>: view and manage all projects
                  </li>
                  <li>
                    <strong>Chat page</strong>: tap the project card after
                    creation to open it
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "How long does it take to create a project?",
            content: (
              <p>
                Depends on complexity. While building, an estimated time appears
                above the chat box. You can keep chatting meanwhile.
              </p>
            ),
          },
          {
            title: "How will I know when my project is ready?",
            content: (
              <>
                <ul>
                  <li><strong>In-app:</strong> Macaron sends a chat message.</li>
                  <li>
                    <strong>Away:</strong> enable push notifications to receive a &quot;Your
                    project is ready&quot; alert.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "How many projects can I create?",
            content: <p>No limit, as long as you have enough almonds.</p>,
          },
          {
            title: "Why do I see Not enough almonds?",
            content: (
              <p>
                Creating or modifying a project costs 10 almonds. If your
                balance falls below 10, the project pauses until you recharge.
              </p>
            ),
          },
          {
            title: "What can I do while Macaron is building a project?",
            content: (
              <p>
                Let Macaron focus on the build. You can keep chatting,
                brainstorm improvements, or plan your next request.
              </p>
            ),
          },
          {
            title: "What if project creation or modification fails?",
            content: (
              <p>
                If creation fails, spent almonds are automatically returned. In
                the chat page, tap{" "}
                <strong>Retry</strong> or{" "}
                <strong>Cancel</strong>.
              </p>
            ),
          },
          {
            title: "Why does it take quite a while to open a project?",
            content: (
              <p>
                Projects unused for a while take extra time to load while
                Macaron retrieves them from storage.
              </p>
            ),
          },
          {
            title:
              "I'm not happy with my generated project. What should I do?",
            content: (
              <>
                <p>
                  Request specific changes until satisfied. Each revision helps
                  Macaron learn your preferences.
                </p>
                <ul>
                  <li>Type edits directly when the project card appears.</li>
                  <li>
                    Or tap <strong>+</strong>, select an item, then describe the
                    change.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: "Can I restore the previous version after making changes?",
            content: (
              <p>Not yet a version-history feature is in development.</p>
            ),
          },
          {
            title: "Can I delete a project?",
            content: (
              <p>
                Yes. On the <strong>project page</strong>, long-press the
                project card and tap
                <strong>Delete</strong>.<br />
                <strong>Note:</strong> Deletion is permanent.
              </p>
            ),
          },
          {
            title: "How do I pin or unpin a project?",
            content: (
              <p>
                Subscribers can pin projects: long-press the card →{" "}
                <strong>Pin/Unpin</strong>.
              </p>
            ),
          },
        ],
      },
      {
        title: "Account & Help ",
        ref: accountRef,
        items: [
          {
            title: "I forgot my password. How can I reset it?",
            content: (
              <p>
                On the <strong>login page</strong>, tap
                <strong>Forgot password</strong>. You&apos;ll receive a
                verification email.
              </p>
            ),
          },
          {
            title:
              "I can't receive the verification or password reset email. What should I do?",
            content: (
              <p>
                Check spam/junk folders. If still missing, email
                contact@macaron.im with a description of your issue.
              </p>
            ),
          },
          {
            title: "How can I contact official support?",
            content: (
              <>
                <ul>
                  <li>
                    In-app: chat page → three dots →<strong>Feedback</strong>,
                    or
                    <strong>Settings → Feedback</strong>
                  </li>
                  <li>Email: contact@macaron.im</li>
                  <li>
                    Discord: join the server and post in the help channel
                    <br />
                    <strong>Note:</strong> Include screenshots, contact info,
                    and Account ID for faster assistance.
                  </li>
                </ul>
              </>
            ),
          },
        ],
      },
      {
        title: "Examples & Tips",
        ref: examplesRef,
        items: [
          {
            title: "Can I use projects created by other users?",
            content: (
              <p>
                Yes. On the <strong>project page</strong>, open the Playbook,
                browse, and tap
                <strong>Get it now</strong>.<br />
                <strong>Note:</strong> Costs 2 almonds per project added.
              </p>
            ),
          },
          {
            title: "Can I share my projects with other users?",
            content: <p>Not yet; sharing functionality is in development.</p>,
          },
          {
            title: "How can I get Macaron to help me build better projects?",
            content: (
              <p>
                Start with a short, clear idea. Macaron confirms features with
                you, then builds. After it&apos;s ready, give feedback and
                Macaron refines.
                <br />
                <strong>Tips:</strong> Check the Playbook for inspiration on
                phrasing requests.
                <br />
                <strong>Example:</strong> Instead of &quot;Make me a workout
                app,&quot; try
                <br />
                &quot;Create a 4-week beginner workout tracker with daily
                exercise tips and a progress chart.&quot;
              </p>
            ),
          },
        ],
      },
    ],
    []
  );

// set default active section
  useEffect(() => {
    if (faqSections.length > 0) {
      setActiveSection(faqSections[0].title);
    }
  }, [faqSections]);

  // Sidebar delayed scroll animation
  useEffect(() => {
    let currentY = 0;
    let targetY = 0;

    const onScroll = () => {
      targetY = window.scrollY;
    };

    const animate = () => {
      currentY += (targetY - currentY) * 0.5;
      if (sidebarRef.current) {
        sidebarRef.current.style.transform = `translateY(${currentY}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", onScroll);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (ref, index) => {
    if (ref.current) {
      const yOffset = -64;
      const y =
        ref.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveIndex(index);
      setActiveSection(faqSections[index].title);
    }
  };

  // Intersection observer-like logic
  useEffect(() => {
    const onScroll = () => {
      faqSections.forEach((section, i) => {
        if (!section.ref.current) return;
        const top = section.ref.current.getBoundingClientRect().top;
        if (top >= 0 && top < window.innerHeight / 2) {
          setActiveIndex(i);
          setActiveSection(section.title);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [faqSections]);

  return (
    <>
      <NavBar />
      <div className="w-full relative bg-[#F9F7F1] min-h-screen overflow-x-hidden pt-[64px]">
        <div className="flex w-full flex-col items-center">
          <div className="min-h-screen sm:px-6 max-w-[1440px]">
            <div className="mx-auto w-full max-w-7xl lg:px-6">
              <div className="relative px-6 lg:px-12">
                <div className="flex-col gap-12 max-w-[1240px] mx-auto pt-6 md:pt-8 px-4 md:px-0">
                  {/* Header */}
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-[48px] font-serif mb-4 text-[#161615]">
                      FAQ
                    </h1>
                    <p className="text-sm md:text-[16px] mb-6 text-[#ABAAA6]">
                      Frequently asked questions about Macaron
                    </p>
                    <div className="w-full h-[1px] bg-[#E9E7E2]" />
                  </div>

                  <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <div className="hidden lg:block w-[295px] lg:flex-shrink-0">
                      <div
                        ref={sidebarRef}
                        className="sticky top-20 transition-transform duration-300 ease-out"
                      >
                        <nav className="space-y-6 pt-6 lg:pt-8">
                          {faqSections.map((section, i) => (
                            <button
                              key={i}
                              onClick={() => scrollToSection(section.ref, i)}
                              className={`block w-full text-left text-[16px] font-medium leading-normal transition-colors duration-300 ${
                                activeSection === section.title
                                  ? "text-[#ff596c]"
                                  : "text-[#abaaa6] hover:text-[#161615]"
                              }`}
                            >
                              {section.title}
                            </button>
                          ))}
                        </nav>
                      </div>
                    </div>

                    {/* Content Sections */}
                    <div className="flex-1">
                      {faqSections.map((section, i) => (
                        <div key={i} ref={section.ref} className="mb-12">
                          <h2 className="text-[#161615] text-3xl md:text-4xl font-semibold leading-snug pt-8 mb-4">
                            {section.title}
                          </h2>
                          <Accordion items={section.items} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
