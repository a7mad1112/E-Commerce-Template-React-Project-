import './Featured.css';
import Product from "../Product/Product";
import imag1 from  '../images/1-pride-products-images_3.jpg';
import imag2 from  '../images/2-pride-products-images_4.jpg';
import imag4 from  '../images/4-pride-products-images_9.jpg';
import imag5 from  '../images/5-pride-products-images_9.jpg';
import imag3 from  '../images/3-pride-products-images_6.jpg';
import imag6 from  '../images/6-pride-products-images_9.jpg';
import imag7 from  '../images/7-pride-products-images_11.jpg';
import React, { useRef, useState } from "react";
import MySwiper from '../Swiper/Swiper';


////////////////


const Products = ({ secTitle }) => {
    const [products, setProducts] = useState([
        {imag: imag1, sale: 'SALE', title: 'Fuji Film GFX', price: '59.00$', oldPrice:'69.00$', id: 1},
        {imag: imag4, sale: '0', title: 'Electric Oven', price: '62.00$', id: 4},
        {imag: imag5, sale: '0', title: 'Logitech Headphone', price: '45.00$', oldPrice:'55.00$', id: 5},
        {imag: imag3, sale: 'SALE', title: 'Bosch Electric Oven', price: '45.00$', oldPrice:'54.00$', id: 3},
        {imag: imag6, sale: '0', title: 'Samsung 4K UHD TV', price: '60.00$', id: 6},
        {imag: imag2, sale: 'SALE', title: 'HP Gaming Laptop', price: '66.00$', id: 2},
        {imag: imag7, sale: '0', title: 'lorem ipsum', price: '53.00$', id: 8},
    ])
    
    return (
        <section className="featured pt-5 pb-5">
            <div className="container-fluid">
                <h2 className="section-title mb-4 fw-bold ">
                    { secTitle }
                </h2>
                <MySwiper from='featured' isLopp={true} products={products} Card={Product} />
            </div>
        </section>
    )
}
export default Products;




                        