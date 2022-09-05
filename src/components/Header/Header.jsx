import { faAtom, faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";  
import './Header.css';
const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room:1
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
            ...prev, [name]: operation==="i"? options[name] + 1 : options[name] - 1 
        }})
    }
    return (
        <div className="header">
            <div className={type ==="list" ? "headerContainer listMode" : "headerContainer"} >
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
                {type !== "list" &&
                <>
                    <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="inputIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput"/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="inputIcon" />
                        <span onClick={()=>{setOpenDate(!openDate)}} className="headerSearchText">{ `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                       {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"/>}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="inputIcon" />
                        <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${ options.adult } adult -  ${ options.children } children - ${ options.room } room`}</span>
                     {openOptions &&  
                     <div className="options">
                            <div className="optionItem">
                                <span className="optionText">{options.adult}</span>
                                <div className="optionCounter">
                                <button disabled={options.adult <=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                                <span className="optionCounterNumber">1</span>
                                <button className="optionCounterButton"onClick={()=>handleOption("adult","i")}>+</button>
                               </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <=0} className="optionCounterButton"onClick={()=>handleOption("children","d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton"onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <=1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                       <button className="headerBtn">Search</button>
                    </div>
                </div></> }
            </div>
        </div>
    );
};

export default Header;