import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AllApps from './AllApps';
import SearchItems from './searchItems/SearchItems';
import searchIcon from '../assets/searchIcon.png'



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
    const [searchItem, setSearchItem] = useState('');

    console.log(searchItem.length)
    return (
        <div>
                        <div className='flex flex-col justify-center text-center items-center mb-10'>
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p className='mt-4 text-[1.25rem] font-regular text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-full flex justify-between items-center 2xl:px-20 xl:px-10 md:px-5 max-sm:px-5'>
                <h3 className='font-bold text-xl'>({data.length}) Apps Found</h3>
                <div className='flex justify-center'>
                    <input className='px-5 py-2 border rounded-md' type="text" placeholder='search Apps'
                        value={searchItem}
                        onChange={item => setSearchItem(item.target.value)}

                        style={{
                            backgroundImage: `url(${searchIcon})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "10px center",
                            paddingLeft: "40px",
                        }}

                    />

                </div>

            </div>

            {
                searchItem.length === 0 ? <AllApps data={data}
                    searchItem={searchItem}
                    setSearchItem={setSearchItem}>
                    </AllApps> :
                    <SearchItems
                    data={data}
                    searchItem={searchItem}
                    setSearchItem={setSearchItem}
                    ></SearchItems>
            }

        </div>


    );
};

export default Apps;