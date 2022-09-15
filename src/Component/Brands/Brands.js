import MyForm from '../MyForm/MyForm';
import './Brands.css'
const Brands = () => {
    // subbanner4.jpg
    return (
        <section className="brands pt-5 pb-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 bg-img text-end p-5">
                        <div className='text ms-auto'>
                            <h2 className=' mt-5 fw-bold fs-1 '>Best Brands</h2>
                            <h4 className='fs-2 mb-3'>Headphones & Earphones</h4>
                            <h6 className='mb-3'>Wireless & Bluetooth Headphones</h6>
                            <button className=' bg-white fw-bold mb-5 '>Shop Now</button>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <MyForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Brands;