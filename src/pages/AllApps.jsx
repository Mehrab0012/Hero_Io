import React from 'react';
import Product from '../components/products/product';
import { Link } from 'react-router';

const AllApps = ({data}) => {
    return (
        <div className='mt-20 2xl:w-[1440px] w-full max-xl:px-5  m-auto max-sm:p-2'>

            <div className='mt-10 m-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {
                    data.map(e => <Link key={e.id} to={`/apps/${e.id}`}><Product  e={e}></Product></Link>)
                }
            </div>
        </div>
    );
};

export default AllApps;