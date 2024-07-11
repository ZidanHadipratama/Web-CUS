"use client";
import Typography from "@/sandbox/Typography";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";

const Landing = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="relative h-[640px] w-full">
        <Image
          src={"/images/catalog/landing/bg.jpg"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-[-1] min-[500px]:hidden"
        />
        <Image
          src={"/images/catalog/landing/bg.jpg"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-[-1] hidden min-[500px]:inline"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full px-10 sm:pl-20 md:pl-28 lg:pl-36 xl:pl-44 2xl:pl-[16%]"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <Typography
              className={
                "mb-6 text-[48px] font-bold leading-none text-white sm:w-[600px] lg:text-[64px]"
              }
            >
              Our Product
            </Typography>
            <Typography
              className={"text-[20px] font-medium text-white xl:text-[22px]"}
            >
              Your trusted partner in innovative plastic packaging and mold
              design
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
