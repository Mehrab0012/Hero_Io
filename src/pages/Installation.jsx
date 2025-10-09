import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ProductNotFound from './error/ProductNotFound'
import remove from '../localStorage/removeItem';

const Installation = () => {
    const [localData, setLocalData] = useState(() => {
        const getItem = localStorage.getItem('apps');
        return getItem ? JSON.parse(getItem) : [];
    })
    const data = useLoaderData();

    console.log(localData)
    const filtered = data.filter(item => localData.includes(item.id));
    const handleRemove = (id) => {
        remove(id);
        const updated = localData.filter(storedId => storedId !== id);
        setLocalData(updated);
    }

    return (
        <div className='max-w-6xl m-auto flex flex-col justify-center items-center text-center'>
            <h2 className='font-bold text-5xl mt-20'>Your Installed Apps</h2>
            <p className='text-[1.2rem] mt-4 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='w-full  text-left'><h3 className='font-semibold text-2xl mt-10'>{filtered.length} Apps Found</h3></div>
            <div className='w-full mt-4 flex flex-col'>
                {
                    filtered.length === 0 ? <ProductNotFound></ProductNotFound> :
                        filtered.map(apps => (
                            <div key={apps.id} className="flex flex-row justify-between items-center">
                                <div className='w-full flex items-center gap-10'>
                                    <div className="w-full  overflow-hidden flex items-center">
                                        <div className={`w-20 h-20 bg-no-repeat rounded-2xl `} >
                                            <img className="object-contain w-20 h-20"
                                                src={apps.image}
                                                alt={apps.title}
                                            />
                                        </div>
                                        <div className=' text-start ml-5 py-5 mb-5 flex flex-col justify-center'>
                                            <h3 className='font-medium text-[1.25rem]'>{apps.title}</h3>
                                            <div className='flex gap-4 mt-2'>
                                                <span className='text-[1rem] text-[#00D390]'>{apps.downloads}</span>
                                                <span className='text-[1rem] text-[#FF8811]'>{apps.ratingAvg}</span>
                                                <span className='text-[1rem] text-[#627382]'>{apps.size} MB</span>

                                            </div>
                                        </div>
                                    </div>                                    <div></div>
                                </div>
                                <button onClick={() => handleRemove(apps.id)} className='bg-[#00D390] cursor-pointer text-white rounded-md px-5 py-3'>Uninstall</button>

                            </div>
                        ))
                }

            </div>
        </div>
    );
};

export default Installation;