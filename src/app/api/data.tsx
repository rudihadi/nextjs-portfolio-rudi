import { getImgPath } from "@/utils/image";

export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  //   { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  //   { name: "Testimonials", href: "#testimonials" },
  //   { name: "Blog", href: "/#blog" },
];

export const count = [
  {
    icon: getImgPath("/images/counter/star.svg"),
    value: "4.86",
    description: "Out of 5 stars from 3896 reviews on Google platform",
  },
  {
    icon: getImgPath("/images/counter/admin.svg"),
    value: "364",
    description: "Client testimonials received in the year 2021",
  },
  {
    icon: getImgPath("/images/counter/bag.svg"),
    value: "45M+",
    description: "Revenue generated through new projects & marketing",
  },
];

export const Progress = [
  { title: "UX Research and Testing", Progress: 95 },
  { title: "Product Management", Progress: 84 },
  { title: "UI & Visual Design", Progress: 90 },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "IT Support",
    description:
      "Saya memulai karir saya sebagai IT Support di sebuah perusahaan swasta pada tahun 2018",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "Junior Programmer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "Hobi Soccer & Badminton",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Itsmebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "IT Support",
    description:
      "Karier profesional saya dimulai sebagai IT Support di sebuah perusahaan swasta pada tahun 2018.",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "Junior Programmer",
    description:
      "Pada tahun 2023, saya memulai babak baru dalam karier profesional saya dengan bergabung di perusahaan swasta yang bergerak di bidang ekspor furnitur.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "Staff IT",
    description:
      "Saat ini, saya menjabat sebagai Staff IT di perusahaan swasta yang bergerak di industri furnitur, serta tengah mengembangkan aplikasi web untuk mendukung kebutuhan operasional internal (in-house).",
  },
];

export const portfolioinfo = [
  {
    image: getImgPath("/images/projects/ttiexport.jpg"),
    image2: getImgPath("/images/projects/ttiexport-2.jpg"),
    image3: getImgPath("/images/projects/ttiexport-3.jpg"),
    id: "1",
    alt: "TTI Export",
    title: "TTI Export",
    description: "TTI Export",
    slug: "TTI Export",
    info: "Codeigniter 3 | Bootstrap V5 | Ajax",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/projects/sip-1.jpg"),
    image2: getImgPath("/images/projects/sip-2.jpg"),
    image3: getImgPath("/images/projects/sip-3.jpg"),
    id: "2",
    alt: "STI Integrated Portal",
    title: "STI Integrated Portal",
    description: "STI Integrated Portal",
    slug: "STI Integrated Portal",
    info: "Codeigniter 3 | Bootstrap V4",
    Class: "md:mt-6",
  },
  {
    image: getImgPath("/images/projects/progress-1.jpg"),
    image2: getImgPath("/images/projects/progress-2.jpg"),
    image3: getImgPath("/images/projects/progress-3.jpg"),
    id: "3",
    alt: "Progress Monitoring",
    title: "Progress Monitoring",
    description: "Progress Monitoring",
    slug: "Progress Monitoring",
    info: "Codeigniter 3 | Bootstrap V4",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/projects/itassets-1.jpg"),
    image2: getImgPath("/images/projects/itassets-2.jpg"),
    image3: getImgPath("/images/projects/itassets-3.jpg"),
    id: "4",
    alt: "IT Assets",
    title: "IT Assets",
    description: "IT Assets",
    slug: "IT Assets",
    info: "Codeigniter 3 | Bootstrap V4",
    Class: "md:mt-6",
  },
  {
    image: getImgPath("/images/projects/certificate-2.jpg"),
    image2: getImgPath("/images/projects/certificate-1.jpg"),
    image3: getImgPath("/images/projects/certificate-3.jpg"),
    id: "5",
    alt: "Certificate STI",
    title: "Certificate STI",
    description: "Certificate STI",
    slug: "Certificate STI",
    info: "ReactJS | Bootstrap V5",
    Class: "md:mt-0",
  },
  {
    image: getImgPath("/images/projects/tpm-1.jpg"),
    image2: getImgPath("/images/projects/tpm-2.jpg"),
    image3: getImgPath("/images/projects/tpm-3.jpg"),
    id: "6",
    alt: "Total Productive Maintenance",
    title: "Total Productive Maintenance",
    description: "Total Productive Maintenance",
    slug: "Total Productive Maintenance",
    info: "Codeigniter 3 | Bootstrap V4",
    Class: "md:mt-0",
  },
  //   {
  //     image: getImgPath("/images/projects/tpm-1.jpg"),
  //     alt: "Portfolio",
  //     title: "InnovateX Ventures",
  //     slug: "innovate-x-ventures",
  //     info: "Designation",
  //     Class: "md:mt-24",
  //   },
  //   {
  //     image: getImgPath("/images/projects/tpm-1.jpg"),
  //     alt: "Portfolio",
  //     title: "Nebula Holdings",
  //     slug: "nebula-holdings",
  //     info: "Designation",
  //     Class: "md:mt-0",
  //   },
  //   {
  //     image: getImgPath("/images/projects/tpm-1.jpg"),
  //     alt: "Portfolio",
  //     title: "Summit Partners",
  //     slug: "summit-partners",
  //     info: "Designation",
  //     Class: "md:mt-24",
  //   },
  //   {
  //     image: getImgPath("/images/projects/tpm-1.jpg"),
  //     alt: "Portfolio",
  //     title: "Apex Strategies",
  //     slug: "apex-strategies",
  //     info: "Designation",
  //     Class: "md:mt-0",
  //   },
];
