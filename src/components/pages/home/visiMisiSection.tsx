import Typography from '@/sandbox/Typography'
import Image from 'next/image'
import React from 'react'

export default function VisiMisiSection() {
    return (
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
    )
}
