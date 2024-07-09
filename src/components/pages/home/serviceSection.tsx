import Typography from '@/sandbox/Typography'
import Button from '@mui/material/Button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function ServiceSection() {

    return (
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
            <div className='px-7 sm:px-20 md:px-24 2xl:px-[12%]'>
                <Typography className='uppercase sm:text-[40px] text-[36px] font-bold text-center'>
                    Services
                </Typography>
                <Typography className='text-[18px] sm:text-[22px] font-regular text-center'>
                    Modern solutions to handle your packaging!
                </Typography>
            </div>
            <div className='sm:mt-10 gap-7 flex flex-wrap justify-center px-7 sm:px-20 md:px-24 z-[10] 2xl:px-[12%]'>
                <div className='bg-white shadow-lg w-[340px] h-[350px] flex flex-col justify-between rounded-2xl p-7'>
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
                <div className='bg-white shadow-lg w-[340px] h-[350px] flex flex-col justify-between rounded-2xl p-7 items-center'>
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
                <div className='bg-white shadow-lg w-[340px] h-[350px] flex flex-col justify-between rounded-2xl p-7 items-end'>
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
                <Link href='/service'>
                    <Button className='bg-white group hover:bg-[#FD710F] active:bg-[#be540a] mt-12 w-[220px] rounded-md h-[50px] shadow-md'>
                        <Typography className='text-[#FD710F] text-[18px] font-bold group-hover:text-white'>
                            Our Service
                        </Typography>
                    </Button>
                </Link>
            </div>
        </div>
    )
}
