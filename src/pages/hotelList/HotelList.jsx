import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './HotelList.css';
const HotelList = () => {
    return (
        <div>
            <Navbar />
            <Header type="list"/>
        </div>
    );
};

export default HotelList;