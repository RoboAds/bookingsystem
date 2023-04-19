import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/robotpage.css'
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import '../styles/robotbookingpage.css'

function RobotBooking() {
    const { name, type, tenure } = useParams();
    const [robots, setRobots] = useState([
        {
            id: 1,
            img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
            name: 'OPAL',
            type: 'rent',
            pricePerDay: 3000,
            features: [
                { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Single display" },
                { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "8 Hours" },
                { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
                { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        },
        {
            id: 2,
            img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
            name: 'PRISM',
            type: 'advertisement',
            pricePerDay: 2000,
            features: [
                { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Dual display" },
                { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
                { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
                { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        },
        {
            id: 3,
            img: "https://faceaqses.s3.amazonaws.com/roboedge/ra100-s3-imp.png",
            name: 'PRISM',
            type: 'rent',
            pricePerDay: 4000,
            features: [
                { icon: "https://static.thenounproject.com/png/199165-200.png", text: "Dual display" },
                { icon: "https://icon-library.com/images/battery-icon-png/battery-icon-png-5.jpg", text: "10 Hours" },
                { icon: "https://static.thenounproject.com/png/2960736-200.png", text: "Indoor" },
                { icon: "https://cdn-icons-png.flaticon.com/512/83/83468.png", text: "4K Display" }
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
        },
    ]);

    const { id } = useParams();
    const robot = robots.find((robot) => robot.name === String(name) && robot.type === String(type));

    if (!robot) {
        return <div>Sorry, no robot found for ID {id}!</div>;
    }

    const {
        img,
        pricePerDay,
        features,
        description,
    } = robot;

    const totalPrice = (pricePerDay * tenure);



    return (
        <div>
            <Navbar></Navbar>
            <div className="product-details">
                <div className="left-hand-side">
                    <img src={img} alt={name} />
                </div>
                <div className="right-hand-side">
                    <div className="product-name">
                        {type} {name}
                    </div>
                    <div className="row">
                        <div className="event-details">
                            <h3 style={{fontSize: '25px'}}>Event Details:</h3>
                            <input
                                type="text"
                                className="form-control2"
                                placeholder="Enter event name"
                                style={{ width: '350px', marginTop: '5px', fontSize: '18px' }}
                            />

                            <input
                                type="text"
                                className="form-control2"
                                placeholder="Enter location of event"
                                style={{ width: '350px', marginTop: '5px', fontSize: '18px' }}
                            />
                            <div className="quantity-selector">
                                <div style={{ display: 'inline-block' }}>
                                    <input
                                        type="text"
                                        className="form-control2"
                                        placeholder="No. of robots"
                                        style={{ width: '105px', marginTop: '5px', marginRight: '5px', fontSize: '18px' }}
                                    />
                                </div>
                                <div style={{ display: 'inline-block' }}>
                                    <input
                                        type="text"
                                        className="form-control2"
                                        placeholder="Start and end dates"
                                        style={{ width: '215px', marginTop: '5px', fontSize: '18px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="company-details">
                            <h3 style={{fontSize: '25px', marginTop: '15px'}}>Company Details:</h3>
                            <input
                                type="text"
                                className="form-control2"
                                placeholder="Enter company name"
                                style={{ width: '350px', marginTop: '5px', fontSize: '18px' }}
                            />
                            <input
                                type="text"
                                className="form-control2"
                                placeholder="Enter contact name"
                                style={{ width: '350px', marginTop: '5px', fontSize: '18px' }}
                            />
                            <input
                                type="text"
                                className="form-control2"
                                placeholder="Enter contact naumber"
                                style={{ width: '350px', marginTop: '5px', fontSize: '18px' }}
                            />
                            <input
                                type="text"
                                className="form-control2"
                                placeholder="Enter contact email address"
                                style={{ width: '350px', marginTop: '5px', fontSize: '18px' }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RobotBooking;
