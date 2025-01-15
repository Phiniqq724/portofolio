"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { LinkButton } from "../Buttons";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  useEffect(() => {
    const sparkle = document.querySelector("#sparkle");
    const texts = document.querySelector("#text");

    gsap.to(sparkle, {
      rotation: 360,
      duration: 2,
      transformOrigin: "center center",
      ease: "power1.inOut",
      y: 75,
      scrollTrigger: {
        trigger: sparkle,
        start: "20px 80%",
        end: "bottom 100px",
        toggleActions: "restart resume reverse resume",
      },
    });
    gsap.fromTo(
      texts,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: texts,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart resume pause resume",
        },
      }
    );
  }, []);
  return (
    <section className="h-full w-full flex flex-col items-center justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100"
        height="100"
        viewBox="-5.0 -10.0 110.0 125.0"
        id="sparkle"
      >
        <path
          d="m48.027 26.309c0.5-1.7852 3.0352-1.7852 3.5312 0l3.6562 13.059c0.69141 2.4648 2.6133 4.3906 5.0742 5.0859l13.035 3.668c1.7812 0.50391 1.7812 3.0273 0 3.5312l-13.035 3.668c-2.4609 0.69531-4.3828 2.6211-5.0742 5.082l-3.6562 13.062c-0.49609 1.7852-3.0312 1.7852-3.5312 0l-3.6523-13.062c-0.69141-2.4609-2.6133-4.3867-5.0742-5.082l-13.035-3.668c-1.7812-0.50391-1.7812-3.0273 0-3.5312l13.035-3.668c2.4609-0.69531 4.3828-2.6211 5.0742-5.0859z"
          fill="#FFFFFF"
        />
      </svg>
      <div
        className="w-full h-full flex justify-evenly text-secondary items-center "
        id="text"
      >
        <p className="text-start max-w-96 text-xl border border-r-2 border-secondary border-l-0 border-t-0 border-b-0 pr-8">
          Hi, I am Fahrell Sandy, a Frontend Enthusiast and IoT Engineer. I am
          passionate about creating innovative solutions for the future. I love
          to learn new things and share my knowledge with others.
        </p>
        <div
          className="outline-dashed hover:outline-offset-4 outline-4 ease-in-out outline-secondary rounded-full p-8 "
          onMouseMove={(e) => {
            const button = e.currentTarget;
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transition = "transform 0.1s ease-out";
            button.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
          }}
        >
          <LinkButton variant="primary" link="/about">
            Explore More !
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
