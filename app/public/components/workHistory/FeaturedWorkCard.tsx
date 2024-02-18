import { FeaturedWorkCardProps } from "@/app/interfaces/pages/publicPage/FeaturedWorkCardProps";
import React from "react";

export default function FeaturedWorkCard({ work }: FeaturedWorkCardProps) {
  const {
    position,
    company,
    linkedin,
    website,
    start_date,
    end_date,
    company_type,
  } = work;

  return (
    <div className="w-full flex items-end justify-between gap-2 p-4 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800">
      <div>
        <a
          href={linkedin}
          target="_blank"
          className="text-neutral-300 hover:text-white hover:underline cursor-pointer font-semibold"
        >
          {company}
        </a>
        <h2 className="text-neutral-400 font-medium">{position}</h2>
        <h2 className="text-neutral-500 font-normal">
          {start_date} - {end_date}
        </h2>
      </div>
    </div>
  );
}