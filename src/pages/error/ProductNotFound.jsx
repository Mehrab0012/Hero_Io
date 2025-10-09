import React from 'react';
import appErrorImg from './../../assets/App-Error.png'
import { Link } from 'react-router';

const ProductNotFound = () => {
    return (
        <div>
            <div className='max-w-[1440px] m-auto flex flex-col max-sm:mt-10 xl:p-20 justify-center items-center text-center'>
                <img className='h-90 w-90 m-auto' src={appErrorImg} alt="app not found" />
                <h2 className='font-semibold text-5xl mt-5'>OPPS!! APP NOT FOUND</h2>
                <p className='font-normal text-[#627382] mt-4 text-[1.2rem]'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to='/'><button className='flex gap-2 mt-5 cursor-pointer rounded-lg text-white  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-10 py-3 font-semibold '>Go Back</button></Link> 
            </div>
        </div>
    );
};

export default ProductNotFound;