import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import ProductNotFound from './error/ProductNotFound';
import remove from '../localStorage/removeItem';
import ratingIcon from '../assets/icon-ratings.png'

const Installation = () => {
  const [localData, setLocalData] = useState(() => {
    const getItem = localStorage.getItem('apps');
    return getItem ? JSON.parse(getItem) : [];
  });

  const data = useLoaderData();
  const filtered = data.filter(item => localData.includes(item.id));

  const handleRemove = (id) => {
    remove(id);
    const updated = localData.filter(storedId => storedId !== id);
    setLocalData(updated);
  };

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Size');
  const options = ['Size', 'Reviews', 'Downloads'];

  const sortedData = useMemo(() => {
    const sorted = [...filtered];
    switch (selected) {
      case 'Size':
        return sorted.sort((a, b) => b.size - a.size);
      case 'Reviews':
        return sorted.sort(
          (a, b) => parseFloat(b.reviews) - parseFloat(a.reviews)
        );
      case 'Downloads':
        return sorted.sort((a, b) => b.downloads - a.downloads);
      default:
        return sorted;
    }
  }, [selected, filtered]);

  return (
    <div className='max-w-6xl m-auto flex flex-col justify-center items-center text-center'>
      <h2 className='font-bold text-5xl mt-20'>Your Installed Apps</h2>
      <p className='text-[1.2rem] mt-4 text-[#627382]'>
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className='w-full flex items-center justify-between mt-10'>
        <h3 className='font-semibold text-2xl'>
          {sortedData.length} Apps Found
        </h3>

        <div className='relative w-48'>
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpen(!open);
            }}
            className='w-full p-2 border rounded-md text-left bg-white'
          >
            Sort by {selected}
          </button>

          {open && (
            <ul className='absolute z-10 w-full bg-white border rounded-md shadow-md mt-1'>
              {options.map((opt) => (
                <li
                  key={opt}
                  onClick={() => {
                    setSelected(opt);
                    setOpen(false);
                  }}
                  className='p-2 hover:bg-gray-100 cursor-pointer'
                >
                  {opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className='w-full mt-4 flex flex-col'>
        {sortedData.length === 0 ? (
          <ProductNotFound />
        ) : (
          sortedData.map((apps) => (
            <div
              key={apps.id}
              className='flex flex-row justify-between items-center mb-4 py-3'
            >
              <div className='w-full flex items-center gap-10'>
                <div className='flex items-center'>
                  <img
                    className='object-contain w-20 h-20 rounded-2xl'
                    src={apps.image}
                    alt={apps.title}
                  />
                  <div className='text-start ml-5 flex flex-col justify-center'>
                    <h3 className='font-medium text-[1.25rem]'>{apps.title}</h3>
                    <div className='flex gap-4 mt-2'>
                      <span className='text-[1rem] text-[#00D390]'>
                        {apps.downloads}
                      </span>
                      <span  className='flex h-5 gap-1 text-[1rem] text-[#FF8811]'>
                        <img src={ratingIcon} alt="rating icon" /> {apps.ratingAvg}
                      </span>
                      <span className='text-[1rem] text-[#627382]'>
                        {apps.size} MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(apps.id)}
                className='bg-[#00D390] cursor-pointer text-white rounded-md px-5 py-3'
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
