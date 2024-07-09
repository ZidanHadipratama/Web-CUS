import Typography from "@/sandbox/Typography";
import Image from "next/image";
import React from "react";

export default function VisiMisiSection() {
  return (
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
          1. Prioritize quality, service, employees safety and security products
          for customer satisfaction <br />
          2. Hardworking creating opportunities and growth to be the best
          company <br />
          3. To become the place for high achiever employees with great passion
          for their personal development <br />
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
          2. Prioritize quality, service, employees safety and security products
          for customer satisfaction <br />
          3. To become the reliable and trusted business partner <br />
          4. To become the place for high achiever employees with great passion
          for their personal development
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
  );
}
