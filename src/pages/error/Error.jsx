import React from 'react';
import errorImg from './../../assets/error-404.png'
import { Link } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Header/Navbar';

const Error = () => {
    return (
        <div>
            <Navbar/>
            <div className='max-w-[1440px] m-auto flex flex-col mt-10 mb-10 xl:p-20 justify-center items-center text-center'>
                <img className='h-90 w-90 m-auto' src={errorImg} alt="app not found" />
                <h2 className='font-semibold text-5xl mt-5'>Oops, page not found!</h2>
                <p className='font-normal text-[#627382] mt-4 text-[1.2rem]'>The page you are looking for is not available.</p>
                <Link to='/'><button className='flex gap-2 mt-5 cursor-pointer rounded-lg text-white  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-10 py-3 font-semibold '>Go Back</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;