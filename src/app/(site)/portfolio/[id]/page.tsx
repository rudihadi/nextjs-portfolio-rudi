import { portfolioinfo } from "@/app/api/data";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";
import Carousel from "@/components/Carousel/Carousel";

export const metadata: Metadata = {
  title: "Project | Rudi Hadi",
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = portfolioinfo.find((item) => item.id === String(id));

  if (!project) {
    return <div>Data tidak ditemukan</div>;
  }

  const images = [project.image, project.image2, project.image3].filter(
    Boolean,
  );

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
    { href: `/portfolio/${project.id}`, text: project.title },
  ];

  return (
    <section className="text-center md:py-24 py-16 dark:bg-darkmode">
      <div className="flex justify-end px-6">
        <Breadcrumb links={breadcrumbLinks} />
      </div>

      <h2 className="dark:text-white md:text-[40px] leading-tight text-4xl font-bold text-midnight_text">
        {project.title}
      </h2>

      <Carousel images={images} />

      {/* <p className="md:text-xl text-lg text-grey dark:text-white/70 font-normal max-w-45 w-full mx-auto my-7.5 sm:px-0 px-4 mt-2">
        {project.description}
      </p> */}

      {/* <div className="flex items-center justify-center">
        <div className="">01</div>
      </div> */}
    </section>
  );
}
