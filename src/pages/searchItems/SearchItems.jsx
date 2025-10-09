import React from 'react';
import ProductNotFound from '../error/ProductNotFound';
import downloadIcon from '../../assets/icon-downloads.png'
import { Link } from 'react-router';

const SearchItems = ({ data, searchItem, setAppFound }) => {
    if (!data) {
        return <ProductNotFound />;
    }
    const searchResults = data.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()));

    if (searchResults.length === 0) {
        return <ProductNotFound />;
    }
    setAppFound(searchResults.length)
    return (
        <div className='max-w-[1440px] m-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    searchResults.map(e => (
                        <Link key={e.id} to={`/apps/${e.id}`}>
                            <div key={e.id} className='p-4 rounded-sm mt-2 mb-2'>
                                <div className='cursor-pointer flex justify-center items-center'>
                                    <img className='rounded-sm w-auto h-50' src={e.image} alt={e.title} />
                                </div>
                                <div className='w-full px-6 md:px-8 lg:px-12 2xl:px-18 flex flex-col justify-start mt-4'>
                                    <h3 className='mt-4 mb-4 font-bold text-[1rem]'>{e.title}</h3>
                                    <div className='flex justify-between'>
                                        <span className='flex items-center gap-1 text-[#00D390] font-m'><img className='h-5' src={downloadIcon}></img> {e.downloads}</span>
                                        <span className='flex items-center gap-1 text-[#FF8811]'>{e.ratingAvg}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default SearchItems;

