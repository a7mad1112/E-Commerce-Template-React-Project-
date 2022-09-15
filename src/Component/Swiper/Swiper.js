// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Swiper/Swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const MySwiper = ({products, isLopp, Card, from}) => {
    // console.log(parseInt(getComputedStyle(document.body).getPropertyValue("width")));
    // parseInt(getComputedStyle(document.body).getPropertyValue("width")) <= 767 && document.getElementsByClassName('swiper-slide').style.width = '50%'
    // console.log(products)
    return (
        <Swiper
                    slidesPerView={
                        from === 'featured' ? (
                            parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 1000 ? 4 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 767 ? 3 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 500 ? 2 : 1
                        ): from === 'newses' ? (
                            parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 1000 ? 3 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 767 ? 2 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 500 && 1
                        ): from === 'tastis' && (
                            parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 1200 ? 6 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 1000 ? 5 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 767 ? 4 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 500 ? 2 : parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 350 && 1
                        )
                        
                    }
                    // slidesPerView={ from === 'featured' ? parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 1000 ? 4 : parseInt( getComputedStyle(document.body).getPropertyValue("width")) > 767 ? 3 : parseInt( getComputedStyle(document.body).getPropertyValue("width")) > 500 ? 2 : 1: parseInt(getComputedStyle(document.body).getPropertyValue("width")) > 1000 ? 3 : parseInt( getComputedStyle(document.body).getPropertyValue("width")) > 767 ? 2 : parseInt( getComputedStyle(document.body).getPropertyValue("width")) > 500 && 2 }
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={isLopp}
                    loopFillGroupWithBlank={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    >
                        {
                            products.map(prod => <SwiperSlide key={prod.id} > <Card product={prod} /> </SwiperSlide>)
                        }
                </Swiper>
    )
}
export default MySwiper;