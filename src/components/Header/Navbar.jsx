import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='m-auto max-w-[1440px] max-2xl:px-4 max-sm:px-2 py-5 flex flex-row justify-between items-center '>
            <div className='flex gap-2 justify-center items-center'>
                <img className='h-[40px]' src={logo} alt="" />
                <h1 className='font-bold text-[1rem] bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h1>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <Link to='/' className='text-[1rem] text-black font-medium hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent cursor-pointer'>Home</Link>
                    <Link to='/apps' className='text-[1rem] text-black font-medium hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent cursor-pointer'>Apps</Link>
                    <Link to='/installation' className='text-[1rem] text-black font-medium hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text hover:text-transparent cursor-pointer'>Installation</Link>


                </ul>
            </div>
            <div>
                <button className='flex gap-2 cursor-pointer rounded-lg text-white  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3 font-semibold '>
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-labelledby="githubTitle">
                        <title id="githubTitle">GitHub</title>
                        <path fill="#FFFFFF" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                        0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
                        -1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.76-1.605
                        -2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 
                        0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 
                        2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                        1.23 1.911 1.23 3.221 0 4.61-2.805 5.625-5.475 5.92.435.375.81 
                        1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 
                        .315.21.69.825.57C20.565 22.092 24 17.592 
                        24 12.297 24 5.67 18.627.297 12 .297z"/>
                    </svg>
                    Contribute</button>
            </div>
        </div>
    );
};

export default Navbar;