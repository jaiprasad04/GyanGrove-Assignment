import { TiLocation } from "react-icons/ti";
import { IoIosArrowForward } from "react-icons/io";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

import './index.css'

const Header = () => {
    return (
        <nav className="nav-bar">
            <div className="responsive-navbar">
                <div className="desktop-view">
                    <div className="logo-heading-container">
                        <h1 className="logo-header">BookUsNow</h1>
                        <p className="location-event"><TiLocation size={14} />Mumbai, India <IoIosArrowForward /></p>
                    </div>
                    <div className="middle-container">
                        <div className="button-input-container">
                            <button type="button" className="category-button"><IoMenu size={14} /> Categories</button>
                            <div className="input-container">
                                <input type="search" className="input" placeholder="DJI phantom"/>
                                <button type="button" className="search-button"><IoSearchSharp size={14} color="#B0BABF" /></button> 
                            </div>
                        </div>
                        <ul className="list-container">
                            <li className="list-item">Live shows</li>
                            <li className="list-item">Streams</li>
                            <li className="list-item">Movies</li>
                            <li className="list-item">Plays</li>
                            <li className="list-item">Events</li>
                            <li className="list-item">Sports</li>
                            <li className="list-item">Activities</li>
                        </ul>
                    </div>
                    <div className="sign-in-container">
                        <p className="favorite-button"><MdOutlineFavorite size={12}/> Favorites</p>
                        <button type="button" className="sign-button">Sign In</button>
                    </div>
                </div>
                <div className="mobile-view">
                    <div className="mobile-responsive-bar">
                        <div className="logo-heading-container">
                            <h1 className="logo-header">BookUsNow</h1>
                            <p className="location-event"><TiLocation size={14} />Mumbai, India <IoIosArrowForward /></p>
                        </div>
                        <div className="buttons-container">
                            <button type="button" className="contact-button"><IoSearchSharp size={20} /></button> 
                            <button type="button" className="contact-button"><MdOutlineFavorite size={20} /></button>
                            <button type="button" className="contact-button"><BsFillPersonFill size={20} /></button>
                        </div>
                    </div>
                    <ul className="list-container">
                        <li className="list-item">Live shows</li>
                        <li className="list-item">Streams</li>
                        <li className="list-item">Movies</li>
                        <li className="list-item">Plays</li>
                        <li className="list-item">Events</li>
                        <li className="list-item">Sports</li>
                        <li className="list-item">Activities</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header