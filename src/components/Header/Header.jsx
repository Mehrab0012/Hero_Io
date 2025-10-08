import React from 'react';
import Navbar from './Navbar';
import googlePlay from '../../assets/googlePlay.svg'
import AppStore from '../../assets/appStore.svg'
import Hero from '../../assets/hero.png'
import Iphone from '../../assets/Iphone.png'


const Header = () => {
    return (
        <div className='max-w-[1600px] m-auto'>
            <Navbar></Navbar>
            <div className='max-w-[1440px] m-auto mt-15 flex flex-col justify-center items-center' >
                <h1 className='text-center leading-[72px] font-sans font-bold  text-7xl'>We Build <br /><span className='font-black bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[#627382] leading-7 mt-4 max-w-[750px] text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex justify-center mt-8 gap-4'>
                <button className='border font-semibold rounded-sm flex items-center gap-2 px-6 py-3 shadow-xl'>
                    <img className='h-[30px]' src={googlePlay} alt="Play Store" />
                    Google Play</button>
                <button className='border font-semibold rounded-sm flex gap-2 items-center px-6 py-3 shadow-xl'>
                    <img className='h-[30px]' src={AppStore} alt="Play Store" />
                    App Store</button>
            </div>
            <div className='px-10 flex justify-center items-center relative mt-10 max-w-full'>
                <img src={Hero} alt="" className='' />
            </div>
                   
        </div>              
)
};  

export default Header;