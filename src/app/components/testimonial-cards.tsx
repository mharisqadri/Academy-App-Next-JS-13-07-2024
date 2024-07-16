"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; 

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8">
            Hear our Harmony: Voices of <span className=" text-teal-600 font-extrabold tracking-wide">Success</span></h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      
      </div>
            </div>
    </div>
  );
}

const testimonials = [
  {
    "quote": "Haris Qadri Islamic Academy has transformed my understanding of Tajweed. The personalized attention and structured courses have been exceptional.",
    "name": "Ahmed Khan",
    "title": "Student"
  },
  {
    "quote": "The Naat Course at Haris Qadri Islamic Academy helped me refine my recitation skills and boosted my confidence to perform in public.",
    "name": "Ali Farooq",
    "title": "Performer"
  },
  {
    "quote": "As a parent, I am impressed with the comprehensive curriculum and the dedication of the instructors at Haris Qadri Islamic Academy.",
    "name": "Malik Siraj",
    "title": "Parent"
  },
  {
    "quote": "The Hifz program at Haris Qadri Islamic Academy has been a blessing. My child has made tremendous progress thanks to the expert guidance.",
    "name": "Muhammad Aslam",
    "title": "Parent"
  },
  {
    "quote": "I have greatly benefited from the Mubaligh Course. It has equipped me with the necessary skills to effectively deliver sermons and religious guidance.",
    "name": "Bilal Ahmed",
    "title": "Aspiring Mubaligh"
  },
  {
    "quote": "The diverse range of courses offered at Haris Qadri Islamic Academy has deepened my understanding of Islamic teachings and improved my recitation.",
    "name": "Ayan Siddiqui",
    "title": "Student"
  }
]
