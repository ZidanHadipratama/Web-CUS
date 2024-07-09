import Typography from '@/sandbox/Typography'
import Button from '@mui/material/Button';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function DoForYou() {
    return (
        <div className='flex w-full h-full py-10 pb-[20px] flex-col gap-6 relative'>
            <div className='px-7 sm:px-20 md:px-24 2xl:px-[12%]'>
                <Typography className='sm:text-[40px] text-[36px] text-[#fd700d] font-bold text-center'>
                    What Can We
                </Typography>
                <Typography className='sm:text-[40px] text-[36px] font-bold text-center'>
                    &quot;Do For You?&quot;
                </Typography>
            </div>
            <div className='sm:mt-10 gap-7 flex flex-wrap justify-center px-7 sm:px-20 md:px-24 z-[10] 2xl:px-[12%]'>
                <div className='bg-gradient-to-b to-[#FFEADB] from-[#FD700D] shadow-lg w-[340px] h-[450px] flex flex-col justify-between rounded-2xl p-7'>
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
                <div className='bg-gradient-to-b to-[#FFEADB] from-[#FD700D] shadow-lg w-[340px] h-[450px] flex flex-col justify-between items-center rounded-2xl p-7'>
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
                <div className='bg-gradient-to-b to-[#FFEADB] from-[#FD700D] shadow-lg w-[340px] h-[450px] flex flex-col justify-between items-end rounded-2xl p-7'>
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
    )
}
