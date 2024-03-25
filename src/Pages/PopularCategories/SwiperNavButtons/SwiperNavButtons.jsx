
import { useSwiper } from 'swiper/react';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const SwiperNavButtons = () => {
    const swiper = useSwiper()
    return (
        <div style={{ display: 'flex', gap: '150px', justifyContent: "center" }}>
            <button style={{ border: 'none', background: 'none' }} onClick={() => swiper.slidePrev()}><MdArrowBackIos style={{ fontSize: '20px', color: "#F72D57" }}></MdArrowBackIos></button>
            <button style={{ border: 'none', background: 'none' }} onClick={() => swiper.slideNext()}><MdArrowForwardIos style={{ fontSize: '20px', color: "#F72D57" }}></MdArrowForwardIos></button>
        </div>
    );
};

export default SwiperNavButtons;