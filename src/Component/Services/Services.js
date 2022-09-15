import { useState } from "react"
import Service from "./Service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faGift, faPhone, faSackDollar } from '@fortawesome/free-solid-svg-icons';
const Services = () => {
    const [srvs, setSrvs] = useState([
        {icon: <FontAwesomeIcon icon={faTruck} />, title: 'FREE SHIPPING WORLDWIDE', desc: 'On oreder over 100$', id: 1},
        {icon: <FontAwesomeIcon icon={faGift} />, title: 'SPECIAL GIFT', desc: 'Special gift for new member', id: 2},
        {icon: <FontAwesomeIcon icon={faPhone} />, title: 'SUPPORT ONLINE 24/7', desc: 'Call : (123) 236 757 914', id: 3},
        {icon: <FontAwesomeIcon icon={faSackDollar} />, title: 'SECURITY PAYMENT', desc: 'Venaim consequeter frenk', id: 4}
    ]);
    return (
        <>
            
            <section className="services bg-white">
                <div className="container-fluid">
                    <div className="row">
                        {
                            srvs.map(srv => <Service srv={srv} key={srv.id} />)
                        }
                    </div>
                </div>
            </section>
                
            
        </>
    )
}
export default Services;