import Typography from '@/sandbox/Typography'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurService() {
    return (
        <div className='pb-20'>
            <section className='w-full h-full px-10 mt-16 xl:py-16 min-[500px]:px-20 sm:px-[16%] md:px-[20%] lg:px-[10%] min-[1700px]:px-[24%] lg:flex lg:justify-between lg:flex-row-reverse lg:gap-10 lg:items-center'>
                <div className='min-[500px]:flex min-[500px]:justify-center'>
                    <Image
                        src={'/images/ourService/packaging.png'}
                        alt='packaging'
                        width={324}
                        height={218}
                        className='min-[500px]:w-[420px] lg:hidden'
                    />
                    <Image
                        src={'/images/ourService/packaging-desk.png'}
                        alt='packaging'
                        width={647}
                        height={436}
                        className='h-[340px] w-[447px] xl:w-[547px] xl:h-[436px] hidden lg:inline'
                    />
                </div>
                <div className='lg:flex lg:flex-col lg:w-[400px] xl:w-[550px]'>
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
                        />
                        <Image
                            src={'/images/ourService/mold-desk.png'}
                            alt='mold'
                            width={549}
                            height={501}
                            className='h-[440px] hidden lg:inline'
                        />
                    </div>

                    <div>
                        <div className='lg:w-[400px] w-full h-full flex flex-col items-start xl:w-[600px]'>
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
                    />
                    <Image
                        src={'/images/ourService/kisan-desk.png'}
                        alt='kisan'
                        width={533}
                        height={497}
                        className='w-[344px] h-[345px] xl:w-[450px] xl:h-[420px] hidden lg:inline'
                    />
                </div>
                <div className='lg:flex lg:flex-col lg:w-[400px] xl:w-[600px]'>
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
    )
}
