import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import downloadIcon from './../../assets/icon-downloads.png'
import reviewIcon from './../../assets/icon-review.png'
import ratingIcon from './../../assets/icon-ratings.png'
import RatingGraph from '../../components/ratingGraph/RatingGraph';
import addToLocalStorage from '../../localStorage/localstorage';


const AppDetails = () => {
    const [install , setInstall]= useState(false)
    const product = useLoaderData();
    const { 
        id,
        image,
        title,
        companyName,
        description,
        size,
        reviews,
        ratingAvg,
        ratings,
        downloads,
    } = product;

    const handleLocalStorage =()=>{
        addToLocalStorage(id);
    }
    const handleInstall = ()=>{
        if(install){
            return null;
        }
        else{
            return setInstall(install =>!install)
        }
    }

    return (
        <div>
            <div className=' 2xl:w-[1440px] m-auto mb-40 px-4 md:px-0'>
                <div className='w-full flex flex-col md:flex-row mb-20'>
                    <img className='h-80 w-full md:w-auto' src={image} alt="" />
                    <div className='ml-0 md:ml-10 mt-10 md:mt-0'>
                        <div>
                            <h3 className='text-[1.5rem] md:text-[1.9rem] font-bold'>{title}</h3>
                            <p className='font-normal text-[1rem] md:text-[1.2rem] text-[#627382]'>Developed by <span className='font-semibold text-[1rem] md:text-[1.2rem] text-[#632EE3]'>{companyName}</span></p>
                            <div className='mt-10 md:mt-15 flex flex-col md:flex-row gap-10'>
                                <div className='flex flex-row md:flex-col items-center md:items-start gap-4'>
                                    <img className='h-8 md:h-10' src={downloadIcon} alt="" />
                                    <div>
                                        <p className='font-normal text-[1rem] md:text-[1.2rem] text-[#627382]'>Downloads</p>
                                        <span className='font-extrabold text-[1.5rem] md:text-[2.5rem]'>{downloads}</span>
                                    </div>
                                </div>
                                <div className='flex flex-row md:flex-col items-center md:items-start gap-4'>
                                    <img className='h-8 md:h-10' src={ratingIcon} alt="" />
                                    <div>
                                        <p className='font-normal text-[1rem] md:text-[1.2rem] text-[#627382]'>Average Ratings</p>
                                        <span className='font-extrabold text-[1.5rem] md:text-[2.5rem]'>{ratingAvg}</span>
                                    </div>
                                </div>
                                <div className='flex flex-row md:flex-col items-center md:items-start gap-4'>
                                    <img className='h-8 md:h-10' src={reviewIcon} alt="" />
                                    <div>
                                        <p className='font-normal text-[1rem] md:text-[1.2rem] text-[#627382]'>Total Reviews</p>
                                        <span className='font-extrabold text-[1.5rem] md:text-[2.5rem]'>{reviews}</span>
                                    </div>
                                </div>

                            </div>

                            <button onClick={()=>{
                                handleLocalStorage()
                                handleInstall()
                            }}
                             className={` ${install ?'px-5 py-3 mt-8 text-white cursor-not-allowed bg-gray-400 w-full md:w-auto' :
                              ' px-5 py-3 mt-8 text-white bg-[#00D390] cursor-pointer w-full md:w-auto'}`}>
                               {install?`Installed (${size} MB)`:`Install Now (${size} MB)`} </button>
                        </div>
                    </div>
                </div>
                <RatingGraph ratings={ratings}></RatingGraph>
                <div className='mt-20 mb-20'>
                    <h3 className='font-semibold text-2xl mb-6' >Description</h3>
                    <p>{description}</p>

                </div>
            </div>

        </div>
    );
};

export default AppDetails;