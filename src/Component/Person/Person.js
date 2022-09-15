import './Person.css';
const Person = ({ person }) => {
    return (
        <div className="person me-auto d-md-flex pe-5 ps-5 mt-5 mb-5">
            <div className="imag me-3 mb-3">
                <img src={person.imag} />
            </div>
            <div className="text text-start text-capitalize ">
                <h5>{ person.desc }</h5>
                <h6>{ person.name }</h6>
            </div>
        </div>
    )
}
export default Person;