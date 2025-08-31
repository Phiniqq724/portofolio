import React from "react";
import Header from "@/components/dashboard/Headers";
import AboutMe from "@/components/dashboard/About";
import Portofolio from "@/components/dashboard/Portofolio";

export default function page() {
  return (
    <>
      <Header />
      <AboutMe />
      <Portofolio />
    </>
  );
}
