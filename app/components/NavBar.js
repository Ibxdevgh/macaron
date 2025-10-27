"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactLink from "../components/ContactLink";

export default function NavBar() {
  const pathname = usePathname();

  // utility to check active link
  const linkClass = (path) =>
    `text-base transition-all duration-200 px-3 py-2 rounded-lg ${
      pathname === path
        ? "bg-[#E9E7E2] text-black" // active link style
        : "text-black hover:text-gray-500"
    }`;

  return (
    <nav className="flex items-center justify-between px-[16px] md:px-[32px] h-[44px] md:h-[64px] border-b border-[#E9E7E2] w-full fixed top-0 left-0 z-50 bg-[#F9F7F1]">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/assets/image/logo.png"
          alt="Macaron"
          width={153}
          height={48}
          className="md:w-[153px] md:h-[48px] rounded-lg"
        />
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-[80px]">
        <Link href="/blog" className={linkClass("/blog")}>
          Blog
        </Link>
        <Link href="/playbook" className={linkClass("/playbook")}>
          Playbook
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact Us
        </Link>
        <Link href="/qa" className={linkClass("/qa")}>
          FAQ
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-2">
        {/* Coming Soon Button */}
        <button className="bg-blue-500/10 text-blue-600 border border-blue-500/20 px-4 py-2 rounded-md text-base font-medium transition-colors hover:bg-blue-500/20 h-10">
          CA : Coming Soon
        </button>
        
        <Link
          href="https://x.com/macaronagent"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
        >
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none hover:bg-gray-200 hover:text-accent-foreground rounded-md h-8 w-8 md:h-10 md:w-10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 57 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-md" 
            >
              <rect width="57" height="57" rx="4" fill="black" />
              <rect x="3" y="3" width="51" height="51" rx="4" fill="black" />
              <path
                d="M41.9434 7.0459H49.112L33.4506 24.9458L51.875 49.3036H37.4489L26.1498 34.5307L13.2211 49.3036H6.04817L22.7995 30.1576L5.125 7.0459H19.9174L30.1307 20.5489L41.9434 7.0459ZM39.4274 45.0128H43.3996L17.759 11.1113H13.4964L39.4274 45.0128Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
      </div>
    </nav>
  );
}