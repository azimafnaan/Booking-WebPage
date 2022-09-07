import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MailList from '../../components/MailList/MailList';
import Navbar from '../../components/Navbar/Navbar';
import './Hotel.css';
const Hotel = () => {
    const photos = [
        {
            src: "https://media.timeout.com/images/103626392/image.jpg"
        },
        {
            src:"http://cdn.cnn.com/cnnnext/dam/assets/190816161527-hotel-views-intercontinental-hong-kong.jpg"
        },
        {
            src:"http://cdn.cnn.com/cnnnext/dam/assets/160506135108-hong-kong-hotel-intercontinental.jpg"
        },
        {
            src:"http://cdn.cnn.com/cnnnext/dam/assets/160506134941-hong-kong-hotel-icon.jpg"
        },
        {
            src:"https://cdn.cnn.com/cnnnext/dam/assets/160506140647-hong-kong-ritz-carlton-super-169.jpg"
        },
        {
            src:"https://www.telegraph.co.uk/content/dam/travel/view-from-raffles-seychelles-pool-villa-xlarge.jpg?imwidth=1200"
        }
    ];
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now</button>
                    <h1 className="hotelTitle">
                        Grand Hotel
                    </h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighLight">
                        Book a stay Over $124 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map(photo => (
                            <div className="hotelImgWrapper">
                                <img src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">
                                Stay in The Heart of Krakow
                            </h1>
                            <p className="hotelDesc">
                            NH Barajas is located within 2.5 mi of Barajas Airport and the IFEMA Trade Fair. It offers free Wi-Fi throughout and free airport shuttle service, subject to availability.All of the modern, air-conditioned rooms at NH Barajas include a flat-screen TV with satellite channels. They also have heating and a hairdryer. One child under 12 stays free when sharing with 2 adults.NH Barajas has an à la carte restaurant serving Mediterranean dishes. There is also a café-bar and a fitness center with free access for clients equipped with body building and cardiovascular equipment. Lorem ipsum dolor sit amet consectetur adipisicing elit. In, esse. </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect For a 9-night Stay!</h1>
                            <span>
                                Located in the real heart of krakow, this property has an excellent location score of 9.8 
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer/>
            </div>
        </div>
    );
};

export default Hotel;