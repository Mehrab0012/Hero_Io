import React from 'react';
import { useLoaderData } from 'react-router';
import downloadIcon from './../../assets/icon-downloads.png'
import reviewIcon from './../../assets/icon-review.png'
import ratingIcon from './../../assets/icon-ratings.png'
import RatingGraph from '../../components/ratingGraph/RatingGraph';
import addToLocalStorage from '../../localStorage/localstorage';


const AppDetails = () => {
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
    return (
        <div>
            <div className=' 2xl:w-[1440px] m-auto mb-40'>
                <div className='w-full flex flex-row mb-20'>
                    <img className='h-80' src={image} alt="" />
                    <div className='ml-10'>
                        <div>
                            <h3 className='text-[1.9rem] font-bold'>{title}</h3>
                            <p className='font-normal text-[1.2rem] text-[#627382]'>Developed by <span className='font-semibold text-[1.2rem] text-[#632EE3]'>{companyName}</span></p>
                            <div className='mt-15 flex flex-row gap-10'>
                                <div>
                                    <img className='h-10' src={downloadIcon} alt="" />
                                    <p className='font-normal text-[1.2rem] text-[#627382]'>Downloads</p>
                                    <span className='font-extrabold text-[2.5rem]'>{downloads}</span>
                                </div>
                                <div>
                                    <img className='h-10' src={ratingIcon} alt="" />
                                    <p className='font-normal text-[1.2rem] text-[#627382]'>Average Ratings</p>
                                    <span className='font-extrabold text-[2.5rem]'>{ratingAvg}</span>
                                </div>
                                <div>
                                    <img className='h-10' src={reviewIcon} alt="" />
                                    <p className='font-normal text-[1.2rem] text-[#627382]'>Total Reviews</p>
                                    <span className='font-extrabold text-[2.5rem]'>{reviews}</span>
                                </div>

                            </div>

                            <button onClick={handleLocalStorage} className='px-5 py-3 mt-8 text-white bg-[#00D390] cursor-pointer'>Install now ({size} MB)</button>
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