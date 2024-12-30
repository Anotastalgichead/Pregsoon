import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image1 from "../Images/Image1.jpg";
import Image2 from "../Images/Images2.jpg";
// import Image3 from "../Images/Images3.jpg";
// import Image4 from "../Images/Images4.jpg";

const ImagesSlider = () => {
    // const Details = [
    //     { text: "Best hospitals around you", height: "174px" },
    //     { text: "Family planning with pregnancy planning", height: "285px" },
    //     { text: "Total care of both mother and child", height: "174px" },
    //     { text: "24hrs support with pregsoon’s caretakers", height: "285px" }
    // ];

    const settings = {
        vertical: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    };

    // const divStyle = {
    //     color: 'red',
    //     backgroundColor: 'blue'
    // };

    return (
        <div style={{
            width: "361px"
        }}>
            <Slider {...settings}>
                <div style={{ height: "174px" }} className="containerShadow">
                    <img
                        src={Image1}
                        alt="Image1"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
                <div style={{ height: "285px" }} className="containerShadow">
                    <img
                        src={Image2}
                        alt="Image2"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </Slider>
        </div >
    );
};

export default ImagesSlider;
