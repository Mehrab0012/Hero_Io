import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../components/products/product';


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
const Apps = () => {
    const data = useLoaderData();

    return (
        <div className='mt-20 2xl:w-[1440px] w-full max-xl:px-5  m-auto max-sm:p-2'>
            <div className='flex flex-col justify-center text-center items-center mb-10'>
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p className='mt-4 text-[1.25rem] font-regular text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-full 2xl:px-20 xl:px-10 md:px-5 max-sm:px-5'>
                <h3 className='font-bold text-xl'>({data.length}) Apps Found</h3>
            </div>
            <div className='mt-10 m-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {
                    data.map(e=><Product key={e.id} e={e}></Product>)
                }
            </div>
        </div>

    );
};

export default Apps;