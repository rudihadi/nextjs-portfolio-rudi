import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Timeline from "@/components/timeline/timeline";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Rudi Hadi",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];
  return (
    <>
      <section className="text-center md:py-24 py-16 dark:bg-darkmode">
        <div className="flex justify-end px-6">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <h2 className="dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text">
          About Me
        </h2>
        <p className="md:text-xl text-lg text-grey dark:text-white/70 font-normal max-w-45 w-full mx-auto my-7.5 sm:px-0 px-4 mb-2">
          Hai, saya Rudi!👋🏼
        </p>
        <p className="md:text-xl text-lg text-grey dark:text-white/70 font-normal max-w-45 w-full mx-auto my-7.5 sm:px-0 px-4 mt-2">
          Saya adalah seorang Staff IT yang berbasis di Medan, Indonesia, dengan
          pengalaman di bidang teknologi informasi sejak tahun 2018. Saya
          memulai karier sebagai IT Support pada tahun 2018 hingga 2023,
          kemudian beralih menjadi Junior Programmer sejak tahun 2023. Saat ini,
          saya terus mengembangkan kemampuan dan memperdalam keahlian di bidang
          pemrograman.
        </p>
      </section>

      <section className="bg-section dark:bg-darklight" id="services">
        <div className="container mx-auto max-w-6xl lg:px-32 px-6">
          <Timeline />
        </div>
      </section>
    </>
  );
};

export default page;
