

import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import Instructors from "./components/Instructors";
import InfiniteMovingCardsDemo from "./components/testimonial-cards";



export default function Home(){
    return (
        <>
        <main className="min-h-screen text-white bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCourses />
        <InfiniteMovingCardsDemo />
        <Instructors />
        </main>
        </>
    );
}