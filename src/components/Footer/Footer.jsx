import React from 'react';
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import x from '../../assets/x.png'
import linkedIn from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className='w-full bg-[#001931]'>
            <div className='max-w-[1440px] m-auto md:px-5 2xl:px-0 py-10 flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='h-10' src={logo} alt="" />
                    <h1 className='text-white font-bold'>HERO.IO</h1>
                </div>
                <div>
                    <h5 className='text-white font-bold'>Social Links</h5>
                    <div className='flex gap-2 mt-3'>
                        <img src={x} alt="X" />
                        <img src={linkedIn} alt="linkedIn" />
                        <img src={facebook} alt="facebook" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;