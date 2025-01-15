"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1Element = h1Ref.current;

    if (h1Element) {
      gsap.to(h1Element, {
        xPercent: -5, // Move the element to the left based on scroll
        ease: "none", // Ensure consistent scrolling
        scrollTrigger: {
          trigger: h1Element,
          start: "top bottom", // Start when the element enters the viewport
          end: "bottom top", // End when the element leaves the viewport
          scrub: true, // Link the animation to the scroll progress
        },
      });
    }
  }, []);
  return (
    <Link href="/portofolio">
      <h1
        ref={h1Ref}
        className="inline-block text-secondary text-9xl font-bold uppercase"
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        {text}&nbsp;&nbsp;|&nbsp;&nbsp;{text}&nbsp;&nbsp;|&nbsp;&nbsp;{text}
      </h1>
    </Link>
  );
}
