import Typography from '@/sandbox/Typography'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CTA() {
    return (
        <div className='mt-[200px] relative'>
            <Image
                src={'/images/cta/vector.png'}
                alt='vector'
                width={390}
                height={500}
                // className='sm:w-[640px] w-[390px] h-[500px] md:w-[768px] lg:hidden'
                className='w-full h-[500px] lg:hidden'
            />
            <Image
                src={'/images/cta/vector-desk.png'}
                alt='vector'
                width={1536}
                height={735}
                // className=' lg:w-[1024px] w-[600px] lg:h-[500px] lg:inline hidden'
                className='w-full h-[500px] lg:inline hidden'
            />
            <div className='absolute top-1/3 w-full px-10'>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <Typography className='text-center font-bold text-[26px] lg:text-[32px] lg:font-medium lg:w-[600px]'
                        data-aos='fade-up'
                        data-aos-delay={200}
                        data-aos-duration={1500}
                    >
                        Ready to secure your packaging Today?
                    </Typography>
                    <Link href='https://wa.me/+62821-2361-1660'
                        data-aos='fade-up'
                        data-aos-delay={400}
                        data-aos-duration={1500}
                    >
                        <Button className='bg-[#fd700d] group hover:bg-[#e4650c] active:bg-[#ca5a0a] mt-12 w-[220px] rounded-md h-[50px] shadow-md'>
                            <Typography className='text-white text-[16px] font-bold'>
                                Contact Us!
                            </Typography>
                        </Button>
                    </Link>
                </div>
            </div>
            <div>
                <Image
                    src={'/images/cta/vector-bunga-desk.png'}
                    alt='vector'
                    width={150}
                    height={150}
                    className='absolute bottom-0 left-0 sm:w-[150px] sm:h-[150px] w-[120px] h-[120px]'
                />
            </div>
        </div>
    )
}
