import { useState } from 'react';
import img1 from '../images/euforiaelectronics-blog-1.jpg';
import img2 from '../images/euforiaelectronics-blog-2.jpg';
import img3 from '../images/euforiaelectronics-blog-3.jpg';
import img4 from '../images/euforiaelectronics-blog-4.jpg';
import MySwiper from '../Swiper/Swiper';
import News from './News';
import './Newses.css';
const Newses = () => {
    const [news, setNews] = useState([
        {id: 1, imag: img1, date: 'June 11, 2019', title: 'Lorem Ipsum electronics', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t ...' },
        {id: 2, imag: img2, date: 'June 11, 2019', title: 'Euforia Sample  electronic', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t ...' },
        {id: 3, imag: img3, date: 'June 11, 2019', title: 'Lorem Ipsum Hello Text', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t ...' },
        {id: 4, imag: img4, date: 'June 11, 2019', title: 'Lorem Ipsum electronics', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t ...' },
    ])
    return (
        <section className="newses pt-4 pb-5">
            <div className="container-fluid">
            <h2 className="section-title mb-4 fw-bold fs-1 text-black "> Latest News </h2>
            <MySwiper from='newses' isLopp={false} products={news} Card={News} />
            </div>
        </section>
    )
};
export default Newses;