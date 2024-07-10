import Typography from "@/sandbox/Typography";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <div className="relative mt-[200px]">
      <Image
        src={"/images/cta/vector.png"}
        alt="vector"
        width={390}
        height={500}
        // className='sm:w-[640px] w-[390px] h-[500px] md:w-[768px] lg:hidden'
        className="h-[500px] w-full lg:hidden"
      />
      <Image
        src={"/images/cta/vector-desk.png"}
        alt="vector"
        width={1536}
        height={735}
        // className=' lg:w-[1024px] w-[600px] lg:h-[500px] lg:inline hidden'
        className="hidden h-[500px] w-full lg:inline"
      />
      <div className="absolute top-1/3 w-full px-10">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Typography
            className="text-center text-[26px] font-bold lg:w-[600px] lg:text-[32px] lg:font-medium"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1500}
          >
            Ready to secure your packaging Today?
          </Typography>
          <Link
            href="https://wa.me/+62821-2361-1660"
            data-aos="fade-up"
            data-aos-delay={400}
            data-aos-duration={1500}
          >
            <Button className="group mt-12 h-[50px] w-[220px] rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
              <Typography className="text-[16px] font-bold text-white">
                Contact Us!
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={"/images/cta/vector-bunga-desk.png"}
          alt="vector"
          width={150}
          height={150}
          className="absolute bottom-0 left-0 h-[120px] w-[120px] sm:h-[150px] sm:w-[150px]"
        />
      </div>
    </div>
  );
}
