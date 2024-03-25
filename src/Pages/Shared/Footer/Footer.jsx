import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container">
                {/* website name and socail link */}
                <div className="title-social-link-container">
                    <h3 className="website-name">Taste Now</h3>
                    <div className="social-links-container">
                        <FaFacebookSquare /> <BsInstagram /> <FaTwitter /> <FaYoutube />
                    </div>
                </div>


                <div className="all-servicies-container">
                    {/* 1st service item */}
                    <div>
                        <ul className="service-container">
                            <li>Seslendirme ve Alt Jazz</li>
                            <li>Media Market</li>
                            <li>Gillie</li>
                            <li>Size Last</li>
                        </ul>
                    </div>

                    {/* 2ns service item */}
                    <div>
                        <ul className="service-container">
                            <li>Self Betimes</li>
                            <li>Yatırımcı İlişkileri</li>
                            <li>Basal Himmler</li>
                        </ul>
                    </div>

                    {/* 3rd servie item */}
                    <div>
                        <ul className="service-container">
                            <li>Yard Market</li>
                            <li>Is İmkanları</li>
                            <li>Car Tercihleri</li>
                        </ul>
                    </div>
                    {/* 4th service item */}
                    <div>
                        <ul className="service-container">
                            <li>Hedge Karla</li>
                            <li>Mullein Koşulları</li>
                            <li>Autumnal Bulgier</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="small-device-social-links">
                <FaFacebookSquare /> <BsInstagram /> <FaTwitter /> <FaYoutube />
            </div>
        </footer>
    );
};

export default Footer;