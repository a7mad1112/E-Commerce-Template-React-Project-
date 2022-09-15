import './Footer.css';
import img1 from '../images/payment1.png';
import img2 from '../images/payment2.png';
import img3 from '../images/payment3.png';
const Footer = () => {
    return (
        <footer className="pt-5 pb-5">
            <div className="container-fluid text-center ">
                <ul className="  list-unstyled d-flex   align-items-center justify-content-center flex-wrap ">
                    <li> <a className="ps-3 pe-3 text-black-50" href="#"> Privacy and Cookie Policy </a> </li>
                    <li> <a className="ps-3 pe-3 text-black-50" href="#"> Orders and Returns </a> </li>
                    <li> <a className="ps-3 pe-3 text-black-50" href="#"> Search Terms </a> </li>
                    <li> <a className="ps-3 pe-3 text-black-50" href="#"> Contact Us </a> </li>
                    <li> <a className="ps-3 pe-3 text-black-50" href="#"> Blog </a> </li>
                    <li> <a className="ps-3 pe-3 text-black-50" href="#"> Advanced Search </a> </li>
                </ul>
                <p className=' text-black-50 w-auto ms-auto me-auto'> Copyright © 2013-present Magento, Inc. All rights reserved. </p>
                <div>
                    <ul className='payment w-100 list-unstyled d-flex justify-content-center align-items-center mb-0'>
                        <li className='ms-1 me-1'> <img src={img1} alt='payment-img'/> </li>
                        <li className='ms-1 me-1'> <img src={img2} alt='payment-img'/> </li>
                        <li className='ms-1 me-1'> <img src={img3} alt='payment-img'/> </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};
export default Footer;