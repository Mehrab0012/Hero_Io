import React from 'react';
import downloadIcon from '../../assets/downloadIcon.png'
const product = ({ e }) => {

    const { image, title, downloads, ratingAvg } = e;
    //     {
    //     "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    //     "title": "Instagram",
    //     "companyName": "Meta Platforms, Inc.",
    //     "id": 2,
    //     "description": "Create & share photos, videos, messages, & stories.",
    //     "size": 45,
    //     "reviews": "300k",
    //     "ratingAvg": 4.7,
    //     "downloads": "3B+",
    //     "ratings": [
    //       { "name": "1 star", "count": 150 },
    //       { "name": "2 star", "count": 300 },
    //       { "name": "3 star", "count": 700 },
    //       { "name": "4 star", "count": 6500 },
    //       { "name": "5 star", "count": 24000 }
    //     ]
    //   },

    return (
        <div className='p-4  rounded-sm  mt-2 mb-2 '>
            <div className='w-full cursor-pointer flex justify-center items-center'>
                <img className='rounded-sm w-auto h-50' src={image} alt={title} />
            </div>

            <div className='w-full px-6 md:px-8 lg:px-12 2xl:px-18 flex flex-col justify-start mt-4'>
                <h3 className='mt-4 mb-4 font-bold text-[1rem] '>{title}</h3>
                <div className='flex justify-between'>
                    <span className='flex items-center gap-1 text-[#00D390] font-m'><img className='h-5' src={downloadIcon}></img> {downloads}</span>
                    <span className='flex items-center gap-1 text-[#FF8811]'>{ratingAvg}</span>
                </div>
            </div>
        </div>
    );
};

export default product;