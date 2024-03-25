/* eslint-disable react/prop-types */
import { FaBookmark } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, A11y, Navigation, } from 'swiper/modules';
import "../../PopularCategories/PopularCategory.css"
import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';
const SwiperSlider = ({ foods }) => {
    return (
        <div>
            <div className='popular-categories-tab&slider-container'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={true}
                    pagination={{
                        clickable: true,

                    }}
                    // responsive issue
                    breakpoints={{
                        // when window width is <= 425px
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is <= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        // when window width is <= 1024px
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}
                >
                    {foods?.map(food => <SwiperSlide key={food.id}>
                        <div className='food-slider-card-container'>
                            <div>
                                <img src={food.foodImage} alt="" className='food-slider-image' />
                                <h3 className='food-slider-foodName'>{food.foodName}</h3>
                                <p className='food-slider-brandName'>{food.brandName}</p>
                                <p className='food-slider-price'>{food.price}</p>
                                <div className="bookmark-rating-container">
                                    <div className="bookmark-icon">
                                        <FaBookmark />
                                    </div>
                                    <div className="rating">{food.rating}</div>
                                </div>
                                <div>
                                    <button className="add-to-cart-btn">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)}
                    <SwiperNavButtons></SwiperNavButtons>
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperSlider;