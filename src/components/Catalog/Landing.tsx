"use client";
import Typography from "@/sandbox/Typography";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";

const Landing = ({ className }: { className: string }) => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div
        className={`${className} flex h-[90vh] flex-col items-center justify-center bg-catalog-landing bg-cover bg-no-repeat text-center text-[#fff] md:items-start md:text-left`}
      >
        <div data-aos="fade-up" data-aos-duration={1500} className="space-y-4">
          <Typography
            variant="h1"
            weight="bold"
            className="text-[36px] leading-[2.5rem] md:text-[72px] md:leading-[4.5rem]"
          >
            Our Product
          </Typography>
          <Typography
            variant="bm"
            className="text-[14px] leading-[1.25rem] md:text-[20px] md:leading-[1.75rem]"
          >
            Your trusted partner in innovative plastic packaging and mold design
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Landing;
