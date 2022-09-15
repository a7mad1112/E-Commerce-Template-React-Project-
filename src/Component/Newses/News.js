import './News.css';
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';



const News = ({ product }) => {
    return (
        <div className="news w-100 text-start mt-3 " >
            <div className='date'> {product.date} </div>
            <div className="imag-box w-100 mb-4 "> 
                <div className='imag w-100'> <img className="img-fluid w-100" src={product.imag} alt='img'/>  </div>
                <div className='icons d-flex'>
                    <div><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></div>
                    <div><FontAwesomeIcon icon={faEnvelope} /></div>
                </div>
            </div>
            <h5 className="  "> { product.title } </h5>
            <p className=" text-black-50 "> { product.desc } </p>
            <span className=" text-black-50 ">Read More..</span>
            
        </div>
    )
}
export default News;