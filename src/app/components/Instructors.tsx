import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background";

const instructors = [
    {
      id: 1,
      name: "Ashfaq Attari",
      designation: "Mubaligh",
      image:
        "/instructors/ashfaq.jfif",
    },
    {
      id: 2,
      name: "Hafiz Tahir Qadri",
      designation: "Naat",
      image:
        "/instructors/tahirQadri.jfif",
    },
    {
      id: 3,
      name: "Ateeq Qadri",
      designation: "Qiraat",
      image:
        "/instructors/atiq.jpg",
    },
    // {
    //   id: 4,
    //   name: "Emily Davis",
    //   designation: "UX Designer",
    //   image:
    //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    // },
    {
      id: 5,
      name: "Allama Nisar ALi Ujagar",
      designation: "Naat Writer",
      image:
        "/instructors/nisarAli.jfif",
    },
    // {
    //   id: 6,
    //   name: "Dora",
    //   designation: "The Explorer",
    //   image:
    //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    // },
  ];

function Instructors() {
  return (
    <div className=" relative h-[37.5rem] overflow-hidden flex justify-center items-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white text-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide you throughout your learning journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
        </div>
  )
}

export default Instructors