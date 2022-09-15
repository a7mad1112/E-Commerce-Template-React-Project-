import img1 from '../images/sub-banner1.jpg';
import img2 from '../images/sub-banner2.jpg';
import img3 from '../images/sub-banner3.jpg';
import './Stranger.css';
/////
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Stranger = () => {
    return (
        <section className="stranger">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 imgs-box">
                        <div className="imag w-100 mb-4" data-aos="fade-right" data-aos-delay="300" data-aos-duration="700" data-aos-easing="ease-in-out"> <img className='img-fluid' src={img1} /> </div>
                        <div className="imag w-100" data-aos="fade-right" data-aos-delay="2100" data-aos-duration="700" data-aos-easing="ease-in-out"> <img className='img-fluid' src={img2} /> </div>
                    </div>
                    <div className="col-6 imgs-box">
                        <div className="imag w-100" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="700" data-aos-easing="ease-in-out"> <img className='img-fluid' src={img3} /> </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Stranger;