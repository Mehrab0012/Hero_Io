import React from 'react';
import { useLoaderData } from 'react-router';
import downloadIcon from '../../assets/downloadIcon.png'
import ratingIcon from '../../assets/rating.png'
import reviewIcon from '../../assets/liked.png'

const singleApp = () => {

    //   {
    //     "image": "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
    //     "title": "Facebook",
    //     "companyName": "Meta Platforms, Inc.",
    //     "id": 7,
    //     "description": "Connect with friends, share, and stay in touch.",
    //     "size": 50,
    //     "reviews": "220k",
    //     "ratingAvg": 4.3,
    //     "downloads": "5B+",
    //     "ratings": [
    //       { "name": "1 star", "count": 200 },
    //       { "name": "2 star", "count": 400 },
    //       { "name": "3 star", "count": 1000 },
    //       { "name": "4 star", "count": 6000 },
    //       { "name": "5 star", "count": 20800 }
    //     ]
    //   },

    const product = useLoaderData();
    const { image,
        title,
        comapnyName,
        description,
        size,
        reviews,
        ratingAvg,
        downloads,
    } = product;

    return (
        <div>
            <div className=' 2xl:w-[1440px] m-auto'>
                <div className='flex flex-row'>
                    <img className='h-80' src={image} alt="" />
                    <div className='ml-10'>
                        <div>
                            <h3>{title}</h3>
                            <p>Developed by {comapnyName}</p>
                            <div className='mt-15 flex flex-row'>
                                <div>
                                    <img className='h-40' src={downloadIcon} alt="" />
                                    <p>Downloads</p>
                                    <span>{downloads}</span>
                                </div>
                                <div>
                                    <img className='h-40' src={ratingIcon} alt="" />
                                    <p>Average Ratings</p>
                                    <span>{ratingAvg}</span>
                                </div>
                                <div>
                                    <img className='h-40' src={reviewIcon} alt="" />
                                    <p>Total Reviews</p>
                                    <span>{reviews}</span>
                                </div>

                            </div>

                            <button className='px-5 py-3 text-white bg-[#00D390]'>Install now ({size} MB)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default singleApp;