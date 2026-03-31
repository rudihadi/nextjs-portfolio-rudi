"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative md:pt-44 pt-28 bg-white  dark:bg-darklight bg-cover text-white">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10">
        <div
          className="md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h1 className="text-midnight_text font-bold dark:text-white text-4xl  md:text-5xl md:leading-[1.15]">
            Hai 👋🏼
          </h1>
          <p className="text-grey dark:text-white/70 text-xl font-semibold">
            Saya adalah seorang Staff IT yang berbasis di Medan, Indonesia,
            dengan pengalaman di bidang teknologi informasi sejak tahun 2018.
            Saya memulai karier sebagai IT Support pada tahun 2018 hingga 2023,
            kemudian beralih menjadi Junior Programmer sejak tahun 2023. Saat
            ini, saya terus mengembangkan kemampuan dan memperdalam keahlian di
            bidang pemrograman.
          </p>
        </div>

        <div className="md:col-span-6 col-span-12 relative">
          <Image
            src={getImgPath("/images/hero/rudi-wv.jpeg")}
            alt="hero-image"
            width={350}
            height={150}
            quality={100}
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
