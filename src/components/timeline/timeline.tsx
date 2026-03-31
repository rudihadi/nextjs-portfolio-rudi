"use client";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

type TimelineItem = {
  title: string;
  company: string;
  description: string;
  date: string;
};

const data: TimelineItem[] = [
  {
    title: "Staff IT",
    company: "PT. Tanjung Timberindo Industry",
    description:
      "Bertanggung jawab dalam perbaikan dan pemeliharaan perangkat IT (PC, laptop, CCTV, jaringan, dan lainnya), serta pengembangan aplikasi web guna mendukung operasional internal (in-house).",
    date: "Juni 2025 - Sekarang",
  },
  {
    title: "Junior Programmer",
    company: "PT. Sumatera Timber Indo Industry",
    description:
      "Bertanggung jawab dalam pengembangan aplikasi web untuk mendukung operasional internal (in-house), termasuk melakukan bug fixing dan peningkatan fitur pada sistem yang telah berjalan.",
    date: "September 2023 - April 2025",
  },
  {
    title: "IT Support - Technology Infrastructure Engineer (TIE Maybank)",
    company: "PT. Infomedia Nusantara (Penempatan Maybank Medan)",
    description:
      "Bertanggung jawab dalam perbaikan dan pemeliharaan perangkat IT (PC, laptop, CCTV, jaringan, dan lainnya) guna memastikan kelancaran operasional perbankan dengan standar penanganan yang cepat, akurat, dan optimal.",
    date: "Maret 2022 - September 2023",
  },
  {
    title: "IT Support - Desktop Engineer (DE)",
    company: "PT. Astragraphia",
    description:
      "Bertanggung jawab atas instalasi unit baru, perbaikan, serta pemeliharaan perangkat di lokasi pelanggan, seperti Bank Permata, Asuransi Astra, FIF, BPJS Kesehatan, dan institusi lainnya.",
    date: "April 2018 - Desember 2021",
  },
];

export default function Timeline() {
  return (
    <div className="relative border-l border-gray-300 md:ml-4 ml-2">
      {data.map((item, index) => (
        <div key={index} className="mb-8 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-xs">
            {index === 0 ? <FaArrowRight /> : <FaArrowUp />}
          </span>

          <h3 className="text-lg font-semibold">{item.title}</h3>
          <h5 className="text-sm font-semibold">{item.company}</h5>
          <time className="text-sm text-gray-500 dark:text-white/60">
            {item.date}
          </time>
          <p className="text-gray-600 dark:text-white/70">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
