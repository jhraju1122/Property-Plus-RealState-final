import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shares/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer1 from '../Shares/Footer/Footer1';
import Footer2 from '../Shares/Footer/Footer2';
import AdvertisementSection from '../AdvertisementSection/AdvertisementSection';
import UserReview from '../UserReview/UserReview';
import AllProperties from '../AllProperties/AllProperties';

const Home = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Banner></Banner>
             <AdvertisementSection></AdvertisementSection>
             <UserReview></UserReview>
             <AllProperties></AllProperties>
            <Outlet></Outlet>
            <Footer1></Footer1>
            <Footer2></Footer2>
        </div>
    );
};

export default Home;