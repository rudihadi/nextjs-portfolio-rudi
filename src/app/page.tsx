import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Itsme from "@/components/Home/Itsme";
import Portfolio from "@/components/SharedComponent/portfollio";
// import Counter from "@/components/Home/Counter";
// import Progresswork from "@/components/Home/WorkProgress";
// import Testimonial from "@/components/SharedComponent/Testimonial";
// import Blog from "@/components/SharedComponent/Blog";
// import Contactform from "@/components/Home/Contact";
export const metadata: Metadata = {
  title: "Home | Rudi Hadi",
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Counter isColorMode={false} /> */}
      {/* <Progresswork isColorMode={false} /> */}
      <Itsme />
      <Portfolio />
      {/* <Testimonial /> */}
      {/* <Blog /> */}
      {/* <Contactform /> */}
    </main>
  );
}
