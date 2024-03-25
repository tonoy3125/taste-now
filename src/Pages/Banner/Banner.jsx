
import './Banner.css';
const Banner = () => {
    return (
        <div>
            {/* banner container */}
            <div className='banner-container'>
                {/* text */}
                <div className=' text-container'>
                    <h1 className='banner-text-title'>Experience Food <br />
                        <span className='important-text'>Delivery</span> like no other</h1>
                    <p className='banner-text-description'>
                        We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.
                    </p>
                </div>
                {/* banner images */}
                <div className='image-contianer'>
                    <img src="https://i.ibb.co/pb3gtR3/Food-Background-2-1.png" className='banner-image' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;