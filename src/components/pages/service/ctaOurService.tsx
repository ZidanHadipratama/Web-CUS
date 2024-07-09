import Typography from '@/sandbox/Typography'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CTAOurService() {
    return (
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
                <div className='flex flex-col items-center justify-center w-full h-full'>
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
            {/* <div>
                <Image
                    src={'/images/cta/vector-bunga-desk.png'}
                    alt='vector'
                    width={150}
                    height={150}
                    className='absolute bottom-0 left-0 sm:w-[150px] sm:h-[150px] w-[60px] h-[60px]'
                />
            </div> */}
        </div>
    )
}
