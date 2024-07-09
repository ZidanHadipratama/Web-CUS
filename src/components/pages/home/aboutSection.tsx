import Typography from '@/sandbox/Typography'
import React from 'react'

export default function AboutSection() {
    return (
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
    )
}
