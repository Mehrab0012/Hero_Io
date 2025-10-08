import React from 'react';
import Header from '../components/Header/Header';
import Testimonials from '../components/Header/Testimonials';
import { useLoaderData } from 'react-router';
import TrendingApps from './TrendingApps';

const Home = () => {
    const data = useLoaderData();
    const HomeProducts = data.slice(0, 8)

    return (
        <div className=''>
            <Header></Header>
            <Testimonials></Testimonials>
            <TrendingApps  HomeProducts={HomeProducts}></TrendingApps>
        </div>
    );
};

export default Home;