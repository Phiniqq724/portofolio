"use client";
import React from "react";
import Marquee from "../Marquee";
import PrevProject, { PrevProps } from "../PrevProject";
import ecotrack from "@/../public/portofolio/ecotrack-mockup.png";
import pilketos from "@/../public/portofolio/pilketos-mockup.png";
import jamscare from "@/../public/portofolio/jamscare-mockup.png";
import smartaca from "@/../public/portofolio/smartaca-mockup.png";
import { LinkButton } from "../Buttons";

export default function Portofolio() {
  const projects: PrevProps[] = [
    {
      image: pilketos,
      title: "Pilketos Web",
      status: "DONE",
      description: "As Frontend Developer",
      left: true,
    },
    {
      image: ecotrack,
      title: "Eco-Track",
      status: "ONGOING",
      description: "As IoT Engineer",
      left: false,
    },
    {
      image: jamscare,
      title: "Jamscare",
      status: "ONGOING",
      description: "As IoT Engineer + Software Engineer",
      left: true,
    },
    {
      image: smartaca,
      title: "Smartaca",
      status: "DONE",
      description: "As IoT Engineer",
      left: false,
    },
  ];
  return (
    <section className="w-full overflow-hidden relative ">
      <div className="w-full whitespace-nowrap ">
        <Marquee text="Portofolio" />
        {projects.map((project, index) => (
          <PrevProject key={index} index={index} {...project} />
        ))}
        <div className="w-full flex justify-center mb-12  ">
          <LinkButton variant="primary" link="/portofolio">
            View All Projects 🔥
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
