"use client"

import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import Typography from "@/sandbox/Typography";
import Link from "next/link";
import { Button } from "@mui/material";

export default function LandingPage() {
    useEffect(() => {
        Aos.init({
            once: true
        })
    }, [])

    return (
        <div className='overflow-hidden'>
            <div className="relative w-full h-[640px]">
                <Image
                    src={'/images/upLanding/hero-mobile.png'}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-[-1] min-[500px]:hidden"
                />
                <Image
                    src={'/images/upLanding/hero.png'}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-[-1] min-[500px]:inline hidden"
                />
                <div className="absolute inset-0 flex items-center justify-center"
                >
                    <div className='w-full px-10 sm:pl-20 md:pl-28 lg:pl-36 xl:pl-44 2xl:pl-[16%]'
                        data-aos='fade-up'
                        data-aos-duration={1500}
                    >
                        <Typography className={'text-[48px] font-bold text-white leading-none mb-6 sm:w-[600px] lg:text-[64px]'}>
                            Our Company
                        </Typography>
                        <Typography className={'text-[20px] xl:text-[22px] font-medium text-white'}>
                            Your Highid Packaging Partners!
                        </Typography>
                    </div>
                </div>
            </div>

            <div className='px-9 py-10 sm:px-16 md:px-24 xl:px-44 2xl:px-[16%]'>
                <div data-aos='fade-up'
                    data-aos-duration={1500}>
                    <Typography className='sm:text-[28px] text-[20px] font-bold uppercase'
                    >
                        About Our Company
                    </Typography>
                    <div className='sm:w-[200px] sm:h-[6px] w-[60px] h-[4px] rounded-xl bg-[#5A2705]'
                    ></div>
                </div>
                <Typography className='text-gray-600 sm:text-[18px] py-4 lg:pt-8 xl:text-[18px] text-[16px] font-normal text-justify'
                    data-aos='fade-up'
                    data-aos-delay={200}
                    data-aos-duration={1500}
                >
                    PT . CATUR UTAMA SEJAHTERA is located in Tangerang Indonesia. Our company is engaged as a rigid plastic manufacturer. We also a mold consultan of many rigid plastic packaging and have good cooperation and experience with many reputable mold maker in China and Korea. We aim to be the most trustworthy partner to all our customer by providing them with the latest innovation in plastic packaging and mold design
                </Typography>
            </div>

            <div className='flex w-full h-full bg-[#FFEADB] px-6 sm:px-16 md:px-24 py-10 xl:px-40 2xl:px-[12%]'>
                <div className='flex w-full h-full rounded-[10px] sm:rounded-[20px] bg-[#ca5a0a] justify-center lg:items-start flex-col items-center px-6 pt-20 pb-[450px] sm:pb-[650px] lg:pb-20 relative
                lg:px-16 xl:px-20
            '>
                    <div className='absolute lg:w-[186px] lg:h-[208px] w-[108px] h-[120px] bg-[#fd700d] top-0 left-0 rounded-tl-[10px] rounded-br-[40px]'></div>
                    <Typography className='text-white font-bold sm:text-[52px] text-[42px]
                    lg:text-[48px] lg:z-[101] xl:text-[52px]
                '
                        data-aos='fade-up'

                        data-aos-duration={1500}
                    >
                        VISI
                    </Typography>
                    <Typography className='text-white font-normal text-[16px] sm:text-[20px] text-center
                lg:z-[101] lg:text-left lg:text-[18px] lg:w-[400px] xl:w-[700px]
                xl:text-[18px]
                '
                        data-aos='fade-up'
                        data-aos-delay={200}
                        data-aos-duration={1500}
                    >
                        1. Prioritize quality, service, employees safety and security products for customer satisfaction <br />
                        2. Hardworking  creating opportunities and growth to be the best company <br />
                        3. To become the place for high achiever employees with great passion for their personal development <br />
                        4. To become the reliable and trusted business partner
                    </Typography>
                    <Typography className='text-white font-bold sm:text-[52px] text-[42px] mt-10
                    lg:text-[48px] xl:text-[52px]
                '
                        data-aos='fade-up'
                        data-aos-delay={300}
                        data-aos-duration={1500}
                    >
                        MISI
                    </Typography>
                    <Typography className='text-white font-normal text-[16px] sm:text-[20px] text-center lg:text-left lg:text-[18px] lg:w-[400px] xl:w-[600px] xl:text-[18px] z-[101]'
                        data-aos='fade-up'
                        data-aos-delay={400}
                        data-aos-duration={1500}
                    >
                        1. Hardworking  creating opportunities and growth to be the best company <br />
                        2. Prioritize quality, service, employees safety and security products for customer satisfaction <br />
                        3. To become the reliable and trusted business partner <br />
                        4. To become the place for high achiever employees with great passion for their personal development
                    </Typography>
                    <div className='absolute bottom-0 lg:right-0 z-[99]'>
                        <Image
                            src={'/images/vimi/vimi.png'}
                            alt='Visi Misi'
                            width={350}
                            height={403}
                            className='sm:w-[640px] w-[640px] h-[400px] sm:h-[600px] lg:hidden'
                        />
                        <Image
                            src={'/images/vimi/vimi-desk.png'}
                            alt='Visi Misi'
                            width={364}
                            height={445}
                            className='w-[364px] xl:w-[440px] lg:inline hidden'
                        />
                    </div>
                    <div className='absolute lg:w-[247px] lg:h-[201px] w-[108px] h-[120px] bg-[#fd700d] bottom-0 right-80 rounded-tl-[40px] hidden lg:inline'></div>
                </div>
            </div>

            <div className='flex w-full h-full bg-[#FFEADB] lg:bg-gradient-to-b lg:to-[#FD700D] lg:from-[#FFEADB] py-10 pb-[20px] flex-col gap-6 relative'>
                <div>
                    <Image
                        src={'/images/service/vector.png'}
                        alt='vektor'
                        width={390}
                        height={360}

                        className='w-full h-[360px] absolute -bottom-28 lg:hidden'
                    />
                    <Image
                        src={'/images/service/vector-deskk.png'}
                        alt='vektor'
                        width={1636}
                        height={139}

                        className='w-full h-[140px] absolute -bottom-28 lg:-bottom-24 lg:inline hidden'
                    />
                </div>
                <div className='px-7 sm:px-20 md:px-24 2xl:px-[12%]' data-aos='fade-up'
                    data-aos-duration={1500}>
                    <Typography className='uppercase sm:text-[40px] text-[36px] font-bold text-center'>
                        Services
                    </Typography>
                    <Typography className='text-[18px] sm:text-[22px] font-regular text-center'>
                        Modern solutions to handle your packaging!
                    </Typography>
                </div>
                <div className='sm:mt-10 gap-7 flex flex-wrap justify-center px-7 sm:px-20 md:px-24 z-[10] 2xl:px-[12%]'>
                    <div className='bg-white shadow-lg w-[340px] h-[350px] flex flex-col justify-between rounded-2xl p-7'
                        data-aos='flip-up'
                        data-aos-delay={200}
                        data-aos-duration={1500}
                    >
                        <Image
                            src={'/images/service/packaging.png'}
                            alt='Packaging Technology'
                            width={160}
                            height={100}
                        />
                        <Typography className='text-[24px] font-semibold mt-3'>
                            Packaging Technology
                        </Typography>
                        <Typography className='text-[18px] font-normal text-[#919191] mt-2'>
                            Will support your need in rigid packaging.
                        </Typography>
                    </div>
                    <div className='bg-white shadow-lg w-[340px] h-[350px] flex flex-col justify-between rounded-2xl p-7 items-center'
                        data-aos='flip-down'
                        data-aos-delay={400}
                        data-aos-duration={1500}
                    >
                        <Image
                            src={'/images/service/mold.png'}
                            alt='Mold Service'
                            width={140}
                            height={94}
                        />
                        <Typography className='text-[24px] font-semibold mt-3'>
                            Mold Service
                        </Typography>
                        <Typography className='text-[18px] font-normal text-[#919191] mt-2 text-center'>
                            Can be your packaging partner.
                        </Typography>
                    </div>
                    <div className='bg-white shadow-lg w-[340px] h-[350px] flex flex-col justify-between rounded-2xl p-7 items-end'
                        data-aos='flip-up'
                        data-aos-delay={600}
                        data-aos-duration={1500}
                    >
                        <Image
                            src={'/images/service/kisan.png'}
                            alt='Kisan in Pet Mold'
                            width={125}
                            height={104}
                        />
                        <Typography className='text-[24px] font-semibold mt-3 text-end'>
                            Kisan in Pet Mold
                        </Typography>
                        <Typography className='text-[18px] font-normal text-[#919191] mt-2 text-end'>
                            Kisan started with only a machinery tool workshop producing PET molds for local customers
                        </Typography>
                    </div>
                </div>
                <div className=' flex justify-center'>
                    <Link href='/service' data-aos='fade-up'
                        data-aos-duration={1500}>
                        <Button className='bg-white group hover:bg-[#FD710F] active:bg-[#be540a] mt-12 w-[220px] rounded-md h-[50px] shadow-md'>
                            <Typography className='text-[#FD710F] text-[18px] font-bold group-hover:text-white'>
                                Our Service
                            </Typography>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
