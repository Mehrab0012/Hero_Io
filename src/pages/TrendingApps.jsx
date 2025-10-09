import React from 'react';
import Product from '../components/products/product';
import { Link } from 'react-router';
const TrendingApps = ({ HomeProducts }) => {

    return (
        <div className='w-full flex flex-col mb-20'>
            <div className='2xl:w-[1440px] m-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {
                     HomeProducts.map(e =>  <Link key={e.id} to={`/apps/${e.id}`}><Product key={e.id}  e={e}></Product></Link>)
                }
            </div>

            <button className='text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-6 py-2 rounded-md m-auto font-light '>Show All</button>

        </div>


    );
};

export default TrendingApps;