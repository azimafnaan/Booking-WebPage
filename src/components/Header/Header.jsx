import { faAtom, faBed, faCar, faPlane, faRestroom, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerItem">
                <div className="headerIcon active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerIcon">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerIcon">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerIcon">
                    <FontAwesomeIcon icon={faAtom} />
                    <span>Attractions</span>
                </div>
                <div className="headerIcon">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
                </div>
                <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
            </div>
        </div>
    );
};

export default Header;