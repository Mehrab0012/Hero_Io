import React from 'react';

const Testimonials = () => {
    return (
        <div className='mb-20 py-10 sm:py-20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2] w-full'>
            <h2 className='font-sans sm:text-3xl lg:text-4xl 2xl:text-5xl max-sm:text-2xl text-white font-bold px-4'>Trusted by Millions, Built for You</h2>
            <div className='w-full flex flex-col md:flex-row justify-between leading-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80'>
                <div className='mt-10'>
                    <p className='font-light text-[1rem] text-[#ffffffc3]'>Total Downloads</p>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl text-white font-extrabold'>29.6M</h2>
                    <p className='font-light text-[#ffffffc3]'>21% more than last month</p>
                </div>
                <div className='mt-10 '>
                    <p className='font-light text-[1rem] text-[#ffffffc3]'>Total Downloads</p>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl text-white font-extrabold'>29.6M</h2>
                    <p className='font-light text-[#ffffffc3]'>21% more than last month</p>
                </div>
                <div className='mt-10'>
                    <p className='font-light text-[1rem] text-[#ffffffc3]'>Total Downloads</p>
                    <h2 className='text-4xl sm:text-5xl md:text-6xl text-white font-extrabold'>29.6M</h2>
                    <p className='font-light text-[#ffffffc3]'>21% more than last month</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;