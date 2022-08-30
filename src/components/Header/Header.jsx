import { faAtom, faBed, faCalendarDays, faCar, faPerson, faPlane, faRestroom, faTaxi } from '@fortawesome/free-solid-svg-icons';
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
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="inputIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="inputIcon" />
                       <span className="headerSearchText">Check-in - Check-out</span>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="inputIcon" />
                       <span className="headerSearchText">2 adults - 2 children - 1 room</span>
                    </div>
                    <div className="headerSearchItem">
                       <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;