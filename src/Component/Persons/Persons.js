import { useState } from "react";
import img1 from '../images/testimonial_img1.jpg';
import img2 from '../images/testimonial_img3.jpg';
import img3 from '../images/testimonial_img2.jpg';
import OneSwiper from "../OneSwiper/OneSwiper";
import './Persons.css'
const Persons = () => {
    const [dataShow, setdataShow] = useState([
        {id: 1, imag: img1, name:'Wed Censtoriya ( Sr. Service Manager )', desc: '“ Make a type specimen book. only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimenfive centuries... ”' },
        {id: 2, imag: img2, name:'Wed Censtoriya ( Sr. Service Manager )', desc: '“ Make a type specimen book. only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimenfive centuries... ”' },
        {id: 3, imag: img3, name:'Wed Censtoriya ( Sr. Service Manager )', desc: '“ Make a type specimen book. only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was make a type specimenfive centuries... ”' },
    ]);
    return (
        <section className="persons pt-5 pb-5 ">
            <div className="container-fluid">
                <OneSwiper nSlides={1} dataShow={dataShow} />
            </div>
        </section>
    )
}
export default Persons;