import './ImgSlider.css';
const ImgSlider = (props) => {
    const imgs = props.imgs;
    // console.log(imgs)
    
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    imgs.map((imag => {
                        return (
                            <div className="carousel-item active" key={imag}>
                                <img src={imag} className="d-block w-100" alt={imag}/>
                            </div>
                        )
                    }))
                }             
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
export default ImgSlider;