import './Product.css';
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = ({product}) => {
    return (
        <div className="product w-100" data-sale={product.sale === 'SALE' ? product.sale : false}>
            <img src={product.imag} className='img-fluid'  alt="product" />
            <div className="w-auto text-center stars mt-3">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <h6 className="product-title w-auto text-center mt-2"> {product.title} </h6>
            <h3 className='w-auto text-center mt-2 fs-5 fw-bold'> {product.price} {product.oldPrice && <span className='blue-color'> {product.oldPrice} </span>} </h3>
            <div className="over-icons">
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </div>
    )
};
export default Product;