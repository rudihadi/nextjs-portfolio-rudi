import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact | Rudi Hadi",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="text-center md:pt-24 md:pb-36 pt-16 pb-64 dark:bg-darkmode">
        <div className="flex justify-end px-6">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <h2 className="dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text">
          Contact Me
        </h2>
        <div className="flex justify-center">
          <div className="flex items-center px-6 lg:min-w-1/3">
            <div className="py-2 px-12">
              <Link
                href="https://www.instagram.com/rudihadi95?igsh=MXV3M2xrd3NvbWoz"
                target="_blank"
                className="hover:text-primary text-2xl"
              >
                <div className="flex items-center">
                  <div className="py-2 mr-2">
                    <FaInstagram />
                  </div>
                  <div className="py-2">@rudihadi95</div>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/rudi-hadi-syahfitrah-51328a231/"
                target="_blank"
                className="hover:text-primary text-2xl"
              >
                <div className="flex items-center">
                  <div className="py-2 mr-2">
                    <FaLinkedin />
                  </div>
                  <div className="py-2">Rudi Hadi Syahfitrah</div>
                </div>
              </Link>
              <Link href="#" className="hover:text-primary text-2xl">
                <div className="flex items-center">
                  <div className="py-2 mr-2">
                    <SiGmail />
                  </div>
                  <div className="py-2">rudihadi5395@gmail.com</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
