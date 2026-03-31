import React, { FC } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Image from "next/image";
// import { getImgPath } from "@/utils/image";

const Footer: FC = () => {
  return (
    <footer className="bg-darkmode relative z-1 border-t border-dark_border px-6">
      <div className="text-center gap-2 md:gap-0 flex-wrap p-4 border-t border-solid border-dark_border">
        <div>
          <ul className="flex justify-center items-center sm:gap-7 gap-3">
            <li className="text-base text-white/50">
              <Link
                href="https://github.com/rudihadi"
                target="_blank"
                className="hover:text-primary"
              >
                <div className="flex items-center">
                  <div className="py-4 mr-2">
                    <FaGithub />
                  </div>
                  <div className="py-4">Github</div>
                </div>
              </Link>
            </li>
            <li className="text-base text-white/50">
              <Link
                href="https://www.linkedin.com/in/rudi-hadi-syahfitrah-51328a231/"
                target="_blank"
                className="hover:text-primary"
              >
                <div className="flex items-center">
                  <div className="py-4 mr-2">
                    <FaLinkedin />
                  </div>
                  <div className="py-4">LinkedIn</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-base text-white/50">Rudi Hadi © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
