"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!formData.email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full relative bg-gradient-to-br bg-[#FBF1E5] min-h-screen overflow-x-hidden">
      <NavBar />
      <Head>
        <title>Macaron AI – Personal Assistant</title>
        <meta name="description" content="Macaron AI is your personal agent..." />
      </Head>

      {/* ✅ Center wrapper */}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#FBF1E5] px-4 -translate-y-10 mt-20">

        {/* Decorations */}
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

        {/* Image above the form */}
        <div className="flex justify-center mb-6 z-10 relative">
          <Image
            src="/assets/image/macaron-logo.png"
            alt="Contact Illustration"
            width={200}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Contact Form */}
        <div className="relative z-10 bg-[#FDD3CB] shadow-lg rounded-xl p-10 w-full max-w-md md:max-w-xl lg:max-w-2xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-gray-600 text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-lg text-black"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-600 text-lg">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-lg text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-600 text-lg">Message</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 text-lg text-black"
                placeholder="Write your message"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative flex items-center justify-center w-[237px] md:w-[237px] h-[60px] transition-all duration-200 ease-in-out transform cursor-pointer hover:scale-105 active:scale-95 mx-auto rounded-full"
            >
              {/* Background Image */}
              <Image
                src="/assets/image/wait-button-1.png"
                width={237}
                height={60}
                alt="Submit button background"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
              {/* Text */}
              <span className="relative z-10 text-[18px] md:text-[20px] font-semibold text-white">
                {loading ? "Sending..." : "Submit"}
              </span>
            </button>

            {success && (
              <p className="text-green-600 font-semibold text-center mt-4 text-lg">
                ✅ Your message has been sent!
              </p>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
