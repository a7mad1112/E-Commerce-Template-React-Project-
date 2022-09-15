import MySwiper from "../Swiper/Swiper";
import img1 from '../images/blogo1.png';
import img2 from '../images/blogo2.png';
import img3 from '../images/blogo3.png';
import img4 from '../images/blogo4.png';
import img5 from '../images/blogo5.png';
import img6 from '../images/blogo6.png';
import img7 from '../images/blogo7.png';
import img8 from '../images/blogo8.png';
import img9 from '../images/blogo9.png';
import { useState } from "react";
import Tast from "./Tast";
import './Tastis.css';
const Tastis = () => {
    const [images, setImages] = useState([
        {id: 1, imag: img1},
        {id: 2, imag: img2},
        {id: 3, imag: img3},
        {id: 4, imag: img4},
        {id: 5, imag: img5},
        {id: 6, imag: img6},
        {id: 7, imag: img7},
        {id: 8, imag: img8},
        {id: 9, imag: img9}
    ]);
    // console.log(images)
    return (
        <section className="tastis pt-5 pb-5">
            <div className="container-fluid">
                <MySwiper from='tastis' isLopp={true} products={images} Card={Tast} />
            </div>
        </section>
    )
}
export default Tastis;