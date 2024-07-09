"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import Typography from "@/sandbox/Typography";
import Link from "next/link";
import { Button } from "@mui/material";

export default function LandingPage() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative h-[640px] w-full">
        <Image
          src={"/images/upLanding/hero-mobile.png"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-[-1] min-[500px]:hidden"
        />
        <Image
          src={"/images/upLanding/hero.png"}
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
              Our Company
            </Typography>
            <Typography
              className={"text-[20px] font-medium text-white xl:text-[22px]"}
            >
              Your Highid Packaging Partners!
            </Typography>
          </div>
        </div>
      </div>

      <div className="px-9 py-10 sm:px-16 md:px-24 xl:px-44 2xl:px-[16%]">
        <div data-aos="fade-up" data-aos-duration={1500}>
          <Typography className="text-[20px] font-bold uppercase sm:text-[28px]">
            About Our Company
          </Typography>
          <div className="h-[4px] w-[60px] rounded-xl bg-[#5A2705] sm:h-[6px] sm:w-[200px]"></div>
        </div>
        <Typography
          className="py-4 text-justify text-[16px] font-normal text-gray-600 sm:text-[18px] lg:pt-8 xl:text-[18px]"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={1500}
        >
          PT . CATUR UTAMA SEJAHTERA is located in Tangerang Indonesia. Our
          company is engaged as a rigid plastic manufacturer. We also a mold
          consultan of many rigid plastic packaging and have good cooperation
          and experience with many reputable mold maker in China and Korea. We
          aim to be the most trustworthy partner to all our customer by
          providing them with the latest innovation in plastic packaging and
          mold design
        </Typography>
      </div>

      <div className="flex h-full w-full bg-[#FFEADB] px-6 py-10 sm:px-16 md:px-24 xl:px-40 2xl:px-[12%]">
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[10px] bg-[#ca5a0a] px-6 pb-[450px] pt-20 sm:rounded-[20px] sm:pb-[650px] lg:items-start lg:px-16 lg:pb-20 xl:px-20">
          <div className="absolute left-0 top-0 h-[120px] w-[108px] rounded-br-[40px] rounded-tl-[10px] bg-[#fd700d] lg:h-[208px] lg:w-[186px]"></div>
          <Typography
            className="text-[42px] font-bold text-white sm:text-[52px] lg:z-[101] lg:text-[48px] xl:text-[52px]"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            VISI
          </Typography>
          <Typography
            className="text-center text-[16px] font-normal text-white sm:text-[20px] lg:z-[101] lg:w-[400px] lg:text-left lg:text-[18px] xl:w-[700px] xl:text-[18px]"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1500}
          >
            1. Prioritize quality, service, employees safety and security
            products for customer satisfaction <br />
            2. Hardworking creating opportunities and growth to be the best
            company <br />
            3. To become the place for high achiever employees with great
            passion for their personal development <br />
            4. To become the reliable and trusted business partner
          </Typography>
          <Typography
            className="mt-10 text-[42px] font-bold text-white sm:text-[52px] lg:text-[48px] xl:text-[52px]"
            data-aos="fade-up"
            data-aos-delay={300}
            data-aos-duration={1500}
          >
            MISI
          </Typography>
          <Typography
            className="z-[101] text-center text-[16px] font-normal text-white sm:text-[20px] lg:w-[400px] lg:text-left lg:text-[18px] xl:w-[600px] xl:text-[18px]"
            data-aos="fade-up"
            data-aos-delay={400}
            data-aos-duration={1500}
          >
            1. Hardworking creating opportunities and growth to be the best
            company <br />
            2. Prioritize quality, service, employees safety and security
            products for customer satisfaction <br />
            3. To become the reliable and trusted business partner <br />
            4. To become the place for high achiever employees with great
            passion for their personal development
          </Typography>
          <div className="absolute bottom-0 z-[99] lg:right-0">
            <Image
              src={"/images/vimi/vimi.png"}
              alt="Visi Misi"
              width={350}
              height={403}
              className="h-[400px] w-[640px] sm:h-[600px] sm:w-[640px] lg:hidden"
            />
            <Image
              src={"/images/vimi/vimi-desk.png"}
              alt="Visi Misi"
              width={364}
              height={445}
              className="hidden w-[364px] lg:inline xl:w-[440px]"
            />
          </div>
          <div className="absolute bottom-0 right-80 hidden h-[120px] w-[108px] rounded-tl-[40px] bg-[#fd700d] lg:inline lg:h-[201px] lg:w-[247px]"></div>
        </div>
      </div>

      <div className="relative flex h-full w-full flex-col gap-6 bg-[#FFEADB] py-10 pb-[20px] lg:bg-gradient-to-b lg:from-[#FFEADB] lg:to-[#FD700D]">
        <div>
          <Image
            src={"/images/service/vector.png"}
            alt="vektor"
            width={390}
            height={360}
            className="absolute -bottom-28 h-[360px] w-full lg:hidden"
          />
          <Image
            src={"/images/service/vector-deskk.png"}
            alt="vektor"
            width={1636}
            height={139}
            className="absolute -bottom-28 hidden h-[140px] w-full lg:-bottom-24 lg:inline"
          />
        </div>
        <div
          className="px-7 sm:px-20 md:px-24 2xl:px-[12%]"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <Typography className="text-center text-[36px] font-bold uppercase sm:text-[40px]">
            Services
          </Typography>
          <Typography className="font-regular text-center text-[18px] sm:text-[22px]">
            Modern solutions to handle your packaging!
          </Typography>
        </div>
        <div className="z-[10] flex flex-wrap justify-center gap-7 px-7 sm:mt-10 sm:px-20 md:px-24 2xl:px-[12%]">
          <div
            className="flex h-[350px] w-[340px] flex-col justify-between rounded-2xl bg-white p-7 shadow-lg"
            data-aos="flip-up"
            data-aos-delay={200}
            data-aos-duration={1500}
          >
            <Image
              src={"/images/service/packaging.png"}
              alt="Packaging Technology"
              width={160}
              height={100}
            />
            <Typography className="mt-3 text-[24px] font-semibold">
              Packaging Technology
            </Typography>
            <Typography className="mt-2 text-[18px] font-normal text-[#919191]">
              Will support your need in rigid packaging.
            </Typography>
          </div>
          <div
            className="flex h-[350px] w-[340px] flex-col items-center justify-between rounded-2xl bg-white p-7 shadow-lg"
            data-aos="flip-down"
            data-aos-delay={400}
            data-aos-duration={1500}
          >
            <Image
              src={"/images/service/mold.png"}
              alt="Mold Service"
              width={140}
              height={94}
            />
            <Typography className="mt-3 text-[24px] font-semibold">
              Mold Service
            </Typography>
            <Typography className="mt-2 text-center text-[18px] font-normal text-[#919191]">
              Can be your packaging partner.
            </Typography>
          </div>
          <div
            className="flex h-[350px] w-[340px] flex-col items-end justify-between rounded-2xl bg-white p-7 shadow-lg"
            data-aos="flip-up"
            data-aos-delay={600}
            data-aos-duration={1500}
          >
            <Image
              src={"/images/service/kisan.png"}
              alt="Kisan in Pet Mold"
              width={125}
              height={104}
            />
            <Typography className="mt-3 text-end text-[24px] font-semibold">
              Kisan in Pet Mold
            </Typography>
            <Typography className="mt-2 text-end text-[18px] font-normal text-[#919191]">
              Kisan started with only a machinery tool workshop producing PET
              molds for local customers
            </Typography>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/service" data-aos="fade-up" data-aos-duration={1500}>
            <Button className="group mt-12 h-[50px] w-[220px] rounded-md bg-white shadow-md hover:bg-[#FD710F] active:bg-[#be540a]">
              <Typography className="text-[18px] font-bold text-[#FD710F] group-hover:text-white">
                Our Service
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
