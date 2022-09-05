import React from 'react';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://makethetripmatter.com/wp-content/uploads/2022/02/things-to-do-in-Dublin-at-night-11.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://texasbreaking.com/wp-content/uploads/2021/07/us-texas-san-antonio-river-walk.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>532 Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://travelnevada.com/wp-content/uploads/2021/01/Reno17-1024x739.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>533 Properties</h2>
                </div>
           </div>
        </div>
    );
};

export default Featured;