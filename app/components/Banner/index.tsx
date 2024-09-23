import Image from 'next/image';
import React from 'react';

const Banner = () => {

    return (
        <div id="Home">
        <div className='bg-header'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12'>


                    <div className='col-span-6 flex flex-col justify-evenly relative'>
                        {/* <Image src="/assets/banner/star.svg" alt="star-image" width={95} height={97} className='absolute top-[-74px] right-[51px]' />
                        <Image src="/assets/banner/lineone.svg" alt="line-image" width={190} height={148} className='absolute top-[-74px] right-[51px]' /> */}
                        {/* <h1 className='text-blue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5 '>Be </h1>
                        <h1 className='text-blue text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5 '>Digital Biz</h1> */}
                        <h1 className='text-4xl md:text-85xl text-center lg:text-start font-semibold lh-133 pt-5 slidein'>
                            <span className="text-blue-800 ">Be </span>
                            <span className="text-red">Di</span>
                            <span className="text-pink-600">gi</span>
                            <span className="text-sky">tal</span>
                            <span className="text-lime-500"> Biz</span>
                        </h1>
                        <h3 className="text-black opacity-75 text-lg font-normal text-center lg:text-start pt-8 slidein ">
                            We make the innovation happen. A cloud-based network platform with real management experience. Evolve digitally for all customers segment.
                        </h3>
                        
                        <div className='pt-8 mx-auto lg:mx-0'>
                        <a href="#Contact">
                            
                            <div className="but1 slidein ">
                                <button>
                                    <div className="text">ติดต่อ</div>
                                    <div className="blob"></div>
                                    <div className="blob"></div>
                                    <div className="blob"></div>
                                    <div className="blob"></div>
                                </button>
                                </div>
                        </a>

                        </div>
                    </div>

                    <div className='col-span-6 flex justify-center xl:-mb-32 xl:-mr-32 pt-10 lg:pt-0'>
                        <Image src="/assets/banner/nw1.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Banner;
