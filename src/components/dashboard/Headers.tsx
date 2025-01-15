"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  useEffect(() => {
    gsap.fromTo(
      "#texts span",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#texts",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none pause",
        },
      }
    );
  }, []);
  return (
    <section className="flex justify-center items-center text-white h-full ">
      <div className="flex flex-col gap-4">
        <h2 className="text-center " id="texts">
          Frontend Enthusiast & IoT Engineer
        </h2>
        <div
          className="text-center uppercase font-bold text-9xl max-w-4xl"
          id="texts"
        >
          <span className="relative duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500">
            Creating
          </span>{" "}
          <span className="relative duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:after:origin-right after:transition-transform after:duration-500">
            innovation
          </span>{" "}
          <span className="relative duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500">
            for the
          </span>{" "}
          <span className="relative duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 hover:after:origin-right after:transition-transform after:duration-500">
            future
          </span>
        </div>
      </div>
    </section>
  );
}
