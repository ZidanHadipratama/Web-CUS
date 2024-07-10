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
        className={`${className} flex h-[90vh] flex-col items-center justify-center bg-catalog-landing bg-cover bg-center bg-no-repeat text-[#fff] sm:h-[700px] sm:bg-left md:items-start lg:h-[90vh]`}
      >
        <div data-aos="fade-up" data-aos-duration={1500} className="space-y-4">
          <Typography variant="h1" weight="bold" className="text-5xl">
            Our Product
          </Typography>
          <Typography variant="bm" className="text-[18px]">
            Your trusted partner in innovative plastic packaging and mold design
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Landing;
