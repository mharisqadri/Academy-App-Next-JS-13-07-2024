"use client";
import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-full w-full sm:min-h-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl mt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        We&apos;re here to help you with any questions regarding admissions, curriculum, or general information about Haris Qadri Islamic Academy
        </p>
        <input
          type="text"
          placeholder="Your Name"
          className="rounded-md border text-white border-neutral-400 focus:ring-2 focus:ring-teal-500 w-[600px] p-3 h-10 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-600"
        />
        <input
          type="text"
          placeholder="Your email address"
          className="rounded-md border text-white border-neutral-400 focus:ring-2 focus:ring-teal-500 w-[600px] p-3 h-10 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-600"
        />
        <textarea className="rounded-md border border-neutral-400 focus:ring-2 focus:ring-teal-500  w-[600px] p-3 relative z-10 mt-5 h-[200px] text-white bg-neutral-950 placeholder:text-neutral-600
        "placeholder="Your Message">
          </textarea>
      </div>
      <button className="bg-teal-600 text-white h-10 w-30 text-center px-6 rounded">
        Send Message
      </button>      
      <BackgroundBeams />
    </div>
  );
}