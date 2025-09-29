"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-none">
      <div className="w-full pt-16 pb-24 px-4 md:px-8 lg:px-16 bg-[url('/assets/image/footer.webp')] bg-cover bg-bottom bg-no-repeat relative">
        <div className="w-full flex flex-col md:flex-row gap-10">
          {/* Logo */}
          <div className="w-full md:w-1/5 flex justify-center md:justify-start items-start">
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
            <p className="font-semibold text-black mb-4 md:mb-8 text-lg md:text-xl">
              Company
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-black font-normal text-sm md:text-base hover:text-gray-800 transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex-1">
            <p className="font-semibold text-black mb-4 md:mb-8 text-lg md:text-xl">
              Legal
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-normal text-sm md:text-base hover:text-gray-800 transition-colors"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-normal text-sm md:text-base hover:text-gray-800 transition-colors"
                >
                  Terms & conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Email at bottom right */}
        <div className="absolute bottom-6 right-4 md:right-8 lg:right-16">
          <a 
            href="mailto:hello@macaron.so"
            className="text-black font-semibold text-sm md:text-base hover:text-gray-800 transition-colors underline"
          >
            hello@macaron.so
          </a>
        </div>
      </div>
    </footer>
  );
}