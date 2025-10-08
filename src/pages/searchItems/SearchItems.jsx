import React from 'react';
import Product from '../../components/products/product';

const SearchItems = ({data, searchItem}) => {
    const searchItems = data.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase()))
    return (
        <div>
            {
                searchItems.map(e=><Product key={data.id} e={e}></Product>)
            }
        </div>
    );
};

export default SearchItems;