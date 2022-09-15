import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import Person from "../Person/Person";
const OneSwiper = ({ dataShow, nSlides }) => {
    return (
        <>
        <Swiper
            slidesPerView={nSlides}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                dataShow.map(data => <SwiperSlide key={data.id} >{ <Person person={data} /> }</SwiperSlide>)
            }
        </Swiper>
    </>
    )
};
export default OneSwiper;