import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Header/Navbar';
import Loader from '../components/loader/Loader';

const Layout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ? <Loader/> : <Outlet></Outlet>
            }

            <Footer></Footer>
        </div>

    );
};

export default Layout;
