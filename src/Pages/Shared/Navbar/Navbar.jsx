import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import menuIcon from "../../../../public/Group 1.svg"
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css"
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>

            {/* For mobile devices */}
            <div className="smallDevices-nav-container">
                {/* Menu item and website title */}
                <div className="title-menu-container">
                    <div>
                        <div className="menu-button-container">
                            <button className="menu-button" onClick={() => setMenuOpen(true)}><img src={menuIcon} alt="" /></button>
                        </div>
                        {menuOpen &&
                            //  cross button
                            <div className="small-device-navlinks">
                                <div className="cross-btn-container">
                                    <button className="cross-btn" onClick={() => setMenuOpen(false)}><RxCross2 className="cross-btn-icon"></RxCross2></button>
                                </div>
                                {/* title */}
                                <div className="title-container">
                                    <h3 className="small-device-menu-title">Taste Now</h3>
                                </div>
                                {/* border line */}
                                <div className="border-container">

                                </div>
                                {/* navlinks */}
                                <div>
                                    <ul className="small-device-links-container">
                                        <li className="list">
                                            <NavLink to="/" className="active">Home</NavLink>
                                        </li>
                                        <li className="list">
                                            <NavLink className="pending">About Us</NavLink>
                                        </li>
                                        <li className="list">
                                            <NavLink className="pending">Blog</NavLink>
                                        </li>
                                        <li className="list">
                                            <NavLink className="pending">Contact Us</NavLink>
                                        </li>
                                    </ul>
                                    <div className="" style={{ display: 'flex', justifyContent: "center", marginTop: "100px", marginBottom: "136px", border: "none" }}>
                                        <button className="sign-up-btn" style={{ border: "none" }} >Sign Up</button>
                                    </div>
                                </div>


                            </div>}
                    </div>
                    <div className="website-title">Taste Now</div>
                </div>
                {/* cart icon */}
                <div>
                    <AiOutlineShoppingCart className="cart-icon"></AiOutlineShoppingCart>
                </div>
            </div>


            {/* For large devices */}
            <nav className=" nav-container">
                {/* Website name */}
                <div className="website-title">Taste Now</div>
                {/* Navlinks */}
                <div>
                    <ul className="list-container">
                        <li className="list">
                            <NavLink to="/" className="active">Home</NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="pending">About Us</NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="pending">Blog</NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="pending">Contact Us</NavLink>
                        </li>
                        <li className="list">
                            <NavLink className="pending">
                                <AiOutlineShoppingCart className="cart-icon" />
                            </NavLink>
                        </li>
                        <li className="list ">
                            <NavLink className="sign-up-btn pending">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;