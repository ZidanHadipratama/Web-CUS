"use client"

import Layout from '@/layouts/Layouts'
import Typography from '@/sandbox/Typography'
import { Button } from '@mui/material'
import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function PageService() {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Layout withNavbar withFooter className='overflow-hidden'>
            <div className="relative w-full h-[640px]">
                <Image
                    src={'/images/service/upSectionMobile.png'}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-[-1] min-[500px]:hidden"
                />
                <Image
                    src={'/images/service/upSection.png'}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-[-1] min-[500px]:inline hidden"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className='w-full px-10 sm:pl-20 md:pl-28 lg:pl-36 xl:pl-44 2xl:pl-[16%]'
                        data-aos='fade-up'
                        data-aos-duration={1500}
                    >
                        <Typography className={'text-[48px] font-bold text-white leading-none mb-6 sm:w-[400px] lg:text-[64px]'}>
                            Our Service
                        </Typography>
                        <Typography className={'text-[20px] xl:text-[22px] font-medium text-white'}>
                            We can be your partner to support your  product packaging.
                        </Typography>
                    </div>
                </div>
            </div>

            <div className='flex w-full h-full py-10 pb-[20px] flex-col gap-6 relative'>
                <div className='px-7 sm:px-20 md:px-24 2xl:px-[12%]' data-aos='fade-up'
                    data-aos-duration={1500}>
                    <Typography className='sm:text-[40px] text-[36px] text-[#fd700d] font-bold text-center'>
                        What Can We
                    </Typography>
                    <Typography className='sm:text-[40px] text-[36px] font-bold text-center'>
                        &quot;Do For You?&quot;
                    </Typography>
                </div>
                <div className='sm:mt-10 gap-7 flex flex-wrap justify-center px-7 sm:px-20 md:px-24 z-[10] 2xl:px-[12%]'>
                    <div className='bg-gradient-to-b to-[#FFEADB] from-[#FD700D] shadow-lg w-[340px] h-[450px] flex flex-col justify-between rounded-2xl p-7'
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
                        <Typography className='text-[24px] font-semibold mt-3 text-white'>
                            Packaging Technology
                        </Typography>
                        <Typography className='text-[18px] font-normal text-[white] mt-2'>
                            Will support your need in rigid packaging.
                        </Typography>
                        <Link href='https://wa.me/+62821-2361-1660' className='flex w-full'>
                            <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-full rounded-md h-[50px] shadow-md'>
                                <Typography className='text-white text-[16px] font-bold'>
                                    Contact Us!
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                    <div className='bg-gradient-to-b to-[#FFEADB] from-[#FD700D] shadow-lg w-[340px] h-[450px] flex flex-col justify-between items-center rounded-2xl p-7'
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
                        <Typography className='text-[24px] font-semibold mt-3 text-white'>
                            Mold Service
                        </Typography>
                        <Typography className='text-[18px] font-normal text-[white] mt-2 text-center'>
                            Can be your packaging partner.
                        </Typography>
                        <Link href='https://wa.me/+62821-2361-1660' className='flex w-full'>
                            <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-full rounded-md h-[50px] shadow-md'>
                                <Typography className='text-white text-[16px] font-bold'>
                                    Contact Us!
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                    <div className='bg-gradient-to-b to-[#FFEADB] from-[#FD700D] shadow-lg w-[340px] h-[450px] flex flex-col justify-between items-end rounded-2xl p-7'
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
                        <Typography className='text-[24px] font-semibold mt-3 text-end text-white'>
                            Kisan in Pet Mold
                        </Typography>
                        <Typography className='text-[18px] font-normal text-[white] mt-2 text-end'>
                            Kisan started with only a machinery tool workshop producing PET molds for local customers
                        </Typography>
                        <Link href='https://wa.me/+62821-2361-1660' className='flex w-full'>
                            <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-full rounded-md h-[50px] shadow-md'>
                                <Typography className='text-white text-[16px] font-bold'>
                                    Contact Us!
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='pb-20'>
                <section className='w-full h-full px-10 mt-16 xl:py-16 min-[500px]:px-20 sm:px-[16%] md:px-[20%] lg:px-[10%] min-[1700px]:px-[24%] lg:flex lg:justify-between lg:flex-row-reverse lg:gap-10 lg:items-center'>
                    <div className='min-[500px]:flex min-[500px]:justify-center'>
                        <Image
                            src={'/images/ourService/packaging.png'}
                            alt='packaging'
                            width={324}
                            height={218}
                            className='min-[500px]:w-[420px] lg:hidden'
                            data-aos='fade-up'
                            data-aos-duration={1500}
                        />
                        <Image
                            src={'/images/ourService/packaging-desk.png'}
                            alt='packaging'
                            width={647}
                            height={436}
                            className='h-[340px] w-[447px] xl:w-[547px] xl:h-[436px] hidden lg:inline'
                            data-aos='fade-left'
                            data-aos-duration={1500}
                        />
                    </div>
                    <div className='lg:flex lg:flex-col lg:w-[400px] xl:w-[550px]'
                        data-aos='fade-right'
                        data-aos-duration={1500}
                    >
                        <Typography className='text-[26px] font-bold mt-10 mb-5 xl:text-[36px]'>
                            <span className='text-[#fd700d]'>Packaging</span> Technology
                        </Typography>
                        <Typography className='text-justify mb-3 lg:text-[18px]'>
                            PT. CATUR UTAMA SEJAHTERA will support your need in rigid packaging. With an updated technology and reliable quality, we can be your partner to support your product packaging.
                        </Typography>
                        <Typography className='text-justify text-[#727272] xl:text-[16px]'>
                            Injection Molding <br />
                            Injection Blow Molding <br />
                            Injection Stretch Blow Molding <br />
                            Labeling and Shrink Label
                        </Typography>
                        <div className='w-full flex justify-center lg:justify-start'>
                            <Link href='https://wa.me/+62821-2361-1660'>
                                <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-[220px] rounded-md h-[50px] shadow-md'>
                                    <Typography className='text-white text-[16px] font-bold'>
                                        Contact Us!
                                    </Typography>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className='w-full h-full mt-20 mb-16 relative'>
                    <div className='absolute -top-10'>
                        <Image
                            src={'/images/ourService/vector.png'}
                            alt='vektor'
                            width={1010}
                            height={1010}
                            className='w-[1024px] h-[1010px] lg:hidden'
                        />
                        <Image
                            src={'/images/ourService/vector-desk.png'}
                            alt='vektor'
                            width={1636}
                            height={139}
                            className='w-[2536px] h-[720px] lg:inline hidden'
                        />
                    </div>
                    <div className='px-10 z-[101] relative min-[500px]:px-20 sm:px-[16%] md:px-[20%] lg:px-[10%] min-[1700px]:px-[24%] lg:flex lg:justify-between lg:gap-10 lg:items-center'>
                        <div className='min-[500px]:flex min-[500px]:justify-center lg:justify-start lg:w-[900px]'>
                            <Image
                                src={'/images/ourService/mold.png'}
                                alt='mold'
                                width={324}
                                height={218}
                                className='min-[500px]:w-[380px] lg:hidden'
                                data-aos='fade-up'
                                data-aos-duration={1500}
                            />
                            <Image
                                src={'/images/ourService/mold-desk.png'}
                                alt='mold'
                                width={549}
                                height={501}
                                className='h-[440px] hidden lg:inline'
                                data-aos='fade-right'
                                data-aos-duration={1500}
                            />
                        </div>

                        <div>
                            <div className='lg:w-[400px] w-full h-full flex flex-col items-start xl:w-[600px]'
                                data-aos='fade-left'
                                data-aos-duration={1500}>
                                <Typography className='text-[26px] font-bold mt-10 mb-5 xl:text-[36px]'>
                                    <span className='text-[#fd700d]'>Mold</span> Service
                                </Typography>
                                <Typography className='text-justify mb-3 lg:text-[18px]'>
                                    PT. CATUR UTAMA SEJAHTERA is also a mold consultan for rigid packaging.  We can be your packaging partner who can support your product design, quality needs and provide product drawing (2D & 3D)
                                </Typography>
                                <Typography className='text-justify mb-3 lg:text-[18px]'>
                                    PT. CATUR UTAMA SEJAHTERA has mold times. maker partners (local and overseas mold makers) who have years of experience in their fields with good reputations and will support you with faster mold making times.
                                </Typography>
                                <Typography className='text-justify lg:text-[18px]'>
                                    One of our mold manufacturing partners is KISAN PRECISION CO., LTD which is located in Korea and specializes in making PET molds. PT. CATUR UTAMA SEJAHTERA has been Kisan&apos;s global partner for the Indonesian market since 2020
                                </Typography>
                                <div className='w-full flex justify-start'>
                                    <Link href='https://wa.me/+62821-2361-1660'>
                                        <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-[220px] rounded-md h-[50px] shadow-md'>
                                            <Typography className='text-white text-[16px] font-bold'>
                                                Contact Us!
                                            </Typography>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className='w-full h-full px-10 mt-28 min-[500px]:px-20 sm:px-[16%] md:px-[20%] lg:px-[10%] min-[1700px]:px-[24%] lg:flex lg:justify-between lg:flex-row-reverse lg:gap-10 lg:items-center'>
                    <div className='min-[500px]:flex min-[500px]:justify-center'>
                        <Image
                            src={'/images/ourService/kisan.png'}
                            alt='kisan'
                            width={324}
                            height={218}
                            className='min-[500px]:w-[420px] lg:hidden'
                            data-aos='fade-up'
                            data-aos-duration={1500}
                        />
                        <Image
                            src={'/images/ourService/kisan-desk.png'}
                            alt='kisan'
                            width={533}
                            height={497}
                            className='w-[344px] h-[345px] xl:w-[450px] xl:h-[420px] hidden lg:inline'
                            data-aos='fade-left'
                            data-aos-duration={1500}
                        />
                    </div>
                    <div className='lg:flex lg:flex-col lg:w-[400px] xl:w-[600px]'
                        data-aos='fade-right'
                        data-aos-duration={1500}
                    >
                        <Typography className='text-[26px] font-bold mt-10 mb-5 xl:text-[36px]'>
                            <span className='text-[#fd700d]'>Kisan in</span> Pet Mold
                        </Typography>
                        <Typography className='text-justify mb-3 lg:text-[18px]'>
                            Founded in 1997, Kisan is PET Mold Maker located in Korea. Kisan started with only a machinery tool workshop producing PET molds for local customers
                        </Typography>
                        <Typography className='text-justify mb-3 lg:text-[18px]'>
                            As a valuable mold maker, Kisan is now capable of producing the complete set of Single Stage PET Molds, PET Blow Molds and PET Preform Molds.
                        </Typography>
                        <Typography className='text-justify lg:text-[18px]'>
                            Kisan&apos;s services area Asia, Africa, India, Middle East, Australia, North and South America
                        </Typography>
                        <div className='w-full flex justify-center lg:justify-start'>
                            <Link href='https://wa.me/+62821-2361-1660'>
                                <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-[220px] rounded-md h-[50px] shadow-md'>
                                    <Typography className='text-white text-[16px] font-bold'>
                                        Contact Us!
                                    </Typography>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <div className='relative bg-gradient-to-l from-[#fff5ee] to-[#fd700d] w-full h-full p-10'>
                <div>
                    <Image
                        src={'/images/cta/vector-bunga-desk-service.png'}
                        alt='vector'
                        width={140}
                        height={140}
                        className='absolute bottom-0 left-0 hidden lg:flex'
                    />
                    <Image
                        src={'/images/cta/vector-bunga-desk-service-2.png'}
                        alt='vector'
                        width={140}
                        height={140}
                        className='absolute top-0 right-0 hidden lg:flex'
                    />
                </div>
                <div className='w-full'>
                    <div className='flex flex-col items-center justify-center w-full h-full'
                        data-aos='fade-up'
                        data-aos-duration={1500}
                    >
                        <Typography className='text-center font-bold text-[26px] lg:text-[32px] lg:font-medium lg:w-[600px]'>
                            Ready to secure your packaging Today?
                        </Typography>
                        <Link href='https://wa.me/+62821-2361-1660'>
                            <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-[220px] rounded-md h-[50px] shadow-md'>
                                <Typography className='text-white text-[16px] font-bold'>
                                    Contact Us!
                                </Typography>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
