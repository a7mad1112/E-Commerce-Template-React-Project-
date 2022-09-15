
import './Service.css';
const Service = ({srv}) => {
    // console.log(srv);
    return (
        <div className="srv-box col-md-6 col-lg-3 d-flex pt-4 pb-4 align-items-center ">
            <div className="icon me-3 ">
                <div>{srv.icon}</div>
                <div>{srv.icon}</div>
            </div>
            <div className=' w-75 '>
                <h3 className="srv-title fw-bold mb-0 ">
                    {srv.title}
                </h3>
                <p className=' mt-1 mb-0 '> {srv.desc} </p>
            </div>
        </div>
    )
}
export default Service;