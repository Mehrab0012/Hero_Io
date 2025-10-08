import React from 'react';

const Testimonials = () => {
    return (
        <div className='mb-20 py-20 flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#632EE3] to-[#9F62F2] w-full'>
            <h2 className='font-sans text-3xl text-white font-semibold'>Trusted by Millions, Built for You</h2>
            <div className='w-full flex flex-row justify-between leading-8 xl:px-30 2xl:px-80'>
                <div className='mt-10'>
                    <p className='font-light text-[1rem] text-[#ffffffc3]'>Total Downloads</p>
                    <h2 className=' text-6xl text-white font-extrabold'>29.6M</h2>
                    <p className='font-light text-[#ffffffc3]'>21% more than last month</p>
                </div>
                <div className='mt-10 '>
                    <p className='font-light text-[1rem] text-[#ffffffc3]'>Total Downloads</p>
                    <h2 className=' text-6xl text-white font-extrabold'>29.6M</h2>
                    <p className='font-light text-[#ffffffc3]'>21% more than last month</p>
                </div>
                <div className='mt-10'>
                    <p className='font-light text-[1rem] text-[#ffffffc3]'>Total Downloads</p>
                    <h2 className=' text-6xl text-white font-extrabold'>29.6M</h2>
                    <p className='font-light text-[#ffffffc3]'>21% more than last month</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;