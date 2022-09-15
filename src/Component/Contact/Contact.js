import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import ContBox from "./ContBox";
const Contact = () => {
    const [data, setData] = useState( [
        {id: 1, title: 'PRODUCTS', liItems: ['Delivery', 'About us', 'Prices drop', 'New products', 'Best sales']},
        {id: 2, title: 'OUR COMPANY', liItems: ['Free Shipping', 'New Products', 'Our Lookbook', 'About Us', 'Careers']},
        {id: 3, title: 'ACCOUNT', liItems: ['Your Orders', 'Your Wishlist', 'Delivery', 'Privacy Policy', 'Portfolio']},
        {id: 4, title: 'SERVICES', liItems: ['SERVICES', 'Your Wishlist', 'Delivery', 'Privacy Policy', 'Portfolio']}
    ] );
    return (
        <section className="contact">
            <div className="container-fluid ">
                <div className="content d-flex pt-5 pb-5">
                    <div className="contact-box text-start">
                        <h4 className="section-title mt-0 mb-4 fw-bold "> ADDRESS </h4>
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faHouse} />
                            <span className="text-black-50">44 Shirley Ave, West Chicago, IL 60185 Angelo</span>
                        </div>
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faPhone} />
                            <span className="text-black-50">(123) 569-4371 / (123) 446-8851</span>
                        </div>
                        <div className="mb-3">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span className="text-black-50">demo@prestashop.com</span>
                        </div>
                    </div>
                    {
                        data.map(box => <ContBox data={box} key={box.id} />)
                    }
                </div>

            </div>
        </section>
    )
}
export default Contact;