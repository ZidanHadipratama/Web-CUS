import Typography from "@/sandbox/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";

export default function ServiceSection() {
  return (
    <div className="relative flex h-full w-full flex-col gap-6 bg-[#FFEADB] py-10 pb-[20px] lg:bg-gradient-to-b lg:from-[#FFEADB] lg:to-[#FD700D]">
      <div>
        <img
          src="/images/service/vector.png"
          alt="vektor"
          width={390}
          height={360}
          className="absolute -bottom-28 h-[360px] w-full lg:hidden"
        />
        <img
          src="/images/service/vector-deskk.png"
          alt="vektor"
          width={1636}
          height={139}
          className="absolute -bottom-28 hidden h-[140px] w-full lg:-bottom-24 lg:inline"
        />
      </div>
      <div className="px-7 sm:px-20 md:px-24 2xl:px-[12%]">
        <Typography className="text-center text-[36px] font-bold uppercase sm:text-[40px]">
          Services
        </Typography>
        <Typography className="font-regular text-center text-[18px] sm:text-[22px]">
          Modern solutions to handle your packaging!
        </Typography>
      </div>
      <div className="z-[10] flex flex-wrap justify-center gap-7 px-7 sm:mt-10 sm:px-20 md:px-24 2xl:px-[12%]">
        <div className="flex h-[350px] w-[340px] flex-col justify-between rounded-2xl bg-white p-7 shadow-lg">
          <img
            src="/images/service/mold.png"
            alt="Packaging Technology"
            width={140}
            height={94}
          />
          <Typography className="mt-3 text-[24px] font-semibold text-center">
            Packaging Technology
          </Typography>
          <Typography className="mt-2 text-[18px] font-normal text-[#919191]">
            Will support your need in rigid packaging.
          </Typography>
        </div>
        <div className="flex h-[350px] w-[340px] flex-col items-center justify-between rounded-2xl bg-white p-7 shadow-lg">
          <img
            src="/images/service/mold.png"
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
      </div>
      <div className="flex justify-center">
        <Link href="/service">
          <Button className="group mt-12 h-[50px] w-[220px] rounded-md bg-white shadow-md hover:bg-[#FD710F] active:bg-[#be540a]">
            <Typography className="text-[18px] font-bold text-[#FD710F] group-hover:text-white">
              Our Service
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
}
