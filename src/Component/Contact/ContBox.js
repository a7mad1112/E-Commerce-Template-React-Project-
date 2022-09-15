
const ContBox = ({ data }) => {
    return (
        <div className="ps-3 contact-box">
            <h4 className="section-title mt-0 mb-4 fw-bold "> { data.title } </h4>
            <ul className=" list-unstyled text-start ms-auto me-auto">
                {
                    data.liItems.map((item, i) => <li key={i}> <a className="text-black-50" href="#">{item} </a> </li>)
                }
            </ul>
        </div>
    )
};
export default ContBox;