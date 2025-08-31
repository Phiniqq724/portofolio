import React, { useEffect } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface PrevProps {
  image: StaticImport;
  title?: string;
  description?: string;
  status?: "ONGOING" | "DONE";
  left?: boolean;
  index?: number; // Added for unique ID
}

export default function PrevProject({
  image,
  title,
  description,
  status,
  left,
  index,
}: PrevProps) {
  useEffect(() => {
    const element = document.querySelector(`.prevProject-${index}`);
    const imageElement = document.querySelector(`.image-${index}`);

    // Animation for the text container
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play resume pause resume",
          },
        }
      );
    }

    // Zoom effect for the image
    if (imageElement) {
      gsap.fromTo(
        imageElement,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: imageElement,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            toggleActions: "play resume pause resume",
          },
        }
      );
    }
  }, [index]);

  const done = status === "DONE";

  return (
    <section
      className={`flex my-12 items-center justify-evenly mx-32 ${
        left ? "flex-row-reverse" : "flex-row"
      } prevProject-${index}`}
    >
      <div className="w-full h-full"></div>
      <div className="w-full h-full flex flex-col justify-center gap-4">
        <Image
          src={image}
          alt="Project"
          className={`rounded-xl image-${index} outline outline-secondary outline-1`}
          width={1500}
          height={850}
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <h1 className="text-3xl text-secondary uppercase font-bold">
              {title}
            </h1>
            <div
              className={`p-2 rounded-full font-bold ${
                done
                  ? "bg-secondary border-primary border text-primary drop-shadow-primary-c"
                  : "bg-primary border-secondary border text-secondary drop-shadow-secondary-c"
              }`}
              onMouseMove={(e) => {
                const button = e.currentTarget;
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                button.style.transition = "transform 0.1s ease-out";
                button.style.transform = `translate(${x * 0.5}px, ${
                  y * 0.5
                }px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              {status}
            </div>
          </div>
          <p className="text-secondary text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
}
