import './Tast.css';
const Tast = ({ product }) => {
    // console.log(imag)
    return (
        <div className="item w-100"> <img className="img-fluid tastis-img" src={ product.imag } alt='img' /> </div>
    )
};
export default Tast;