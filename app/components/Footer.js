"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-none">
      <div className="w-full pt-[60px] pb-[60px] px-4 md:px-8 lg:px-16 bg-[url('/assets/image/footer.webp')] bg-cover bg-bottom bg-no-repeat relative">
        <div className="w-full flex flex-col md:flex-row gap-10">
          {/* Logo */}
          <div className="w-full md:w-[20%] flex justify-center md:justify-start items-start md:mr-[-8px]">
            <Image
              alt="Macaron Logo"
              src="/assets/image/favicon-16x16.png"
              width={56}
              height={56}
              className="object-contain block"
            />
          </div>

          {/* Company */}
          <div className="flex-1">
            <p className="font-[600] text-[#000] mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">
              Company
            </p>
            <ul className="space-y-[16px]">
              <li>
                <Link
                  href="/blog"
                  className="text-[#000] font-[400] text-[12px] md:text-[16px] hover:text-[#2A2A29] transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1">
            <p className="font-[600] text-[#000] mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">
              Legal
            </p>
            <ul className="space-y-[16px]">
              <li>
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000] font-[400] text-[12px] md:text-[16px] hover:text-[#2A2A29] transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000] font-[400] text-[12px] md:text-[16px] hover:text-[#2A2A29] transition-colors"
                >
                  Terms &amp; conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          
        </div>

        {/* Email at bottom right */}
        <div className="absolute bottom-4 right-4 md:right-8 lg:right-16">
          <a 
            href="mailto:hello@macaron.so"
            className="text-[#000] font-[400] text-[12px] md:text-[16px] hover:text-[#2A2A29] transition-colors"
          >
            hello@macaron.so
          </a>
        </div>
      </div>
    </footer>
  );
}