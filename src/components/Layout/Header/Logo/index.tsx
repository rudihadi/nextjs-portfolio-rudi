// import { getImgPath } from "@/utils/image";
// import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      {/* <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        quality={100}
        className="dark:hidden"
      />
      <Image
        src={getImgPath("/images/logo/logo-white.svg")}
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        quality={100}
        className="dark:block hidden"
      /> */}
      <span>
        <h1 className="text-midnight_text font-bold dark:text-white text-xl  md:text-2xl md:leading-[1.15]">
          RUDI HADI
        </h1>
      </span>
    </Link>
  );
};

export default Logo;
