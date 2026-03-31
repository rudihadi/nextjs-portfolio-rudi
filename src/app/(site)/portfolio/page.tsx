import React from "react";
import Portfolio from "@/components/portfolio/PortfolioList";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portfolio | Rudi Hadi",
};

const PortfolioList = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
  ];
  return (
    <>
      <section className="text-center md:py-24 py-16 dark:bg-darkmode">
        <div className="flex justify-end px-6">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <h2 className="dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text">
          My Projects
        </h2>
      </section>

      <Portfolio />
    </>
  );
};

export default PortfolioList;
