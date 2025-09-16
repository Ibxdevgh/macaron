"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactLink() {
  const [showPopup, setShowPopup] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "contact@macaron.im";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFadeOut(false);
  };

  useEffect(() => {
    if (showPopup) {
      const fadeTimer = setTimeout(() => setFadeOut(true), 3000); // fade after 3s
      const removeTimer = setTimeout(() => setShowPopup(false), 3500); // unmount after 3.5s
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [showPopup]);

  return (
    <div className="relative inline-block">
      <Link
        href="#"
        onClick={handleClick}
        className="text-black"
      >
        Contact us
      </Link>

      {showPopup && (
        <div
          className={`absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-lg border p-3 z-50 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
         <div className="flex items-center gap-2">
  <span className="text-sm font-medium text-gray-800 truncate max-w-[150px]">
    {email}
  </span>
  <button
  onClick={handleCopy}
  className="ml-2 px-2 py-1 text-sm text-red-400"
>
  {copied ? "Copied!" : "Copy"}
</button>

</div>


        </div>
      )}
    </div>
  );
}
