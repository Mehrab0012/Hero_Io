import React from 'react';
import spinner from './../../assets/logo.png'

const Loader = () => {
    return (
        <div>
            <div className='max-w-6xl m-auto flex flex-col justify-center items-center p-40'>
                <p className='text-9xl font-bold flex bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'><span>L</span> <span><img className='h-30 animate-spin' src={spinner} alt="" /></span><span>oading</span></p>
            </div>
            
        </div>
    );
};

export default Loader;