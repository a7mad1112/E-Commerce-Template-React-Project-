import msgImg from '../images/mail.png';
import './MyForm.css';
const MyForm = () => {
    return (
        <div className="my-form w-100 bg-white h-100 pt-5 pb-5 ps-3 pe-3 text-center">
            <img className='mb-1' src={msgImg} alt='msg' />
            <h3 className=' fw-bold fs-2 text-black '>Newsletter</h3>
            <p className=' text-black-50 '>Accessorise your outfit with the seasons collection of
                jewellery from the Uniqness
            </p>
            <form method='POST' className='text-center'>
                <div> <input className=' mt-4 ' type='email' required placeholder='Enter yout email address'/> </div>
                <div> <input className=' mt-3 text-center fw-bold ' type='submit' value='Subscribe'/> </div>
            </form>
        </div>
    )
};
export default MyForm;