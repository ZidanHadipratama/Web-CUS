import Typography from '@/sandbox/Typography'
import Image from 'next/image'
import React from 'react'

export default function UpSectionService() {
    return (
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
                <div className='w-full px-10 sm:pl-20 md:pl-28 lg:pl-36 xl:pl-44 2xl:pl-[16%]'>
                    <Typography className={'text-[48px] font-bold text-white leading-none mb-6 sm:w-[400px] lg:text-[64px]'}>
                        Our Service
                    </Typography>
                    <Typography className={'text-[20px] xl:text-[22px] font-medium text-white'}>
                        We  can be your partner to support your  product packaging.
                    </Typography>
                </div>
            </div>
        </div>
    )
}
