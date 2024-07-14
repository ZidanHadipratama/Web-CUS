"use client";

import SEO from "@/components/SEO";
import Layout from "@/layouts/Layouts";
import Typography from "@/sandbox/Typography";
import { Button } from "@mui/material";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function PageService() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout withNavbar withFooter className="overflow-hidden">
      <SEO title="Our Service" />
      <div className="relative h-[640px] w-full">
        <Image
          src={"/images/service/upSectionMobile.png"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-[-1] min-[500px]:hidden"
        />
        <Image
          src={"/images/service/upSection.png"}
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
                "mb-6 text-[48px] font-bold leading-none text-white sm:w-[400px] lg:text-[64px]"
              }
            >
              Our Service
            </Typography>
            <Typography
              className={"text-[20px] font-medium text-white xl:text-[22px]"}
            >
              We can be your partner to support your product packaging.
            </Typography>
          </div>
        </div>
      </div>

      <div className="relative flex h-full w-full flex-col gap-6 py-10 pb-[20px]">
        <div
          className="px-7 sm:px-20 md:px-24 2xl:px-[12%]"
          data-aos="fade-up"
          data-aos-duration={1500}
        >
          <Typography className="text-center text-[36px] font-bold text-[#fd700d] sm:text-[40px]">
            What Can We
          </Typography>
          <Typography className="text-center text-[36px] font-bold sm:text-[40px]">
            &quot;Do For You?&quot;
          </Typography>
        </div>
        <div className="z-[10] flex flex-wrap justify-center gap-7 px-7 sm:mt-10 sm:px-20 md:px-24 2xl:px-[12%]">
          <div
            className="flex h-[450px] w-[340px] flex-col gap-10 rounded-2xl bg-gradient-to-b from-[#FD700D] to-[#ff9f5a] p-7 shadow-lg items-center"
            data-aos="flip-up"
            data-aos-delay={200}
            data-aos-duration={1500}
          >
            <Image
              src={"/images/service/blow.png"}
              alt="Packaging Technology"
              width={160}
              height={100}
            />
            <Typography className="mt-3 text-[24px] font-semibold text-white">
              Packaging Technology
            </Typography>
            <Typography className="mt-2 text-[18px] font-normal text-[white] text-center">
              Will support your need in rigid packaging.
            </Typography>
            {/* <Link href="https://wa.me/+62821-2361-1660" className="flex w-full">
              <Button className="group mt-12 h-[50px] w-full rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                <Typography className="text-[16px] font-bold text-white">
                  Contact Us!
                </Typography>
              </Button>
            </Link> */}
          </div>
          <div
            className="flex h-[450px] w-[340px] flex-col items-center gap-8 rounded-2xl bg-gradient-to-b from-[#FD700D] to-[#ff9f5a] p-7 shadow-lg"
            data-aos="flip-down"
            data-aos-delay={400}
            data-aos-duration={1500}
          >
            <Image
              src={"/images/service/mold.png"}
              alt="Mold Service"
              width={160}
              height={100}
            />
            <Typography className="mt-3 text-[24px] font-semibold text-white">
              Mold Service
            </Typography>
            <Typography className="mt-2 text-center text-[18px] font-normal text-[white]">
              Can be your packaging partner.
            </Typography>
            {/* <Link href="https://wa.me/+62821-2361-1660" className="flex w-full">
              <Button className="group mt-12 h-[50px] w-full rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                <Typography className="text-[16px] font-bold text-white">
                  Contact Us!
                </Typography>
              </Button>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="pb-20">
        <section className="mt-16 h-full w-full px-10 min-[500px]:px-20 sm:px-[16%] md:px-[20%] lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-10 lg:px-[10%] xl:py-16 min-[1700px]:px-[24%]">
          <div className="min-[500px]:flex min-[500px]:justify-center">
            <Image
              src={"/images/ourService/packaging2.png"}
              alt="packaging"
              width={324}
              height={218}
              className="min-[500px]:w-[420px] lg:hidden"
              data-aos="fade-up"
              data-aos-duration={1500}
            />
            <Image
              src={"/images/ourService/packaging-desk2.png"}
              alt="packaging"
              width={647}
              height={436}
              className="hidden h-[340px] w-[447px] lg:inline xl:h-[436px] xl:w-[547px]"
              data-aos="fade-left"
              data-aos-duration={1500}
            />
          </div>
          <div
            className="lg:flex lg:w-[400px] lg:flex-col xl:w-[550px]"
            data-aos="fade-right"
            data-aos-duration={1500}
          >
            <Typography className="mb-5 mt-10 text-[26px] font-bold xl:text-[36px]">
              <span className="text-[#fd700d]">Packaging</span> Technology
            </Typography>
            <Typography className="mb-3 text-justify lg:text-[18px]">
              PT. CATUR UTAMA SEJAHTERA will support your need in rigid
              packaging. With an updated technology and reliable quality, we can
              be your partner to support your product packaging.
            </Typography>
            <Typography className="text-justify text-[#727272] xl:text-[16px]">
              Injection Molding <br />
              Injection Blow Molding <br />
              Injection Stretch Blow Molding <br />
              Labeling and Shrink Label
            </Typography>
            {/* <div className="flex w-full justify-center lg:justify-start">
              <Link href="https://wa.me/+62821-2361-1660">
                <Button className="group mt-12 h-[50px] w-[220px] rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                  <Typography className="text-[16px] font-bold text-white">
                    Contact Us!
                  </Typography>
                </Button>
              </Link>
            </div> */}
          </div>
        </section>

        <section className="relative mb-16 mt-20 h-full w-full">
          <div className="absolute -top-10">
            <Image
              src={"/images/ourService/vector.png"}
              alt="vektor"
              width={1010}
              height={1010}
              className="h-[1010px] w-[1024px] lg:hidden"
            />
            <Image
              src={"/images/ourService/vector-desk.png"}
              alt="vektor"
              width={1636}
              height={139}
              className="hidden h-[720px] w-[2536px] lg:inline"
            />
          </div>
          <div className="relative z-[101] px-10 min-[500px]:px-20 sm:px-[16%] md:px-[20%] lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-[10%] min-[1700px]:px-[24%]">
            <div className="min-[500px]:flex min-[500px]:justify-center lg:w-[900px] lg:justify-start">
              <Image
                src={"/images/ourService/mold.png"}
                alt="mold"
                width={324}
                height={218}
                className="min-[500px]:w-[380px] lg:hidden"
                data-aos="fade-up"
                data-aos-duration={1500}
              />
              <Image
                src={"/images/ourService/mold-desk.png"}
                alt="mold"
                width={549}
                height={501}
                className="hidden h-[440px] lg:inline"
                data-aos="fade-right"
                data-aos-duration={1500}
              />
            </div>

            <div>
              <div
                className="flex h-full w-full flex-col items-start lg:w-[400px] xl:w-[600px]"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <Typography className="mb-5 mt-10 text-[26px] font-bold xl:text-[36px]">
                  <span className="text-[#fd700d]">Mold</span> Service
                </Typography>
                <Typography className="mb-3 text-justify lg:text-[18px]">
                  PT. CATUR UTAMA SEJAHTERA is also a mold consultan for rigid
                  packaging. We can be your packaging partner who can support
                  your product design, quality needs and provide product drawing
                  (2D & 3D)
                </Typography>
                <Typography className="mb-3 text-justify lg:text-[18px]">
                  PT. CATUR UTAMA SEJAHTERA has mold times. maker partners
                  (local and overseas mold makers) who have years of experience
                  in their fields with good reputations and will support you
                  with faster mold making times.
                </Typography>
                <Typography className="text-justify lg:text-[18px]">
                  One of our mold manufacturing partners is KISAN PRECISION CO.,
                  LTD which is located in Korea and specializes in making PET
                  molds. PT. CATUR UTAMA SEJAHTERA has been Kisan&apos;s global
                  partner for the Indonesian market since 2020
                </Typography>
                {/* <div className="flex w-full justify-start">
                  <Link href="https://wa.me/+62821-2361-1660">
                    <Button className="group mt-12 h-[50px] w-[220px] rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                      <Typography className="text-[16px] font-bold text-white">
                        Contact Us!
                      </Typography>
                    </Button>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-40 h-full w-full px-0 min-[500px]:px-0 sm:px-0 md:px-0 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-10 lg:px-0 min-[1700px]:px-0">
          <div className="relative flex h-full w-full flex-col gap-6 py-10 pb-[20px]">
            <div
              className="px-7 sm:px-20 md:px-24 2xl:px-[12%]"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <Typography className="text-center text-[36px] font-bold text-[#fd700d] sm:text-[40px]">
                Our Mold
              </Typography>
              <Typography className="text-center text-[36px] font-bold sm:text-[40px]">
                Speciality
              </Typography>
            </div>
            <div className="z-[10] flex flex-wrap justify-center gap-7 px-7 sm:mt-10 sm:px-20 md:px-24 2xl:px-[12%]">
              {/* Isi "Our Mold Speciality" Card */}
              <div
                className="flex h-[420px] w-[300px] flex-col gap-2 rounded-2xl bg-gradient-to-b from-[#FD700D] to-[#ff9f5a] p-7 shadow-lg"
                data-aos="flip-up"
                data-aos-delay={200}
                data-aos-duration={1500}
              >
                <Image
                  src={"/images/service/strecth.png"}
                  alt="Packaging Technology"
                  width={160}
                  height={100}
                />
                <Typography className="mt-3 text-[24px] font-semibold text-white">
                  Injection Stretch Blow Molding
                </Typography>
                <Typography className="mt-2 text-[18px] font-normal text-[white] text-left">
                  Single stage of PET Bottle (AOKI & ASB Machine) 
                </Typography>
                <Typography className="mt-2 text-[18px] font-normal text-[white] text-left">
                  Two stage of PET Bottle (Preform & Blow Molding)
                </Typography>
                {/* <Link href="https://wa.me/+62821-2361-1660" className="flex w-full">
                  <Button className="group mt-12 h-[50px] w-full rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                    <Typography className="text-[16px] font-bold text-white">
                      Contact Us!
                    </Typography>
                  </Button>
                </Link> */}
              </div>
              <div
                className="flex h-[420px] w-[300px] flex-col gap-2 rounded-2xl bg-gradient-to-b from-[#FD700D] to-[#ff9f5a] p-7 shadow-lg text-center items-center"
                data-aos="flip-up"
                data-aos-delay={200}
                data-aos-duration={1500}
              >
                <Image
                  src={"/images/service/machine.png"}
                  alt="Packaging Technology"
                  width={140}
                  height={94}
                />
                <Typography className="mt-3 text-[24px] font-semibold text-white px-10">
                  Injection Machine
                </Typography>
                <Typography className="mt-2 text-[18px] font-normal text-[white] text-center">
                  Cap, Jar, Thinwall, and others
                </Typography>
                {/* <Link href="https://wa.me/+62821-2361-1660" className="flex w-full">
                  <Button className="group mt-12 h-[50px] w-full rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                    <Typography className="text-[16px] font-bold text-white">
                      Contact Us!
                    </Typography>
                  </Button>
                </Link> */}
              </div>
              <div
                className="flex h-[420px] w-[300px] flex-col gap-2 rounded-2xl bg-gradient-to-b from-[#FD700D] to-[#ff9f5a] p-7 shadow-lg text-right items-end"
                data-aos="flip-up"
                data-aos-delay={200}
                data-aos-duration={1500}
              >
                <Image
                  src={"/images/service/blowbalik.png"}
                  alt="Packaging Technology"
                  width={160}
                  height={100}
                />
                <Typography className="mt-3 text-[24px] font-semibold text-white">
                  Injection Blow Molding
                </Typography>
                <Typography className="mt-2 text-[18px] font-normal text-[white] text-right">
                  Jerry Can, Bottle and others
                </Typography>
                {/* <Link href="https://wa.me/+62821-2361-1660" className="flex w-full">
                  <Button className="group mt-12 h-[50px] w-full rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                    <Typography className="text-[16px] font-bold text-white">
                      Contact Us!
                    </Typography>
                  </Button>
                </Link> */}
              </div>
              
            </div>
          </div>
        </section>
      </div>


      <div className="relative h-full w-full bg-gradient-to-l from-[#fff5ee] to-[#fd700d] p-10">
        <div>
          <Image
            src={"/images/cta/vector-bunga-desk-service.png"}
            alt="vector"
            width={140}
            height={140}
            className="absolute bottom-0 left-0 hidden lg:flex"
          />
          <Image
            src={"/images/cta/vector-bunga-desk-service-2.png"}
            alt="vector"
            width={140}
            height={140}
            className="absolute right-0 top-0 hidden lg:flex"
          />
        </div>
        <div className="w-full">
          <div
            className="flex h-full w-full flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <Typography className="text-center text-[26px] font-bold lg:w-[600px] lg:text-[32px] lg:font-medium">
              Ready to secure your packaging Today?
            </Typography>
            <Link href="mailto:marketing@cusplastic.com">
              <Button className="group mt-12 h-[50px] w-[220px] rounded-md bg-[#fd700d] shadow-md hover:bg-[#e4650c] active:bg-[#ca5a0a]">
                <Typography className="text-[16px] font-bold text-white">
                  Contact Us!
                </Typography>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
