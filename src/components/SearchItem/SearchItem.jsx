import React from 'react';
import './SearchItem.css';
import { useNavigate } from 'react-router-dom';
const SearchItem = () => {
    const navigate = useNavigate();
    const handleHotelId = () => {
        navigate("/hotels/1");
    }
    return (
        <div className="SearchItem">
            <img src="https://majestichotelgroup.com/web/majestic/homepage/mobile/slider/00majestic-hotel-and--spa-fachada.jpg" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">
                    Tower Street Apartments 
                </h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubTitle">Studio Apartment with Air Conditioning</span>
                <span className="siFeatures">Entire studio - 1 bathroom - 100m 1 full bed</span>
                <span className="siCancelOp">
                    Free Cancellation
                </span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this  great Price Today</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsTexts">
                        <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button onClick={handleHotelId} className="siCheckButton">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;